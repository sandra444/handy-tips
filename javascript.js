// Handy things to remember for programming in Javascript

// .includes() instead of .indexOf()

//when setting and getting values of a selectized dropdown, do not call selectize() again.
// Do like so if it is already selectized:
$('selectior')[0].selectize;

// ideally,store selectors in a variable to cache them and improve legibility when possible:
const input_selector = $('#id_input');

// Datatable, button in header, click on the button but do NOT sort
// when the table header is static (create in html), you can use the stop propogation
// but, this did not seem to work with the table was completely generated in javascript
// because the buttons do not exist on page load
// the stop propagation when buttons exist on load
$( "#col-index1" ).click(function(e) {
	e.stopPropagation();
	//other stuff
});

// think tried this and do not think it worked the same way in all cases, but maybe remember wrong or other issue involved
// instead of
var a_string = "a";
$(document.getElementById('id_location_' + a_string));
// try
$('#id_location_' + a_string);

// when passing variables to includes, just put a space between them
// do not forget about the option for const variables....

