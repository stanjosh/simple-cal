// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentHour;
var timeBlockText;




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












  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //











  // TODO: Add code to display the current date in the header of the page.



  $(document).ready(function() {
    calendarInit()
  })