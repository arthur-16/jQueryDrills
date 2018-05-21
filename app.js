    const text1 = $('#alert').val();
    // var disable = $('#submit').prop('disabled',false);


// function enabledButton() {
//     alert(text1)
// }
// $('#submit').click(function() { 
//    enabledButton()
// });
// var empty = false;
//         $('form > input').each(function() {
//             if ($('#alert').val() == '') {
//                 empty = true;
//             }
//         });


//         $('form > input').keyup(function() {

    $(document).ready(function() {
        $('form input').keyup(function() {
            var empty = false;
            $('form input').each(function() {
                if ($('#alert').val().length == 0) {
                    empty = true;
                }
            });
    
            if (empty) {
                $('form input').attr('disabled', 'disabled');
            } else {
                $('form input').removeAttr('disabled');
            }
        });
    });
    