function enabledButton() {
    let text1 = $("#alert").val();
    if(!$('#alert').val()) {
    $('#submit').prop('disabled',true)
}else{
    alert(text1);
}
}




$('#submit').click(function() { 
   enabledButton()
});


