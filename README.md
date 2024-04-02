```markdown
# Command Line Todo

This is a simple command-line todo list application written in Node.js. It allows users to manage their tasks directly from the terminal.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Mido191020/command-line-todo.git
   ```

2. Navigate into the project directory:
   ```bash
   cd command-line-todo
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   node app.js
   ```

Now the application is up and running, and you can start managing your tasks from the command line!

## Usage

The application supports the following commands:

- `list`: Lists all the tasks.
- `add [taskDescription]`: Adds a new task with the provided description.
- `delete [taskIndex]`: Deletes the task at the specified index.

Here's how you can use the commands:

- To list all tasks:
  ```bash
  node app.js list
  ```

- To add a new task:
  ```bash
  node app.js add "Buy groceries"
  ```

- To delete a task (replace `[taskIndex]` with the index of the task you want to delete):
  ```bash
  node app.js delete [taskIndex]
  ```
```
