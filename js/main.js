$(window).load(function() {
    $('#myBtn').click(()=>
        {showModal('#myModal')});
    $('.close').click(()=>
        {hideModal('#myModal')});
    $('.modal_ok-btn').click(()=>
        {hideModal('#myModal1')});
    $('.close_ok').click(()=>
        {hideModal('#myModal1')});
    $(window).click(()=>
        {hideWindowModal('#myModal')});
    $('.header_img').click(hideHeader);

    $('.button_control-left').click(function(event) {
        let value = $('.form_control-quantity').val();
        if(value>1){
            $('.form_control-quantity').val(value-1);
            $('.form_control-price span').text('$'+ (value-1)*10.99);
        } 
    });
    $('.button_control-right').click(function(event) {
        let value = $('.form_control-quantity').val();
        $('.form_control-quantity').val(+value+1);
        $('.form_control-price span').text('$'+ (+value+1)*10.99);
    });
    $('.user-input').keyup(function(event) {
        $('.user-input').val($('.user-input').val().replace(/[^?!,.а-яА-ЯёЁ0-9]/,''));
        if($('.user-input').val().length>3)
            isValid('.user-input','1px solid #a1a1a1');
    });
    $('.phone-input').keyup(function(event) {
        $('.phone-input').val($('.phone-input').val().replace(/[^0-9+]/,''));
        if($('.phone-input').val().length>=10)
            isValid('.phone-input','1px solid #a1a1a1');
    });
    $('.modal_form-continue').click(saveToLocalStorage);
    try {
        $("select").msDropDown();
    } catch(e) {
        alert(e.message);
    }
});

 function showModal(modal)
 {
    $(modal).css("display", "flex");
 }
 function hideModal(modal)
 {
    $(modal).css("display", "none");
 }
 function hideWindowModal(modal)
 {
    if($(event.target).is('.modal'))
        $(modal).css("display", "none");
 }
 function hideHeader(){
    $('.header_section').slideUp({
        duration: 'slow',
        easing: 'swing'
      });
 }
 function saveToLocalStorage(){
    if($('.user-input').val().length<=3)
        return isInvalid('.user-input');
    if($('.phone-input').val().length<10)
        return isInvalid('.phone-input');
    if(!isValidEmail($('.email-input').val()))
        return isInvalid('.email-input');
    else
        isValid('.email-input','1px solid #60a75e');
     var user = {
        "name": $('.user-input').val(),
        "email": $('.phone-input').val(),
        "phone": $('.email-input').val()
     };
    window.localStorage.setItem('myStorage', JSON.stringify(user));
    resetForm();
    hideModal('#myModal');
    showModal('#myModal1')
 }
 function isValidEmail(email){
    return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(email); 
 }
 function isInvalid(element){
    $(element).css('border','1px solid red');
    return false;
 }
 function isValid(element, value){
    $(element).css('border',value);
 }
 function resetForm(){
    $('.user-input').val("")
    $('.phone-input').val($('img + .country_value').text())
    $('.email-input').val("")
 }
 