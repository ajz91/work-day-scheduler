// displaying date per documentation for moment.js
const currentTime = moment();
$('#currentDay').text(currentTime.format('MMMM Do, YYYY'));


// we need an object to store the tasks
var tasks = {
    '0900': [],
    '1000': [],
    '1100': [],
    '1200': [],
    '1300': [],
    '1400': [],
    '1500': [],
    '1600': [],
    '1700': []
};

// we need a function to setItem to localStorage
var saveTasks = function() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// now to we need to retrieve the tasks by parsing
var loadTasks = function() {
    JSON.parse(localStorage.getItem('tasks'));
}