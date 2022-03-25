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
        jQuery('.grade_point_4').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="moral">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_5').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="information">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_6').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="bangladesh">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_7').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="group_sub_1">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_8').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="group_sub_2">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_9').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="group_sub_3">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_10').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="group_sub_4">\n' +
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
        jQuery('.grade_point_4').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="moral">');
        jQuery('.grade_point_5').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="information">');
        jQuery('.grade_point_6').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="bangladesh">');
        jQuery('.grade_point_7').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="group_sub_1">');
        jQuery('.grade_point_8').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="group_sub_2">');
        jQuery('.grade_point_9').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="group_sub_3">');
        jQuery('.grade_point_10').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="group_sub_4">');

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
            }else if(value == 'hindu'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('112');
            }else if(value == 'bouddo'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('113');
            }else if(value == 'khrshto'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('114');
            } 
        });
        /*

          start for change subject 2
       */
      jQuery(".result_subject_2").change(function(){   
        var value = jQuery('.result_subject_2 option:selected').val();
            if(value == 'physics'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('136');
            }else if(value == 'chemistry'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('137');
            }else if(value == 'biology'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('138');
            }else if(value == 'higher_math'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('126');
            } 
        });
        /*

              start for change subject 1
           */
          jQuery(".result_subject_3").change(function(){   
            var value = jQuery('.result_subject_3 option:selected').val();
            if(value == 'physics'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('136');
            }else if(value == 'chemistry'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('137');
            }else if(value == 'biology'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('138');
            }else if(value == 'higher_math'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('126');
            } 
        });
        /*

              start for change subject 1
           */
          jQuery(".result_subject_4").change(function(){   
            var value = jQuery('.result_subject_4 option:selected').val();
            if(value == 'physics'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('136');
            }else if(value == 'chemistry'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('137');
            }else if(value == 'biology'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('138');
            }else if(value == 'higher_math'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('126');
            } 
        });
        /*

                 start for change subject 1
              */
        jQuery(".result_subject_5").change(function(){   
                var value = jQuery('.result_subject_5 option:selected').val(); 
            if(value == 'agricultural'){
                jQuery('p#code_5').empty();
                jQuery('p#code_5').append('134');
            }else if(value == 'home_science'){
                jQuery('p#code_5').empty();
                jQuery('p#code_5').append('151');
            }else if(value == 'math_optional'){
                jQuery('p#code_5').empty();
                jQuery('p#code_5').append('126');
            } 
        });
    

    /*
     for science,business,humanities
    */
    jQuery('#science').click(function(){
        jQuery(this).addClass('active');
        jQuery('#business').removeClass('active');
        jQuery('#humanities').removeClass('active');
        jQuery('#sub_code_1').html('<p class="code" id="code_1">111</p>');
        jQuery('#sub_code_2').html('<p class="code" id="code_2">136</p>');
        jQuery('#sub_code_3').html('<p class="code" id="code_3">137</p>');
        jQuery('#sub_code_4').html('<p class="code" id="code_4">138</p>');
        jQuery('#sub_code_5').html('<p class="code" id="code_5">134</p>');


        jQuery('.result_subject_1').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_1">\n' +
        '                                                <option value="islam" selected>Islam & Moral Edu.</option>\n' +
        '                                                <option value="hindu">Hindu & Moral Edu.</option>\n' +
        '                                                <option value="bouddo">Bouddo & Morla Edu</option>\n' +
        '                                                <option value="khrshto">Khrshto & Moral Ed</option>\n' + 
        '                                         </select></div>');

        jQuery('.result_subject_2').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_2">\n' +
        '                                                <option value="physics" selected>Physics</option>\n' +
        '                                                <option value="chemistry">Chemistry</option>\n' +
        '                                                <option value="biology">Biology</option>\n' +
        '                                                <option value="higher_math">Higher Math</option>\n' + 
        '                                         </select></div>');

        jQuery('.result_subject_3').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_3">\n' +
        '                                                <option value="physics" >Physics</option>\n' +
        '                                                <option value="chemistry" selected>Chemistry</option>\n' +
        '                                                <option value="biology">Biology</option>\n' +
        '                                                <option value="higher_math">Higher Math</option>\n' +
        '                                            </select></div>');

        jQuery('.result_subject_4').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_4">\n' +
        '                                                <option value="physics" >Physics</option>\n' +
        '                                                <option value="chemistry">Chemistry</option>\n' +
        '                                                <option value="biology" selected>Biology</option>\n' +
        '                                                <option value="higher_math">Higher Math</option>\n' +
        '                                               </select></div>');

        jQuery('.result_subject_5').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_5">\n' +
        '                                                <option value="math_optional" >Higher Math</option>\n' +
        '                                                <option value="home_science">Home Science</option>\n' +
        '                                                <option value="agricultural" selected>Agricultural Education</option>\n' + 
        '                                         </select></div>');
 
      /*

          start for change subject 1
       */
      jQuery(".result_subject_1").change(function(){   
        var value = jQuery('.result_subject_1 option:selected').val();
            if(value == 'islam'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('111');
            }else if(value == 'hindu'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('112');
            }else if(value == 'bouddo'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('113');
            }else if(value == 'khrshto'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('114');
            } 
        });
        /*

          start for change subject 2
       */
      jQuery(".result_subject_2").change(function(){   
        var value = jQuery('.result_subject_2 option:selected').val();
            if(value == 'physics'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('136');
            }else if(value == 'chemistry'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('137');
            }else if(value == 'biology'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('138');
            }else if(value == 'higher_math'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('126');
            } 
        });
        /*

              start for change subject 1
           */
          jQuery(".result_subject_3").change(function(){   
            var value = jQuery('.result_subject_3 option:selected').val();
            if(value == 'physics'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('136');
            }else if(value == 'chemistry'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('137');
            }else if(value == 'biology'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('138');
            }else if(value == 'higher_math'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('126');
            } 
        });
        /*

              start for change subject 1
           */
          jQuery(".result_subject_4").change(function(){   
            var value = jQuery('.result_subject_4 option:selected').val();
            if(value == 'physics'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('136');
            }else if(value == 'chemistry'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('137');
            }else if(value == 'biology'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('138');
            }else if(value == 'higher_math'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('126');
            } 
        });
     
    });

    
    jQuery('#business').click(function(){
        jQuery(this).addClass('active');
        jQuery('#science').removeClass('active');
        jQuery('#humanities').removeClass('active');
        jQuery('#sub_code_1').html('<p class="code" id="code_1">111</p>');
        jQuery('#sub_code_2').html('<p class="code" id="code_2">146</p>');
        jQuery('#sub_code_3').html('<p class="code" id="code_3">152 </p>');
        jQuery('#sub_code_4').html('<p class="code" id="code_4">143</p>');
        jQuery('#sub_code_5').html('<p class="code" id="code_5">134</p>');

        jQuery('.result_subject_1').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_1">\n' +
        '                                                <option value="islam" selected>Islam & Moral Edu.</option>\n' +
        '                                                <option value="hindu">Hindu & Moral Edu.</option>\n' +
        '                                                <option value="bouddo">Bouddo & Morla Edu</option>\n' +
        '                                                <option value="khrshto">Khrshto & Moral Ed</option>\n' + 
        '                                         </select></div>');
        jQuery('.result_subject_2').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_2">\n' +
        '                                                <option value="accounting" selected>Accounting </option>\n' +
        '                                                <option value="finace">Finace and Banking</option>\n' +
        '                                                <option value="bussiness">Bussiness Entrepreneurship</option>\n' + 
        '                                              </select></div>');
        jQuery('.result_subject_3').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_3">\n' +
        '                                               <option value="accounting" >Accounting </option>\n' +
        '                                                <option value="finace" selected>Finace and Banking</option>\n' +
        '                                                <option value="bussiness">Bussiness Entrepreneurship</option>\n' + 
        '                                         </select></div>');
        jQuery('.result_subject_4').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_4">\n' +
        '                                              <option value="accounting" >Accounting </option>\n' +
        '                                                <option value="finace">Finace and Banking</option>\n' +
        '                                                <option value="bussiness" selected>Bussiness Entrepreneurship</option>\n' + 
        '                                         </select></div>');
        jQuery('.result_subject_5').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_5">\n' +
        '                                                <option value="agricultural" selected>Agricultural Education </option>\n' +
        '                                                <option value="music">Music</option>\n' +
        '                                                <option value="home_science">Home Science</option>\n' +
        '                                         </select></div>');
 

               /*

          start for change subject 1
       */
      jQuery(".result_subject_1").change(function(){   
        var value = jQuery('.result_subject_1 option:selected').val();
            if(value == 'islam'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('111');
            }else if(value == 'hindu'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('112');
            }else if(value == 'bouddo'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('113');
            }else if(value == 'khrshto'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('114');
            } 
        });
            /*

                start for change subject 1
             */
            jQuery(".result_subject_2").change(function(){   
                var value = jQuery('.result_subject_2 option:selected').val();
                if(value == 'accounting'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('146');
                }else if(value == 'finace'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('152');
                }else if(value == 'bussiness'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('143');
                } 
            });
            /*

                  start for change subject 1
               */
              jQuery(".result_subject_3").change(function(){   
                var value = jQuery('.result_subject_3 option:selected').val();
                if(value == 'accounting'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('146');
                }else if(value == 'finace'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('152');
                }else if(value == 'bussiness'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('143');
                } 
            });
            /*

                  start for change subject 1
               */
              jQuery(".result_subject_4").change(function(){   
                var value = jQuery('.result_subject_4 option:selected').val();
                if(value == 'accounting'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('146');
                }else if(value == 'finace'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('152');
                }else if(value == 'bussiness'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('143');
                } 
            });
            /*

                 start for change subject 1
              */
             jQuery(".result_subject_5").change(function(){   
                var value = jQuery('.result_subject_5 option:selected').val(); 
            if(value == 'agricultural'){
                jQuery('#code_5').empty();
                jQuery('#code_5').append('134');
            }else if(value == 'music'){
                jQuery('#code_5').empty();
                jQuery('#code_5').append('149');
            }else if(value == 'math_optional'){
                jQuery('#code_5').empty();
                jQuery('#code_5').append('126');
            } 
        });
    });
    jQuery('#humanities').click(function(){
        jQuery(this).addClass('active');
        jQuery('#science').removeClass('active');
        jQuery('#business').removeClass('active');
        jQuery('#sub_code_1').html('<p class="code" id="code_1">111</p>');
        jQuery('#sub_code_2').html('<p class="code" id="code_2">110</p>');
        jQuery('#sub_code_3').html('<p class="code" id="code_3">153</p>');
        jQuery('#sub_code_4').html('<p class="code" id="code_4">140</p>');
        jQuery('#sub_code_5').html('<p class="code" id="code_5">134</p>');

        jQuery('.result_subject_1').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_1">\n' +
        '                                                <option value="islam" selected>Islam & Moral Edu.</option>\n' +
        '                                                <option value="hindu">Hindu & Moral Edu.</option>\n' +
        '                                                <option value="bouddo">Bouddo & Morla Edu</option>\n' +
        '                                                <option value="khrshto">Khrshto & Moral Ed</option>\n' + 
        '                                         </select></div>');
        jQuery('.result_subject_2').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_2">\n' +
        '                                                <option value="geography" selected>Geography</option>\n' +
        '                                                <option value="civic">Civic & Citizenship</option>\n' +
        '                                                <option value="ecomomics">Ecomomics</option>\n' + 
        '                                         </select></div>');

        jQuery('.result_subject_3').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_3">\n' +
        '                                                <option value="history" selected>History of Bangladesh </option>\n' +
        '                                                <option value="other">Other  </option>\n' + 
        '                                         </select></div>');
        jQuery('.result_subject_4').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_4">\n' +
        '                                                 <option value="geography">Geography</option>\n' +
        '                                                <option value="civic" selected>Civic & Citizenship</option>\n' +
        '                                                <option value="ecomomics">Ecomomics</option>\n' +
        '                                         </select></div>');
        jQuery('.result_subject_5').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_5">\n' +
        '                                                <option value="agricultural" selected>Agricultural Education </option>\n' +
        '                                                <option value="music">Music</option>\n' +
        '                                                <option value="home_science">Home Science</option>\n' +
        '                                         </select></div>');
 
                           /*

          start for change subject 1
       */
      jQuery(".result_subject_1").change(function(){   
        var value = jQuery('.result_subject_1 option:selected').val();
            if(value == 'islam'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('111');
            }else if(value == 'hindu'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('112');
            }else if(value == 'bouddo'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('113');
            }else if(value == 'khrshto'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('114');
            } 
        });
            /*

         start for change subject 1
      */
     jQuery(".result_subject_2").change(function(){   
        var value = jQuery('.result_subject_2 option:selected').val();
                if(value == 'economics'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('141');
                }else if(value == 'civic'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('140');
                }else if(value == 'geography'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('110');
                } 
            });
            /*

                  start for change subject 1
               */
              jQuery(".result_subject_3").change(function(){   
                var value = jQuery('.result_subject_3 option:selected').val();
                if(value == 'history'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('153');
                }else if(value == 'other'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('N/A');
                } 
            });
            /*

                  start for change subject 1
               */
              jQuery(".result_subject_4").change(function(){   
                var value = jQuery('.result_subject_4 option:selected').val();
                if(value == 'economics'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('141');
                }else if(value == 'civic'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('140');
                }else if(value == 'geography'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('110');
                } 
            });
                       /*

                 start for change subject 1
              */
             jQuery(".result_subject_5").change(function(){   
                var value = jQuery('.result_subject_5 option:selected').val(); 
            if(value == 'agricultural'){
                jQuery('#code_5').empty();
                jQuery('#code_5').append('134');
            }else if(value == 'music'){
                jQuery('#code_5').empty();
                jQuery('#code_5').append('149');
            }else if(value == 'math_optional'){
                jQuery('#code_5').empty();
                jQuery('#code_5').append('126');
            } 
        });
    }); // end three tab Science, Business Studies and Humanities.
  





});//end main


