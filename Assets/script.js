


var timeBlockText;
var currentHour = dayjs();

function displayTime() {
  return currentHour.format("dddd, MMM D, hh:mm:ss");
}

$("#currentDay").text(displayTime());



function loadTimeBlockText() {
  timeBlockText = { ...localStorage };
  for (var i in timeBlockText) {
    $(".time-block").each(function () {
      let content = timeBlockText[$(this).attr("id")];
      $(this).children("textarea").val(content);
    });
  }
}

function colorTimeBlocks() {
  $(".time-block").each(function (i) {
    let hour = $(this).attr("id").split("-")[1];
    if (hour > currentHour.hour()) {
      $(this).addClass("future");
    } else if (hour < currentHour.hour()) {
      $(this).addClass("past");
    } else {
      $(this).addClass("present");
    }
  });
}

function calendarInit() {
  var startTime = 9;
  var endTime = 18;
  for (i = startTime; i < endTime; i++) {
    let time = i;
    if (time == 0) {
      time = "12 AM";
    } else if (time <= 12) {
      time += "AM";
    } else if (time >= 13) {
      time -= 12;
      time += "PM";
    }

    let timeBlock = "";
    timeBlock += '<div id="hour-' + i + '" class="row time-block">';
    timeBlock +=
      '<div class="col-2 col-md-1 hour text-center py-3">' + time + "</div>";
    timeBlock +=
      '<textarea class="col-8 col-md-10 description" rows="3"></textarea>';
    timeBlock +=
      '<button class="btn saveBtn col-2 col-md-1" aria-label="save">';
    timeBlock += '<i class="fas fa-save" aria-hidden="true"></i>';
    timeBlock += "</button>";
    timeBlock += "</div>";
    $("#timeBlockContainer").append(timeBlock);
  }
  loadTimeBlockText();
  colorTimeBlocks();
}




$(document).ready(function () {
  setInterval(() => {
    currentHour = new dayjs();
    $("#currentDay").text(displayTime());
  }, 1000);
  calendarInit();
  
  $(".time-block .saveBtn").on("click", function () {
    let title = $(this).parents(".time-block").attr("id");
    let content = $(this).siblings("textarea").val();
    localStorage.setItem(title, content);
  });
});
