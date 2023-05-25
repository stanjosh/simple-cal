// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentHour;
var timeBlockText;

$(document).ready(function() {
  calendarInit()
})


function loadTimeBlockText() {
  timeBlockText = {...localStorage}
  for (var i in timeBlockText) {
    $('.time-block').each(function(i) {
      console.log($(this).attr('id'))
      let content = timeBlockText[$(this).attr('id')]
      console.log(content)
      $(this).children('textarea').val(content)
      })
    }
}



function clearTimeBlockText() {
  localStorage.clear()
  
}

function calendarInit() {
  loadTimeBlockText()
  updateTime()
  console.log(currentHour)
}

function updateTime() {
  currentHour = new Date().getHours()
}


  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

$('.time-block .saveBtn').on('click', function(event) {
  let title = $(this).parents('.time-block').attr('id')
  let content = $(this).siblings('textarea').val()
  localStorage.setItem(title, content)
  
  //this finds the time block what where a save button was clicked
  // TODO: use the id in the containing time-block as a key to save the user input in
  // local storage. 
  
})





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



