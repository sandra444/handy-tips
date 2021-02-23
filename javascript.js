// Handy things to remember for programming in Javascript

// .includes() instead of .indexOf()

//when setting and getting values of a selectized dropdown, do not call selectize() again.
// Do like so if it is already selectized:
$('selectior')[0].selectize;

// ideally,store selectors in a variable to cache them and improve legibility when possible:
const input_selector = $('#id_input');