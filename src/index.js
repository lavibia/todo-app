import './styles/style.css';
import './assets/home.png';
import './assets/logo.png';
import './assets/calendar.png';
import './assets/projects.png';
import './assets/add.png';
import './assets/about.png';
import home from './home.js';

console.log('test')

setTimeout(function() {
  document.getElementById('loading').style.display = 'none';
}, 3000);

home();



/*
Project Management: Functions to add, edit, and delete projects. This is crucial for organizing tasks.





Task Management: Functions for adding, editing, and deleting tasks, along with filtering tasks by date, priority.

Subtask Management: Functions for adding, editing, and deleting subtasks within a task.

------. These functions should save data to local storage and retrieve data from it.


Progress Tracking: Calculate and update project progress within your frontend code based on completed tasks stored in local storage. This could be done using a function that calculates the percentage of completed tasks in a project.

Viewing Options: Develop functions to filter and display tasks by day, week, or month within your app, using the data stored in local storage.These functions will allow users to visualize their tasks over different timeframes.

Data Storage: Utilize the browser's local storage API to store and retrieve data. You can use localStorage or sessionStorage to manage your app's data.


----------DATA STRUCTURES-----------
class User {
  constructor(userId, username, email, password) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.password = password;
    this.projects = [];
  }
}

class Project {
  constructor(projectId, title, description) {
    this.projectId = projectId;
    this.title = title;
    this.description = description;
    this.progress = 0; // Progress percentage
    this.creationDate = new Date();
    this.tasks = [];
  }
}

class Task {
  constructor(taskId, title, description, dueDate, priority, category) {
    this.taskId = taskId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
    this.status = "Incomplete";
    this.subtasks = [];
  }
}

class Subtask {
  constructor(subtaskId, description) {
    this.subtaskId = subtaskId;
    this.description = description;
    this.status = "Incomplete";
  }
}

// Example usage:

// Create a user
const user1 = new User(1, "exampleUser", "user@example.com", "hashedPassword");

// Create a project for the user
const project1 = new Project(1, "Project 1", "Description of project 1");
user1.projects.push(project1);

// Create a task within the project
const task1 = new Task(1, "Task 1", "Description of task 1", new Date("2023-11-15"), "High", "Work");
project1.tasks.push(task1);

// Create subtasks within the task
const subtask1 = new Subtask(1, "Subtask 1");
task1.subtasks.push(subtask1);

// Accessing data
console.log(user1); // Access user and their projects
console.log(project1); // Access a project and its tasks
console.log(task1); // Access a task and its subtasks
console.log(subtask1); // Access a subtask


-----------Using localStorage-------
Define your classes as shown in the previous example.

When you need to save or retrieve data to/from local storage, you can use the JSON.stringify and JSON.parse methods to convert your objects to JSON strings and vice versa.

When your app loads, check if the data exists in local storage. If not, create empty arrays to represent user, project, task, and subtask data structures. If it does exist, parse the JSON strings from local storage back into your object instances.

// Saving data to local storage
localStorage.setItem('userData', JSON.stringify(user1));
localStorage.setItem('projectData', JSON.stringify(user1.projects));
localStorage.setItem('taskData', JSON.stringify(project1.tasks));
localStorage.setItem('subtaskData', JSON.stringify(subtask1));

// Retrieving data from local storage
const savedUser = JSON.parse(localStorage.getItem('userData'));
const savedProjects = JSON.parse(localStorage.getItem('projectData'));
const savedTasks = JSON.parse(localStorage.getItem('taskData'));
const savedSubtasks = JSON.parse(localStorage.getItem('subtaskData'));

// Check if data exists in local storage
if (savedUser) {
  // If data exists, create instances from saved data
  const user1 = new User(savedUser.userId, savedUser.username, savedUser.email, savedUser.password);
  user1.projects = savedProjects || [];
  // Continue to populate your data structure
} else {
  // If no data exists, create new instances as needed
  const user1 = new User(1, "exampleUser", "user@example.com", "hashedPassword");
  const project1 = new Project(1, "Project 1", "Description of project 1");
  user1.projects.push(project1);
  // Continue to populate your data structure
}



-----------Using webpack to generate diferent HTML files from templates------
module.exports = {
  entry: {
    app: './src/app.js', // Entry point for your main JavaScript bundle
    anotherPage: './src/anotherPage.js', // Entry point for another JavaScript bundle
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template HTML file for the main entry
      filename: 'index.html', // Output HTML file name
      chunks: ['app'], // Include only 'app' JavaScript bundle
    }),
    new HtmlWebpackPlugin({
      template: './src/anotherPage.html', // Template HTML file for another entry
      filename: 'anotherPage.html', // Output HTML file name
      chunks: ['anotherPage'], // Include only 'anotherPage' JavaScript bundle
    }),
  ],
};


*/