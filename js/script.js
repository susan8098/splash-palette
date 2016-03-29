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

		var unsplashUrlSize = "https://source.unsplash.com/category/" + selectedCategory + "/" + selectedWidth + "x" + selectedHeight;

		var unsplashUrl = "https://source.unsplash.com/category/" + selectedCategory;

		console.log(selectedCategory);
		console.log(selectedHeight);
		console.log(selectedWidth);

		if (selectedHeight == "" && selectedWidth == "") {
			console.log(unsplashUrl);

			var unsplashUrlImg = $('<div>').html('<img src="' + unsplashUrl + '" alt="">');

			console.log(unsplashUrlImg);

			var unsplashUrlImgContainer = $('.imgContainer').append(unsplashUrlImg);

			var colorThief = new ColorThief();
			colorThief.getPalette(unsplashUrlImgContainer, 8);

			$('.displayColor').append(colorThief);
		} else {
			console.log(unsplashUrlSize);
		}
	}); //end of submit
};

app.init = function () {
	app.getSelectedValues();
};