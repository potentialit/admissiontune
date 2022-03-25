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
        jQuery('.grade_point_3').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="information">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_4').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="group_sub_1">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_5').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="group_sub_2">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_6').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="group_sub_3">\n' +
        '                                                <option value="" selected>Select Grade</option>\n' +
        '                                                <option value="5">A+</option>\n' +
        '                                                <option value="4">A</option>\n' +
        '                                                <option value="3.5">A-</option>\n' +
        '                                                <option value="3">B</option>\n' +
        '                                                <option value="2">C</option>\n' +
        '                                                <option value="1">D</option>\n' +
        '                                                <option value="0">F</option>\n' +
        '                                         </select></div>');
        jQuery('.grade_point_7').html('<div class="select_main"><select class="select_sub grade_point_select" id="pointandgrade" name="group_sub_4">\n' +
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
        jQuery('.grade_point_3').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="information">');
        jQuery('.grade_point_4').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="group_sub_1">');
        jQuery('.grade_point_5').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="group_sub_2">');
        jQuery('.grade_point_6').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="group_sub_3">');
        jQuery('.grade_point_7').html('<input type="number" placeholder="Type Your Point" id="pointandgrade" class="result_input_control" name="group_sub_4">');

        jQuery('.select').remove();
    }); 

    /*
     for science,business,humanities
    */
    jQuery('#science').click(function(){
        jQuery(this).addClass('active');
        jQuery('#business').removeClass('active');
        jQuery('#humanities').removeClass('active');
        jQuery('#sub_code_1').html('<p class="code" id="code_1">174</p>');
        jQuery('#sub_code_2').html('<p class="code" id="code_2">176</p>');
        jQuery('#sub_code_3').html('<p class="code" id="code_3">178</p>');
        jQuery('#sub_code_4').html('<p class="code" id="code_4">239</p>');


        jQuery('.result_subject_1').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_1">\n' +
        '                                                <option value="physics" selected>Physics</option>\n' +
        '                                                <option value="chemistry">Chemistry</option>\n' +
        '                                                <option value="biology">Biology</option>\n' +
        '                                                <option value="math">Math</option>\n' +
        '                                                <option value="statistics">Statistics </option>\n' +
        '                                         </select></div>');

        jQuery('.result_subject_2').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_2">\n' +
        '                                                <option value="physics" >Physics</option>\n' +
        '                                                <option value="chemistry" selected>Chemistry</option>\n' +
        '                                                <option value="biology">Biology</option>\n' +
        '                                                <option value="math">Math</option>\n' +
        '                                            </select></div>');

        jQuery('.result_subject_3').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_3">\n' +
        '                                                <option value="physics" >Physics</option>\n' +
        '                                                <option value="chemistry">Chemistry</option>\n' +
        '                                                <option value="biology" selected>Biology</option>\n' +
        '                                                <option value="math">Math</option>\n' +
        '                                               </select></div>');

        jQuery('.result_subject_4').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_4">\n' +
        '                                                <option value="math_optional" >Math</option>\n' +
        '                                                <option value="biology_optional">Biology</option>\n' +
        '                                                <option value="agricultural" selected>Agricultural Education</option>\n' +
        '                                                <option value="other">other </option>\n' +
        '                                         </select></div>');


         
        /*

          start for change subject 1
       */
      jQuery(".result_subject_1").change(function(){   
        var value = jQuery('.result_subject_1 option:selected').val();
            if(value == 'physics'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('174');
            }else if(value == 'chemistry'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('176');
            }else if(value == 'biology'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('178');
            }else if(value == 'math'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('265');
            }else if(value == 'statistics'){
                jQuery('#code_1').empty();
                jQuery('#code_1').append('N/A');
            }
        });
        /*

              start for change subject 1
           */
          jQuery(".result_subject_2").change(function(){   
            var value = jQuery('.result_subject_2 option:selected').val();
            if(value == 'physics'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('174');
            }else if(value == 'chemistry'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('176');
            }else if(value == 'biology'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('178');
            }else if(value == 'math'){
                jQuery('#code_2').empty();
                jQuery('#code_2').append('265');
            }
        });
        /*

              start for change subject 1
           */
          jQuery(".result_subject_3").change(function(){   
            var value = jQuery('.result_subject_3 option:selected').val();
            if(value == 'physics'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('174');
            }else if(value == 'chemistry'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('176');
            }else if(value == 'biology'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('178');
            }else if(value == 'math'){
                jQuery('#code_3').empty();
                jQuery('#code_3').append('265');
            }
        });
        /*

                 start for change subject 1
              */
        jQuery(".result_subject_4").change(function(){   
                var value = jQuery('.result_subject_4 option:selected').val();
            if(value == 'agricultural'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('239');
            }else if(value == 'biology_optional'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('178');
            }else if(value == 'math_optional'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('265');
            }else if(value == 'other'){
                jQuery('#code_4').empty();
                jQuery('#code_4').append('N/A');
            }
        });

    });

    jQuery('#business').click(function(){
        jQuery(this).addClass('active');
        jQuery('#science').removeClass('active');
        jQuery('#humanities').removeClass('active');
        jQuery('#sub_code_1').html('<p class="code" id="code_1">253</p>');
        jQuery('#sub_code_2').html('<p class="code" id="code_2">277</p>');
        jQuery('#sub_code_3').html('<p class="code" id="code_3">292</p>');
        jQuery('#sub_code_4').html('<p class="code" id="code_4">239 </p>');

        jQuery('.result_subject_1').html('<div class="select_main"><select class="select_sub subject_main" id="subject_1" name="subject_1">\n' +
        '                                                <option value="accounting" selected>Accounting </option>\n' +
        '                                                <option value="management">Business Org & Management</option>\n' +
        '                                                <option value="finance">Finance, Banking & Insurance</option>\n' +
        '                                                <option value="marketing">Production Manage. & Mark.</option>\n' +
        '                                               </select></div>');
        jQuery('.result_subject_2').html('<div class="select_main"><select class="select_sub subject_main" id="subject_2" name="subject_2">\n' +
        '                                                <option value="accounting">Accounting </option>\n' +
        '                                                <option value="management" selected>Business Org & Management</option>\n' +
        '                                                <option value="finance">Finance, Banking & Insurance</option>\n' +
        '                                                <option value="marketing">Production Manage. & Mark.</option>\n' +
        '                                         </select></div>');
        jQuery('.result_subject_3').html('<div class="select_main"><select class="select_sub subject_main" id="subject_3" name="subject_3">\n' +
        '                                                <option value="accounting">Accounting </option>\n' +
        '                                                <option value="management">Business Org & Management</option>\n' +
        '                                                <option value="finance" selected>Finance, Banking & Insurance</option>\n' +
        '                                                <option value="marketing">Production Manage. & Mark.</option>\n' +
        '                                         </select></div>');
        jQuery('.result_subject_4').html('<div class="select_main"><select class="select_sub subject_main" id="subject_4" name="subject_4">\n' +
        '                                                <option value="agricultural" selected>Agricultural Education </option>\n' +
        '                                                <option value="ecomonics">Economics</option>\n' +                                                   
        '                                                <option value="other">Other</option>\n' +
        '                                         </select></div>');

        jQuery('.subject_main').each(function(e){ 
            /*

                start for change subject 1
             */
            jQuery(".result_subject_1").change(function(){   
                var value = jQuery('.result_subject_1 option:selected').val();
                if(value == 'accounting'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('253');
                }else if(value == 'management'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('277');
                }else if(value == 'finance'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('292');
                }else if(value == 'marketing'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('286');
                }
            });
            /*

                  start for change subject 1
               */
              jQuery(".result_subject_2").change(function(){   
                var value = jQuery('.result_subject_2 option:selected').val();
                if(value == 'accounting'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('253');
                }else if(value == 'management'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('277');
                }else if(value == 'finance'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('292');
                }else if(value == 'marketing'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('286');
                }
            });
            /*

                  start for change subject 1
               */
              jQuery(".result_subject_3").change(function(){   
                var value = jQuery('.result_subject_3 option:selected').val();
                if(value == 'accounting'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('253');
                }else if(value == 'management'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('277');
                }else if(value == 'finance'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('292');
                }else if(value == 'marketing'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('286');
                }
            });
            /*

                     start for change subject 1
                  */
            jQuery(".result_subject_4").change(function(){   
                    var value = jQuery('.result_subject_4 option:selected').val();
                if(value == 'agricultural'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('239');
                }else if(value == 'economics'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('109');                 
                }else if(value == 'other'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('N/A');
                }
            });

        });
    });
    jQuery('#humanities').click(function(){
        jQuery(this).addClass('active');
        jQuery('#science').removeClass('active');
        jQuery('#business').removeClass('active');
        jQuery('#sub_code_1').html('<p class="code" id="code_1">109</p>');
        jQuery('#sub_code_2').html('<p class="code" id="code_2">269</p>');
        jQuery('#sub_code_3').html('<p class="code" id="code_3">267</p>');
        jQuery('#sub_code_4').html('<p class="code" id="code_4">249</p>');

        jQuery('.result_subject_1').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_1">\n' +
        '                                                <option value="economics" selected>Economics </option>\n' +
        '                                                <option value="civic">Civics & Good Governance</option>\n' +
        '                                                <option value="islamic">Islamic History</option>\n' +
        '                                                <option value="history">History </option>\n' +
        '                                                <option value="social">Social Work </option>\n' +
        '                                                <option value="sociology">Sociology  </option>\n' +
        '                                                <option value="logic">Logic  </option>\n' +
        '                                         </select></div>');

        jQuery('.result_subject_2').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_2">\n' +
        '                                                <option value="economics">Economics </option>\n' +
        '                                                <option value="civic" selected>Civics & Good Governance</option>\n' +
        '                                                <option value="islamic">Islamic History</option>\n' +
        '                                                <option value="history">History </option>\n' +
        '                                                <option value="social">Social Work </option>\n' +
        '                                                <option value="sociology">Sociology  </option>\n' +
        '                                                <option value="logic">Logic  </option>\n' +
        '                                         </select></div>');
        jQuery('.result_subject_3').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_3">\n' +
        '                                                 <option value="economics" >Economics </option>\n' +
        '                                                <option value="civic">Civics & Good Governance</option>\n' +
        '                                                <option value="islamic" selected>Islamic History</option>\n' +
        '                                                <option value="history">History </option>\n' +
        '                                                <option value="social">Social Work </option>\n' +
        '                                                <option value="sociology">Sociology  </option>\n' +
        '                                                <option value="logic">Logic  </option>\n' +
        '                                         </select></div>');
        jQuery('.result_subject_4').html('<div class="select_main"><select class="select_sub subject_main" id="subject_all" name="subject_4">\n' +
        '                                                <option value="agricultural">Agricultural Education </option>\n' +
        '                                                <option value="islam" selected>Islamic Studies</option>\n' +
        '                                                <option value="logic_optional">Logic </option>\n' +
        '                                                <option value="home">Home Economics </option>\n' +
        '                                                <option value="other">Other </option>\n' +
        '                                         </select></div>');

        jQuery('.subject_main').each(function(e){
            
            /*

         start for change subject 1
      */
     jQuery(".result_subject_1").change(function(){   
        var value = jQuery('.result_subject_1 option:selected').val();
                if(value == 'economics'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('109');
                }else if(value == 'civic'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('269');
                }else if(value == 'islamic'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('267');
                }else if(value == 'history'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('304');
                }else if(value == 'social'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('271');
                }else if(value == 'sociology'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('117');
                }else if(value == 'logic'){
                    jQuery('#code_1').empty();
                    jQuery('#code_1').append('121');
                }
            });
            /*
                  start for change subject 1
               */
              jQuery(".result_subject_2").change(function(){   
                var value = jQuery('.result_subject_2 option:selected').val();
                if(value == 'economics'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('109');
                }else if(value == 'civic'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('269');
                }else if(value == 'islamic'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('267');
                }else if(value == 'history'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('304');
                }else if(value == 'social'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('271');
                }else if(value == 'sociology'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('117');
                }else if(value == 'logic'){
                    jQuery('#code_2').empty();
                    jQuery('#code_2').append('121');
                }
            });
            /*
                  start for change subject 1
               */
              jQuery(".result_subject_3").change(function(){   
                var value = jQuery('.result_subject_3 option:selected').val();
                if(value == 'economics'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('109');
                }else if(value == 'civic'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('269');
                }else if(value == 'islamic'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('267');
                }else if(value == 'history'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('304');
                }else if(value == 'social'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('271');
                }else if(value == 'sociology'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('117');
                }else if(value == 'logic'){
                    jQuery('#code_3').empty();
                    jQuery('#code_3').append('121');
                }
            });
            /*
                     start for change subject 1
                  */
                 jQuery(".result_subject_4").change(function(){   
                    var value = jQuery('.result_subject_4 option:selected').val();
                if(value == 'agricultural'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('239');
                }else if(value == 'islam'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('249');
                }else if(value == 'logic_optional'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('121');
                }else if(value == 'home'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('273');
                }else if(value == 'other'){
                    jQuery('#code_4').empty();
                    jQuery('#code_4').append('N/A');
                }
            });
        });
    }); // end three tab Science, Business Studies and Humanities.

    /*
        start for change subject 1
     */
    jQuery(".result_subject_1").change(function(){   
        var value = jQuery('.result_subject_1 option:selected').val();
        if(value == 'physics'){
            jQuery('#code_1').empty();
            jQuery('#code_1').append('174');
        }else if(value == 'chemistry'){
            jQuery('#code_1').empty();
            jQuery('#code_1').append('176');
        }else if(value == 'biology'){
            jQuery('#code_1').empty();
            jQuery('#code_1').append('178');
        }else if(value == 'math'){
            jQuery('#code_1').empty();
            jQuery('#code_1').append('265');
        }else if(value == 'statistics'){
            jQuery('#code_1').empty();
            jQuery('#code_1').append('N/A');
        }
    });
  /*
        start for change subject 1
     */
    jQuery(".result_subject_2").change(function(){   
        var value = jQuery('.result_subject_2 option:selected').val();
        if(value == 'physics'){
            jQuery('#code_2').empty();
            jQuery('#code_2').append('174');
        }else if(value == 'chemistry'){
            jQuery('#code_2').empty();
            jQuery('#code_2').append('176');
        }else if(value == 'biology'){
            jQuery('#code_2').empty();
            jQuery('#code_2').append('178');
        }else if(value == 'math'){
            jQuery('#code_2').empty();
            jQuery('#code_2').append('265');
        }
    });
    /*
          start for change subject 1
       */
      jQuery(".result_subject_3").change(function(){   
        var value = jQuery('.result_subject_3 option:selected').val();
        if(value == 'physics'){
            jQuery('#code_3').empty();
            jQuery('#code_3').append('174');
        }else if(value == 'chemistry'){
            jQuery('#code_3').empty();
            jQuery('#code_3').append('176');
        }else if(value == 'biology'){
            jQuery('#code_3').empty();
            jQuery('#code_3').append('178');
        }else if(value == 'math'){
            jQuery('#code_3').empty();
            jQuery('#code_3').append('265');
        }
    });
 /*
          start for change subject 1
       */
      jQuery(".result_subject_4").change(function(){   
        var value = jQuery('.result_subject_4 option:selected').val();
        if(value == 'agricultural'){
            jQuery('#code_4').empty();
            jQuery('#code_4').append('239');
        }else if(value == 'biology_optional'){
            jQuery('#code_4').empty();
            jQuery('#code_4').append('178');
        }else if(value == 'math_optional'){
            jQuery('#code_4').empty();
            jQuery('#code_4').append('265');
        }else if(value == 'other'){
            jQuery('#code_4').empty();
            jQuery('#code_4').append('N/A');
        }
    });
});//end main
