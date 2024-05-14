
// (function  ($) {
//     "use strict";


//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });


//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });

//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }
    
    

// })(jQuery);

export const checkinputs=()=>{
    /* Validate */
    /* Validate */
/* Validate */
var inputs = document.querySelectorAll('.validate-input .input100');
var form = document.getElementById('myForm');

if (form instanceof HTMLFormElement) {
    form.addEventListener('submit', function(event){
        var check = true;

        inputs.forEach(function(input){
            if(!validate(input)){
                showValidate(input);
                check = false;
            }
        });

        if (!check) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
}

inputs.forEach(function(input){
    input.addEventListener('focus', function(){
        hideValidate(this);
    });
});

function validate(input) {
    if(input.getAttribute('type') === 'email' || input.getAttribute('name') === 'email') {
        if(!input.value.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)) {
            return false;
        }
    }
    else {
        if(input.value.trim() === ''){
            return false;
        }
    }
    return true;
}

function showValidate(input) {
    var thisAlert = input.parentElement;

    thisAlert.classList.add('alert-validate');
}

function hideValidate(input) {
    var thisAlert = input.parentElement;

    thisAlert.classList.remove('alert-validate');
}


  }