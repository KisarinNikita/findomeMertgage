const basePaste = 11.4;
const squareDiscount = 1;
const vtb = 0.5
const onlyTwoDocs = 0.5;
const kVTB = 1 / 12;
const k1VTB = 1.6;
const minPaste = 10.4;

let currentPaste = basePaste;
let currentPriceFlat = 0;
let currentPricePaste = 0;

$(document).ready(function() {

  $("#app_cost").ionRangeSlider({
      min: 180,
      max: 30000,
      from: 500,
      step: 50,
      postfix: " тыс.руб"
  });

  $("#paste").ionRangeSlider({
      min: 6,
      max: 1000,
      from: 200,
      step: 50,
      to: 800,
      postfix: " тыс.руб"
  });

  $("#period").ionRangeSlider({
      min: 1,
      max: 30,
      from: 3,
      to: 10,
      step: 1,
      postfix: " лет"
  });

  $("#area").on("click", function() {
    if ($(this).is(":checked")) {
      if (currentPaste  > minPaste && currentPaste  + squareDiscount > minPaste) {
          currentPaste -= squareDiscount;
          $("#paste_current").html(currentPaste);
      }
    } else {
      currentPaste += squareDiscount;
      $("#paste_current").html(currentPaste);
    }
  });

  $("#vtbcard").on("click", function() {
    if ($(this).is(":checked")) {
      if (currentPaste > minPaste && currentPaste + vtb > minPaste) {
        currentPaste -= vtb;
        $("#paste_current").html(currentPaste);
      }
    } else {
      currentPaste += vtb;
      $("#paste_current").html(currentPaste);
    }
  });

  $("#twodoc").on("click", function() {
    if ($(this).is(":checked")) {
        if (currentPaste > minPaste && currentPaste + vtb > minPaste) {
          currentPaste += onlyTwoDocs; 
          $("#paste_current").html(currentPaste);
        }
    } else {
      currentPaste -= onlyTwoDocs;
      $("#paste_current").html(currentPaste);
    }
  });


  $("#app_cost").bind("change", function(e) {
    currentPriceFlat = $("#app_cost").val();
    $("#sizeCredit").html(currentPriceFlat - currentPricePaste);
  });

  $("#paste").bind("change", function(e) {
    currentPricePaste = $("#paste").val();
    $("#sizeCredit").html(currentPriceFlat - currentPricePaste);
  });

  $("#period").change(function() {
    let summCredit = parseFloat($("#app_cost").val());
    let creditTerm = parseFloat($("#period").val());
    let currentPaste1 = parseFloat(currentPaste);

    let payment = Math.abs(MonthlyPayment(summCredit, creditTerm, currentPriceFlat));
    let MustMonthly = Math.abs(mustMonthlyIncome(payment));

    payment *= 10000000000000000;
    MustMonthly *= 10000000000000000;

    $("#post_period").html(payment.toString());
    $("#must_payment").html(MustMonthly.toString());
  });

  $("#paste_current").html(currentPaste);

});

let MonthlyPayment = function(summCredit, creditTerm, currentPaste) {
	return Math.pow((summCredit * kVTB * currentPaste) / (1 - (1 + kVTB * currentPaste)), -creditTerm);
}

let mustMonthlyIncome = function(monthlyPayment) {
	return monthlyPayment * k1VTB;
}
