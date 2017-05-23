


$(document).ready(function() {

  $("#app_cost").ionRangeSlider({
      min: 180,
      max: 30000,
      from: 500,
      step: 50,
      postfix: "тыч.руб"
  });

  $("#paste").ionRangeSlider({
      type: "double",
      min: 6,
      max: 1000,
      from: 200,
      to: 800
  });

  $("#period").ionRangeSlider({
      type: "double",
      min: 1,
      max: 30,
      from: 3,
      to: 10
  });

});
