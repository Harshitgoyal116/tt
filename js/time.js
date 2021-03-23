// running day show
var d = new Date();
var n = d.getDay()

if (n == 1) {
    var week = document.getElementById('week-1');
    week.classList.add("run");
} else if (n == 2) {
    var week = document.getElementById('week-2');
    week.classList.add("run");
} else if (n == 3) {
    var week = document.getElementById('week-3');
    week.classList.add("run");
} else if (n == 4) {
    var week = document.getElementById('week-4');
    week.classList.add("run");
} else if (n == 5) {
    var week = document.getElementById('week-5');
    week.classList.add("run");
} else {
    var week1 = document.getElementById('week-1');
    var week2 = document.getElementById('week-2');
    var week3 = document.getElementById('week-3');
    var week4 = document.getElementById('week-4');
    var week5 = document.getElementById('week-5');
    week1.classList.remove("run");
    week2.classList.remove("run");
    week3.classList.remove("run");
    week4.classList.remove("run");
    week5.classList.remove("run");
}