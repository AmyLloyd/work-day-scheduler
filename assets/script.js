
//Loop to retrieve previous data from localStorage. It will run through every possible hour 
for (var i=9; i<18; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`)) 
}

//get element by id for each hour container
// var saveButtonEl = $(".saveBtn");
// var hour9El = $("#hour-9");
// var hour10El = $("#hour-10");
// var hour11El = $("#hour-11");
// var hour12El = $("#hour-12");
// var hour1El = $("#hour-1");
// var hour2El = $("#hour-2");
// var hour3El = $("#hour-3");
// var hour4El = $("#hour-4");

// //Write functions that identify the description and the key name in relation to the id and send that to local storage


$(".saveBtn").click(function(){
  console.log("Click");
  var time = $(this).parent().attr("id");
  var value = $(this).siblings(".description").val();
  localStorage.setItem(time,value);
});

// From tutor var currentHour = dayjs().hour();

//Set current day in header
var today = dayjs();
var dayWeek = today.format('dddd');
$('#currentDay').text(dayWeek);
$('#currentDay').attr('class', '.hour');






// var returnedHour9;
// var returnedHour10;
// var returnedHour11;
// var returnedHour12;
// var returnedHour1; 
// var returnedHour2; 
// var returnedHour3; 
// var returnedHour4;

// //retrieve from storage
// function renderLastTimeInput() {
//     returnedHour9 = localStorage.getItem("hour9");
//     returnedHour10 = localStorage.getItem("hour10");
//     returnedHour11 = localStorage.getItem("hour11");
//     returnedHour12 = localStorage.getItem("hour12");
//     returnedHour1 = localStorage.getItem("hour1");
//     returnedHour2 = localStorage.getItem("hour2");
//     returnedHour3 = localStorage.getItem("hour3");
//     returnedHour4 = localStorage.getItem("hour4");

//     hour9El.textContent = returnedHour9;
//     hour10El.textContent = returnedHour10;
//     hour11El.textContent = returnedHour11;
//     hour12El.textContent = returnedHour12;
//     hour1El.textContent = returnedHour1;
//     hour2El.textContent = returnedHour2;
//     hour3El.textContent = returnedHour3;
//     hour4El.textContent = returnedHour4;
// }

// renderLastTimeInput();

//retrieve to screen on page load
// $( document ).ready(function() {
//   renderLastTimeInput();

// });


//

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.