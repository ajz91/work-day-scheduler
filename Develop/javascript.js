// displaying date per documentation for moment.js
const currentTime = moment();
$('#currentDay').text(currentTime.format('LLLL'));


// we need an object to store the tasks
const tasks = {
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': []
};

// event listener that grabs siblings of all 'row' text and stores
$('.saveBtn').on('click', function() {
    let taskText = $(this).siblings('.row').val();
    var time = $(this).parent().attr("id");
})

// we need a function to setItem to localStorage
const saveTasks = function() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// now to we need to retrieve the tasks by parsing
const loadTasks = function() {
    JSON.parse(localStorage.getItem('tasks'));
}


// handling time by removing/adding classes for past, present, future

function colorCoder() {
    let checkTime = moment().hour();
    $('.row').each(function() {
        let auditTime = parseInt($(this).attr("id"));

        if (auditTime < checkTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }

        else if (auditTime === checkTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }

        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })

}

loadTasks();
colorCoder();