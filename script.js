// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentHour = 10;
var timeBlockText;




function loadTimeBlockText() {
  timeBlockText = {...localStorage}
  for (var i in timeBlockText) {
    $('.time-block').each(function() {
      let content = timeBlockText[$(this).attr('id')]
      $(this).children('textarea').val(content)
      })
    }
}


function clearTimeBlockText() {
  localStorage.clear()

}

function calendarInit() {
  currentHour = new Date().getHours()
  loadTimeBlockText()
  colorTimeBlocks()
  displayTime()
}




$('.time-block .saveBtn').on('click', function() { // miracles
  let title = $(this).parents('.time-block').attr('id')
  let content = $(this).siblings('textarea').val()
  localStorage.setItem(title, content)
})





  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
function colorTimeBlocks() {
    $('.time-block').each(function(i){
      let hour = $(this).attr('id').split("-")[1]
      if (hour > currentHour) {
        $(this).addClass('future')
      }
      else if (hour < currentHour) {
        $(this).addClass('past')
      }
      else{
        $(this).addClass('present')
      }
    })
}








function displayTime() {
  let now = new Date();
  const week = ['Sunday', 'Monday', 'Tuesday', 
  'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let day = week[now.getDay()]
  let time = now.toLocaleTimeString()
  $('#currentDay').text(day + ', ' + time)
}

  $(document).ready(function() {
    calendarInit()
  })