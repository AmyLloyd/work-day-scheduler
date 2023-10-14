
//Loop to retrieve previous data from localStorage. It will run through every possible hour 
for (var i=9; i<18; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`)) 
}


// //Write functions that identify the description and the key name in relation to the id and send that to local storage

$(".saveBtn").click(function(){
  console.log("Click");
  var time = $(this).parent().attr("id");
  var value = $(this).siblings(".description").val();
  localStorage.setItem(time,value);
});

var currentHour = dayjs().hour();

//Set current day in header
var today = dayjs();
var dayWeek = today.format('dddd D MMMM YYYY');
$('#currentDay').text(dayWeek);
$('#currentDay').attr('class', '.hour');


//colour-code the description divs with past, present future classes
//loop through the timeblocks

for (var i = 9; i < 18; i++) {
  if (i === currentHour) { 
     $(`#hour-${i} .description`).addClass("present");
    } else if 
    (i < currentHour) {
      $(`#hour-${i} .description`).addClass("past");
    } else {
      $(`#hour-${i} .description`).addClass("future")
    }
}
   

//from jquery switchClass
// $( "div" ).click(function() {
//   $( this ).switchClass( "big", "blue", 1000, "easeInOutQuad" );
// });





  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
