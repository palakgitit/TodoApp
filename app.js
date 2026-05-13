const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('css'));


// in order to Read tasks from JSON file as we used tasks.json to store task.
let tasks = JSON.parse(

    fs.readFileSync('tasks.json')

);


app.get('/', (req, res) => {

    res.render('dashboard', {

        tasks: tasks
    });
});


app.get('/add-task', (req, res) => {

    res.render('add-task');
});


app.post('/add-task', (req, res) => {

    const newTask = {

        id: Date.now(),

        title: req.body.title,

        description: req.body.description,

        priority: req.body.priority,

        status: 'Pending'
    };
    tasks.push(newTask);

    fs.writeFileSync(

        'tasks.json',

        JSON.stringify(tasks)

    );


    res.redirect('/');
});


// Get id and with id we redirect to the edit page.
app.get('/edit-task/:id', (req, res) => {

    const taskId = req.params.id;


    const task = tasks.find(

        t => t.id == taskId
    );


    res.render('edit-task', {

        task: task
    });
});



app.post('/update-task/:id', (req, res) => {

    const taskId = req.params.id;
    const task = tasks.find(

        t => t.id == taskId
    );


    task.title = req.body.title;
    task.description = req.body.description;
    task.priority = req.body.priority;
    task.status = req.body.status;


    fs.writeFileSync(

        'tasks.json',

        JSON.stringify(tasks)

    );


    res.redirect('/');
});



app.get('/delete-task/:id', (req, res) => {

    const taskId = req.params.id;


    tasks = tasks.filter(

        t => t.id != taskId
    );


    fs.writeFileSync(

        'tasks.json',

        JSON.stringify(tasks)

    );

    res.redirect('/');
});


// here we get id and then with id find task
app.get('/status-task/:id', (req, res) => {

    const taskId = req.params.id;


    const task = tasks.find(

        t => t.id == taskId
    );


    switch (task.status) {

        case 'Pending':

            task.status = 'In Progress';

            break;


        case 'In Progress':

            task.status = 'Completed';

            break;


        default:

            task.status = 'Pending';
    }


    fs.writeFileSync(

        'tasks.json',

        JSON.stringify(tasks)

    );
    res.redirect('/');
});



app.listen(8000, () => {

    console.log("Server running on port 8000");
});