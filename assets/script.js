// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//get element by id for each hour container
var saveButtonEl = $(".saveBtn");
var hour9El = $("#hour-9");
var hour10El = $("#hour-10");
var hour11El = $("#hour-11");
var hour12El = $("#hour-12");
var hour1El = $("#hour-1");
var hour2El = $("#hour-2");
var hour3El = $("#hour-3");
var hour4El = $("#hour-4");

//Write functions that identify the description and the key name in relation to the id and send that to local storage

$(hour9El.children().eq(2)).click(function(){
  var inputDescription = $(this).siblings(".description");
    inputDescription.val();
  var parentEl = $(this).parents(".time-block");
  localStorage.setItem("hour9", inputDescription.val()); 
});

$(hour10El.children().eq(2)).click(function(){
  var inputDescription = $(this).siblings(".description");
    inputDescription.val();
  var parentEl = $(this).parents(".time-block");
  localStorage.setItem("hour10", inputDescription.val()); 
});

$(hour11El.children().eq(2)).click(function(){
  var inputDescription = $(this).siblings(".description");
    inputDescription.val();
  var parentEl = $(this).parents(".time-block");
  localStorage.setItem("hour11", inputDescription.val()); 
});

$(hour12El.children().eq(2)).click(function(){
  var inputDescription = $(this).siblings(".description");
    inputDescription.val();
  var parentEl = $(this).parents(".time-block");
  localStorage.setItem("hour12", inputDescription.val()); 
});

$(hour1El.children().eq(2)).click(function(){
  var inputDescription = $(this).siblings(".description");
    inputDescription.val();
  var parentEl = $(this).parents(".time-block");
  localStorage.setItem("hour1", inputDescription.val()); 
});

$(hour2El.children().eq(2)).click(function(){
  var inputDescription = $(this).siblings(".description");
    inputDescription.val();
  var parentEl = $(this).parents(".time-block");
  localStorage.setItem("hour2", inputDescription.val()); 
});

$(hour3El.children().eq(2)).click(function(){
  var inputDescription = $(this).siblings(".description");
    inputDescription.val();
  var parentEl = $(this).parents(".time-block");
  localStorage.setItem("hour3", inputDescription.val()); 
});

$(hour4El.children().eq(2)).click(function(){
  var inputDescription = $(this).siblings(".description");
    inputDescription.val();
  var parentEl = $(this).parents(".time-block");
  localStorage.setItem("hour4", inputDescription.val()); 
});


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