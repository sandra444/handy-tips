// Handy things to remember for programming in Javascript

// .includes() instead of .indexOf()



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


// Watch quote carefully - top is valid, bottom is not
                        $('td[ikey*="' + tikey + '"][row-index*="' + tirow + '"]')
var thisElementList1 = '$("td[ikey*=' + "'" + tikey + "'][row-index*='" + tirow + "']" + '")';


// think tried this and do not think it worked the same way in all cases, but maybe remember wrong or other issue involved
// instead of
var a_string = "a";
$(document.getElementById('id_location_' + a_string));
// try
$('#id_location_' + a_string);

// when passing variables to includes, just put a space between them
// do not forget about the option for const variables....

// a way to get a deep copy deepcopy
new variable/object = JSON.parse(JSON.stringify(myObject))


// HANDY - if something is dynamically generated on the page, MUST have the $(document) before
$(document).on('change', '.each_notes', function (t) { 
    //HANDY - get the id of this in a datatable
    console.log("change text field: ", t.target.id)
});


// HANDY to check if something is checked
if ($(this_attr_id_plus).is(':checked')) { }
// HANDY - need the .trim() after the .html() to strip white space
if ($("#check_load").html().trim() === 'add') { }

// HANDY - to make everything on a page read only
$('.selectized').each(function() { this.selectize.disable() });
$(':input').attr('disabled', 'disabled');
try {
    // HANDY - to make on thing re enabled
    $('#id_se_block_select_string').removeAttr('disabled');
    $('#id_se_block_select_string')[0].selectize.enable();
} catch (err) {
}

// HANDY delete child node
var elem = document.getElementById('div_for_'+thisTableName);
elem.removeChild(elem.childNodes[0]);


// HANDY to fetch the value of selectize (the left one of the tuple - (316, 96)) use .items[0]
// eg 316

// another get method - HANDY - but doesn't work if turned to .value form field
get_pk_id = $(get_this)[0].value;
// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
// https://teamtreehouse.com/community/why-use-val-instead-of-attrvalue#:~:text=There%20is%20actually%20quite%20a,the%20HTML%20document%20is%20created.
"There is actually quite a big difference between .val() and .attr("value"). The former gets the objects desired value (from the HTML code) whereas the latter gets the objects actual value once the HTML document is created.

For example, you could have an object and give it an X value, but then later in your code change its' value to Y with javascript. So the .attr("value") would return X here (because that's what you set the attribute to) whereas the .val() would return Y (because that's what it ended up with)."



// https://github.com/selectize/selectize.js/blob/master/docs/api.md
// HANDY to set the options of selectized dropdown
let $this_dropdown = $('#id_location_'+page_omic_upload_group_id_change);
$this_dropdown[0].selectize.clearOptions();
let this_dict = $this_dropdown[0].selectize;
// fill the dropdown with what brought back from ajax call
// for this specific one, the changed one is always returned as the first
$.each(json.location_dict1, function( pk, text ) {
    this_dict.addOption({value: pk, text: text});
});

//when setting and getting values of a selectized dropdown, do not call selectize() again.
// Do like so if it is already selectized:
$('selectior')[0].selectize;

//HANDY get the value from selectized
var get_me = $('#id_se_block_standard_borrow_string')[0].selectize.items[0];
//HANDY set value of selectized
$('#id_ns_blah')[0].selectize.setValue(page_omic_upload_blah);
//HANDY get the text from selectized
page_omic_upload_aa = $('#id_aa')[0].selectize.options[page_omic_upload_aa]['text'];
//HANDY set the text
$("#"+thisPkElement)[0].selectize.options[block_working_with_string]['text'];

// other ways to get the selectized value - but use the above ones
= $("#id_form_hold_the_study_id").val(parseInt(document.getElementById("this_study_id").innerText.trim()));
= $('#id_standard_unit').children("option:selected").text().trim();
// how to get the value of the pk of the thing selected - 
= $(this).closest('select').context.childNodes[1].id;
                



// using js to split time with js function as opposed to the python version
// var split_time = window.SPLIT_TIME.get_split_time(time_in_minutes);

// clear a selection - HANDY
let myid_plus_option = "#" + global_file_plate_map_changed_id + " option"
$(myid_plus_option).removeProp('selected');


//HANDY - iterate vrs first - keep for reference
    // //Remove the spans and old matches
    // $span = $('#realTimeContents .match');
    // // NO NO NO - this does not iterate as expected, it just pulls one - $span.replaceWith($span.html());
    // // the following makes sure to iterate through
    // $span.each(function() {
    //     $(this).replaceWith($(this).html());
    // });


// HANDY - color ramps
    global_color_ramp_light_to_medium_purple = [
        '#F9F6FB',
        '#f2e6ff',
        '#e6ccff',
        '#d9b3ff',
        '#cc99ff',
        '#bf80ff',
        '#b366ff',
        // '#a64dff',
        // '#9933ff',
        // '#8c1aff',
        // '#8000ff',
    ];

    global_color_ramp_light_to_dark_red = [
        '#F8F8F8',
        '#FFEBEE',
        '#FFCDD2',
        '#EF9A9A',
        '#E57373',
        '#EF5350',
        '#F44336',
        '#E53935',
        '#D32F2F',
        '#C62828',
        '#B71C1C',
    ];

    global_color_ramp_light_to_dark_indigo = [
        '#F8F8F8',
        '#E8EAF6',
        '#C5CAE9',
        '#9FA8DA',
        '#7986CB',
        '#5C6BC0',
        '#3F51B5',
        '#3949AB',
        '#303F9F',
        '#283593',
        '#1A237E',
    ];

    global_color_ramp_light_to_dark_dark_orange = [
        '#F8F8F8',
        '#FBE9E7',
        '#FFCCBC',
        '#FFAB91',
        '#FF8A65',
        '#FF7043',
        '#FF5722',
        '#F4511E',
        '#E64A19',
        '#D84315',
        '#BF360C',
    ];

    global_color_ramp_light_to_dark_orange = [
        '#F8F8F8',
        '#FFF3E0',
        '#FFE0B2',
        '#FFCC80',
        '#FFB74D',
        '#FFA726',
        '#FF9800',
        '#FB8C00',
        '#F57C00',
        '#EF6C00',
        '#E65100',
    ];

// HANDY to know for going through a formset
// console.log("$('#value_formset')")
// console.log($('#value_formset'))
// console.log("$('#value_formset').find('.inline')")
// console.log($('#value_formset').find('.inline'))
// console.log("$('#value_formset').find('.inline').first()")
// console.log($('#value_formset').find('.inline').first())
// console.log("$('#value_formset').find('.inline').first()[0]")
// console.log($('#value_formset').find('.inline').first()[0])
// console.log("$('#value_formset').find('.inline').first()[0].outerHTML")
// console.log($('#value_formset').find('.inline').first()[0].outerHTML)



// HANDY each row of datatable
// Do not need but keep for reference
// https://stackoverflow.com/questions/29077902/how-to-loop-through-all-rows-in-datatables-jquery
// sampleDataTable.rows().every(function () {
//     this.data()
//     // is a list, with the first one being the tags and such
//     console.log("this row ",this.data());
//     console.log("this row ",this.data()[0]);
//     // the tags and such look like a long string, so, to find an attribute, must be creative
//     // below is HANDY for looping through, and getting a value.by name, but we do not need that here
//     var data = this.data();
//     data.forEach(function (value, index) {
//         // if (value.isActive)
//         // {
//          console.log('value ',value);
//
//          // console.log(value.UserName);
//         // }
//     })
// });



// HANDY - Some references that ended up not using, but keep in case need again
// https://www.aspforums.net/Threads/211834/How-to-search-text-on-web-page-similar-to-CTRL-F-using-jQuery/
// http://jsfiddle.net/wjLmx/23/

// HANDY - References for making a callback
// https://www.aspforums.net/Threads/211834/How-to-search-text-on-web-page-similar-to-CTRL-F-using-jQuery/
// http://jsfiddle.net/wjLmx/23/
// https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

    // function findMatches_search0(callback1) {
    //     // console.log('searchTermRegEx '+searchTermRegEx)
    //
    //     // matches = $(selector).text().match(searchTermRegEx);
    //     $('.mark-content').mark(searchTerm, options);
    //     matches = $('.mark').map(function() {
    //         return this.innerHTML;
    //     }).get();
    //
    //     callback1();
    // }
    //
    // function afterFindMatches_search1() {
    //     if (!matches) {
    //         matches = [];
    //     }
    //     matches_length = matches.length;
    //     // console.log('step 1 matches '+matches)
    //     // console.log('step 1 number matches = '+matches_length)
    //
    //     if (matches != null && matches_length > 0) {
    //         // unique_matches = matches.filter(function(itm, i, a) {
    //         //     return i == matches.indexOf(itm);
    //         // });
    //         // if (searchTerm === '&') {
    //         //     searchTerm = '&amp;';
    //         //     searchTermRegEx = new RegExp(searchTerm, caseSensitive_flag);
    //         // }
    //         // console.log('searchTerm ',searchTerm)
    //         labelMatchSpan_search2(continueFunction_search3);
    //     }
    // }

    //
    // function continueFunction_search3() {
    //     // the previous function replaced with the search term, fix to match the original case
    //     // if ($('.match').length != matches_length) {
    //     //     alert('there is a mismatch in the counting....')
    //     // }
    //     if ($('.mark').length != matches_length) {
    //         alert('there is a mismatch in the counting....')
    //     }
    //     $('.match').each(function (index, currentElement) {
    //         currentElement.innerHTML = matches[index];
    //         $(this).html(matches[index]);
    //     });
    //     // $('.match:first').addClass('highlighted');
    //     $('.match:first').addClass('mark');
    //     match_index = 0;
    //     // console.log('in search 3 - getting ready to highlight')
    //     // when the search is clicked - finds the first occurrence
    //     // if ($('.highlighted:first').length) {
    //     if ($('.mark:first').length) {
    //         //if match found, scroll to where the first one appears
    //         // this did not work for study summary....do not know why
    //         // $(window).scrollTop($('.highlighted:first').position().top - help_offset);
    //         $('html, body').animate({
    //             // scrollTop: $('.highlighted:visible:first').offset().top - help_offset
    //             // scrollTop: $('.mark:visible:first').offset().top - help_offset
    //             $current = $('.match').eq(match_index);
    //             position = $current.offset().top - offsetTop;
    //             window.scrollTo(0, position);
    //         }, 400);
    //     }
    // }
    //
    // $(document).on('click', '#search_next', function () {
    // // $('#search_next').click(function() {
    //     // $('.next_h').off('click').on('click', function () {
    //     match_index =  match_index + 1;
    //     if (match_index >= $('.match').length) {
    //         match_index = 0;
    //     }
    //     $('.match').removeClass('highlighted');
    //     $('.match').eq(match_index).addClass('highlighted');
    //     $('html, body').animate({
    //         // scrollTop: $('.highlighted:visible:first').offset().top - help_offset
    //         scrollTop: $('.mark:visible:first').offset().top - help_offset
    //     }, 400);
    // });
    //
    // $(document).on('click', '#search_prev', function () {
    // // $('#search_prev').click(function() {
    //     // $('.previous_h').off('click').on('click', function () {
    //     match_index = match_index - 1;
    //     if (match_index < 0) {
    //         match_index = $('.match').length - 1;
    //     }
    //     $('.match').removeClass('highlighted');
    //     $('.match').eq(match_index).addClass('highlighted');
    //     $('html, body').animate({
    //         scrollTop: $('.highlighted:visible:first').offset().top - help_offset
    //     }, 400);
    // });


// keep track of this function to add form data to a form to send to an ajax call
// and sending file data BEFORE a file is saved !
    function get_data_for_this_file_ready_for_preview(called_from) {
        let data = {
            call: 'fetch_omics_upload_file_get_data_for_preview_prep',
            csrfmiddlewaretoken: window.COOKIES.csrfmiddlewaretoken
        };
        let form = document.omic_file;
        let serializedData = $('form').serializeArray();
        let formData = new FormData(form);
        $.each(serializedData, function(index, field) {
            formData.append(field.name, field.value);
        });
        let study_id = parseInt(document.getElementById('this_study_id').innerText.trim());
        formData.append('study_id', study_id);
        //this gets used for the preview
        let file_id = 1;
        formData.append('file_id', file_id);

        $.each(data, function(index, contents) {
            formData.append(index, contents);
        });

        let is_data = true;
        if (document.getElementById('id_omic_data_file').files.length > 0) {
            is_data = true;
        } else {
            is_data = false;
        }

        if (is_data) {
            window.spinner.spin(document.getElementById('spinner'));
            $.ajax({
                url: '/assays_ajax/',
                type: 'POST',
                dataType: 'json',
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                success: function (json) {
                    window.spinner.stop();
                    if (json.errors) {
                        alert(json.errors);
                    } else {
                        let exist = true;

                        window.OMICS.omics_data = JSON.parse(JSON.stringify(json));
                        let omics_file_id_to_name_all = window.OMICS.omics_data['file_id_to_name'];
                        let omics_file_id_to_name = omics_file_id_to_name_all[1];
                        let error_message =  window.OMICS.omics_data['error_message'];

                        // console.log('error message', error_message)

                        if ($('#id_data_type')[0].selectize.items[0] == 'log2fc') {
                            window.OMICS.draw_plots(window.OMICS.omics_data, true, 0, 0, 0, 0, 0, 0, 0, 'upload');
                        }  else {
                            // todo need to coordinate with Quinn for the counts data preview

                        }
                        // put here to avoid race errors
                        if (called_from == 'data_file' || called_from == 'data_type') {
                            try {
                                let id_omic_data_file = $('#id_omic_data_file').val();
                                check_file_add_update_ajax_sub(id_omic_data_file);
                            } catch {
                            }
                            let a_new_message = error_message.trim()
                            if (a_new_message.length > 0) {
                                if ($('#id_data_type')[0].selectize.items[0] == 'log2fc') {
                                    $('#omic_compare_errors_section').show();
                                    $('#error_message_compare').text(a_new_message);
                                } else {
                                    $('#omic_count_errors_section').show();
                                    $('#error_message_counts').text(a_new_message);
                                }
                            }
                        }
                    }
                },
                error: function (xhr, errmsg, err) {
                    window.spinner.stop();
                    alert('Encountered an error when trying read the upload file. Check to make sure the Data Type selected matches the file selected.');
                    console.log(xhr.status + ': ' + xhr.responseText);
                }
            });
        }
    };
    // ##END section for preview page(s)