//to show the current day in the header
var currentDayEl = document.querySelector("#currentDay");

var currentDate = moment().format('dddd, MMMM Do');

var showCurrentDay = function() {
    currentDayEl.innerHTML= currentDate
};

// targets timeblocks to save task and the timeblock it was entered in
var saveSchedule = function() {
    var task = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, task);
};

// gets the values saved in local storage and redisplays them
var loadSchedule = function(){
    $("#9 .task").val(localStorage.getItem("9"));
    $("#10 .task").val(localStorage.getItem("10"));
    $("#11 .task").val(localStorage.getItem("11"));
    $("#12 .task").val(localStorage.getItem("12"));
    $("#13 .task").val(localStorage.getItem("13"));
    $("#14 .task").val(localStorage.getItem("14"));
    $("#15 .task").val(localStorage.getItem("15"));
    $("#16 .task").val(localStorage.getItem("16"));
    $("#17 .task").val(localStorage.getItem("17"));
};

//function to change background color during the day

var now = new Date().getHours();
console.log(now);



showCurrentDay();
loadSchedule();
$("button").click(saveSchedule);
