const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args.shift();
const taskDescription = args.join(' ');
const file = path.join(process.cwd(), './tasks');

function loadOrInitializeTaskArray(file, cb) {
    fs.stat(file, (err, stats) => {
        if (err) {
            if (err.code === 'ENOENT') {
                cb(null, []);
            } else {
                cb(err);
            }
        } else {
            fs.readFile(file, 'utf-8', (err, data) => {
                if (err) {
                    cb(err);
                    return;
                }
                let tasks = [];
                try {
                    tasks = JSON.parse(data || '[]');
                } catch (parseErr) {
                    cb(parseErr);
                    return;
                }
                cb(null, tasks);
            });
        }
    });
}

function listTasks(file) {
    loadOrInitializeTaskArray(file, (err, tasks) => {
        if (err) {
            console.error('Error:', err.message);
            return;
        }
        tasks.forEach(task => console.log(task));
    });
}

function storeTasks(file, tasks) {
    fs.writeFile(file, JSON.stringify(tasks), 'utf-8', (err) => {
        if (err) {
            console.error('Error:', err.message);
            return;
        }
        console.log('Tasks saved.');
    });
}

function addTask(file, taskDescription) {
    loadOrInitializeTaskArray(file, (err, tasks) => {
        if (err) {
            console.error('Error:', err.message);
            return;
        }
        tasks.push(taskDescription);
        storeTasks(file, tasks);
    });
}

switch (command) {
    case 'list':
        listTasks(file);
        break;
    case 'add':
        addTask(file, taskDescription);
        break;
    default:
        console.log(`Usage: ${process.argv[0]} list|add [taskDescription]`);
}
