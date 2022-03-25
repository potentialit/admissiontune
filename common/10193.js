jQuery(document).ready(function(){

    jQuery('#grade').click(function(){
        jQuery(this).addClass('current');
        jQuery('#point').removeClass('current');

        jQuery('.point_title').html('Select Grade');

        jQuery('.grade_point_1').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="bangla">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_2').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="english">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_3').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="math">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_4').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="science">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_5').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="islam">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_6').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="global">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_7').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="information">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_8').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="physical">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_9').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="arts">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_10').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="life">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_11').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="agriculture">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
     
        jQuery('.result_input_control').remove(); 
    })

    /* when point click */
    jQuery('#point').click(function(){
        jQuery(this).addClass('current');
        jQuery('#grade').removeClass('current');
        jQuery('.point_title').html('Type Your Point');
        jQuery('.grade_point_1').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="bangla">');
        jQuery('.grade_point_2').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="english">');
        jQuery('.grade_point_3').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="math">');
        jQuery('.grade_point_4').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="science">');
        jQuery('.grade_point_5').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="islam">');
        jQuery('.grade_point_6').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="global">');
        jQuery('.grade_point_7').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="information">');
        jQuery('.grade_point_8').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="physical">');
        jQuery('.grade_point_9').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="arts">');
        jQuery('.grade_point_10').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="life">');
        jQuery('.grade_point_11').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="agriculture">');

        jQuery('.select').remove();
    }); 


      /*

          start for change subject 1
       */
      jQuery(".result_subject_1").change(function(){   
        var value = jQuery('.result_subject_1 option:selected').val();
            if(value == 'islam'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('111');
            }else if(value == 'religion'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('N/A');
            } 
        }); 
      /*

          start for change subject 2
       */
      jQuery(".result_subject_2").change(function(){   
        var value = jQuery('.result_subject_2 option:selected').val();
            if(value == 'agriculture'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('134');
            }else if(value == 'home_science'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('151');
            } 
        }); 
});//end main


