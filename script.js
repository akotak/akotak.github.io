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
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
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

/* function to open Wait Time*/

const openWaitButton = document.querySelectorAll('[data-open-target]')
const closeWaitButton = document.querySelectorAll('[data-close-target]')
const overlayWait = document.getElementById('overlay')

openWaitButton.forEach(button => {
    button.addEventListener('click', () => {
        const openWait = document.querySelector(button.dataset.openTarget)
        openWaits(openWait)
    })
})

closeWaitButton.forEach(button => {
    button.addEventListener('click', () => {
        const openWait = button.closest('.openWait')
        closeWaits(openWait)
    })
})

function openWaits(openWait) {
    if (openWait == null) return
    openWait.classList.add('active')
    overlayWait.classList.add('active')
}

function closeWaits(openWait) {
    if (openWait == null) return
    openWait.classList.remove('active')
    overlayWait.classList.remove('active')
}