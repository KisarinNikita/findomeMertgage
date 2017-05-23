<<<<<<< Updated upstream



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
=======
const basePaste = 0.114;
const quareDiscount = 0.01;
const vtb = 0.005;
const onlyTwoDocs = 0.005;
const kVTB = 1 / 12;
const k1VTB = 1.6;

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

let countOfCredit = function(priceFlat, firstSum) {
	return priceFlat - firstSum;
}

let MonthlyPayment = function(summCredit, creditTerm, currentPaste) {
	return pow(((summCredit * kVTB * currentPaste) / (1 - (1 + kVTB * currentPaste)), -creditTerm);
}

let mustMonthlyIncome = function(monthlyPayment) {
	return monthlyPayment * k1VTB;
}
>>>>>>> Stashed changes
