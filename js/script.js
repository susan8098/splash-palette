"use strict";

// Take the selected value from photo-category and store in a variable
// Take the selected value of width /height and store in two variables

// when the button is submitted
// concat the random image url and store in variable:
// https://source.unsplash.com/category/{category}/{width}x{height}

// display that random image variable onto the page
// Use color thief js to display color palette

$(function () {
	app.init();
});

var app = {};

app.getSelectedValues = function () {
	$('.form-start').on('submit', function (e) {
		e.preventDefault();
		var selectedCategory = document.getElementById('photo-category').value;

		var selectedHeight = $('.height').val();
		var selectedWidth = $('.width').val();

		console.log(selectedCategory);
		console.log(selectedHeight);
		console.log(selectedWidth);
	}); //end of submit
};

app.init = function () {
	app.getSelectedValues();
};