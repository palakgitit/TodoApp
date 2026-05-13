# Real-Time Todo Management System

## roject Definition

### Title
Real-Time Todo Management System

### Objective
Develop a real-time styled Todo Management System using:

- Node.js
- Express.js
- EJS
- Local JSON Storage

The application allows users to:

- Add tasks
- Track task progress
- Edit task details
- Delete tasks

This project focuses on practical backend CRUD operations with a professional UI structure.

---

# Features

## Dashboard Module

The dashboard acts as the homepage of the application.

### Dashboard Contains

- Navbar
- Task statistics cards
- Add task button
- Task table

### Dashboard Cards

- Total Tasks
- Pending Tasks
- Completed Tasks

### Output

Users can instantly view task summaries.

---

## Task Creation Module

### Input Fields

- Task Title
- Task Description
- Task Priority

### Logic

- Accept form data
- Generate unique task ID
- Store task inside array object
- Save tasks into JSON file

### Output

New tasks appear immediately in dashboard table.

---

## Task Listing Module

### Display Table Fields

- Task ID
- Title
- Description
- Priority
- Status
- Actions

### Actions

- Edit
- Delete
- Status Change

### UI Requirement

Responsive Bootstrap table.

---

## Task Update Module

### Logic

- Open edit page using task ID
- Load previous values
- Update task object
- Save updated task

### Output

Updated task appears instantly.

---

## Task Delete Module

### Logic

- Select task by ID
- Remove task from array
- Save updated data

### Output

Deleted task disappears from dashboard.

---
##  ScreenShots

    ![alt text](<Screenshot 2026-05-13 101140.png>)


    ![alt text](<Screenshot 2026-05-13 101209.png>)


    ![alt text](<Screenshot 2026-05-13 101157.png>)
## Task Status Management Module

### Status Flow

```txt
Pending → In Progress → Completed


---


