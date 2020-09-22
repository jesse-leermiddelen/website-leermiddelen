function getValues(){
    var textarea = document.getElementById('#codes');
    var codesValue = textarea.value;
    var codesArray = codesValue.split('\n');

    console.log(codesArray);
}



$('#contactForm').submit(function () {
    getValues();
    return false;
   });