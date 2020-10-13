function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24) % 30);
    var years = Math.floor(t / (1000 * 60 * 60 * 24 * 30) % 12);
    var years1 = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12) % 365);
    return {
        'total': t,
        'years1': years1,
        'years': years,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var years1Span = clock.querySelector('.years1');
    var yearsSpan = clock.querySelector('.years');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        years1Span.innerHTML = t.years1;
        yearsSpan.innerHTML = ('0' + t.years).slice(-2);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "June 20 2022 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 2 * 13 * 24 * 24 * 60 * 60 * 975.0739); // for endless timer
initializeClock('countdown', deadline);