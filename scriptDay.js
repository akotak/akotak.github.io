var dt = new Date();

function renderDate() {
    dt.setDate(1);
    var day = dt.getDay();
    var today = new Date();
    var endDate = new Date(
        dt.getFullYear(),
        dt.getDay() + 1,
        0
    ).getDate();

    var prevDate = new Date(
        dt.getFullYear(),
        dt.getDay(),
        0
    ).getDate();
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"

    ]
    document.getElementById("day").innerHTML = days[dt.getDay()];
    document.getElementById("date_str").innerHTML = dt.toDateString();
    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
    console.log(day);
    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getDay() == today.getDay()) cells += "<div class='today'>" + i + "</div>";
        else
            cells += "<div>" + i + "</div>";
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;

}

function moveDate(arrows) {
    if (arrows == "prev") {
        dt.setDay(dt.getDay() - 1);
    } else if (arrows == 'next') {
        dt.setDay(dt.getDay() + 1);
    }
    renderDate();
}
/*
var dt = new Date();

function renderDate() {
    dt.setDate(1);
    var day = dt.getDay();
    var today = new Date();
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();
    var months = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    document.getElementById("month").innerHTML = months[dt.getMonth()];
    document.getElementById("date_str").innerHTML = dt.toDateString();
    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
    console.log(day);
    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
        else
            cells += "<div>" + i + "</div>";
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;

}

function moveDate(arrows) {
    if (arrows == "prev") {
        dt.setMonth(dt.getMonth() - 1);
    } else if (arrows == 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}

*/
/* function to show the weekly schedule */
function weeklyPlan() {
    var x = document.getElementById("weekPlan");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* function to open Opening Hours*/

const openHoursButton = document.querySelectorAll('[data-open-target]')
const closeHoursButton = document.querySelectorAll('[data-close-target]')
const overlay = document.getElementById('overlay')

openHoursButton.forEach(button => {
    button.addEventListener('click', () => {
        const openHours = document.querySelector(button.dataset.openTarget)
        openHour(openHours)
    })
})

closeHoursButton.forEach(button => {
    button.addEventListener('click', () => {
        const openHours = button.closest('.openHours')
        closeHour(openHours)
    })
})

function openHour(openHours) {
    if (openHours == null) return
    openHours.classList.add('active')
    overlay.classList.add('active')
}

function closeHour(openHours) {
    if (openHours == null) return
    openHours.classList.remove('active')
    overlay.classList.remove('active')
}


/* function to open download*/

const openDownButton = document.querySelectorAll('[data-open-target]')
const closeDownButton = document.querySelectorAll('[data-close-target]')
const overlayDown = document.getElementById('overlay')

openDownButton.forEach(button => {
    button.addEventListener('click', () => {
        const openDown = document.querySelector(button.dataset.openTarget)
        openDownl(openDown)
    })
})

closeDownButton.forEach(button => {
    button.addEventListener('click', () => {
        const openDown = button.closest('.openDown')
        closeDownl(openDown)
    })
})

function openDownl(openDown) {
    if (openDown == null) return
    openDown.classList.add('active')
    overlayDown.classList.add('active')
}

function closeDownl(openDown) {
    if (openDown == null) return
    openDown.classList.remove('active')
    overlayDown.classList.remove('active')
}
/* week */

var timetable = new Timetable()
timetable.setScope(9, 3)
timetable.addtLocations(['Sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'])
timetable.addEvent('Chicago', 'USA', new Date(2020, 11, 22, 2, 35), new Date(2020, 11, 22, 3, 30), { url: '#' })
timetable.addEvent('Chicago', 'USA', new Date(2020, 11, 22, 2, 35), new Date(2020, 11, 22, 3, 30), { url: '#' })
timetable.addEvent('Chicago', 'USA', new Date(2020, 11, 22, 2, 35), new Date(2020, 11, 22, 3, 30), { onclick: function(event) { window.alert('kksndd djd') } })

var render = new Timetable.Renderer()
render.draw()('.timetable')