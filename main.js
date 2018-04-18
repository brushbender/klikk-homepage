$(function(){
  var checkboxs = $('input[type=checkbox]');
  
  checkboxs.each(function(){
    $(this).wrap('<div class="customCheckbox"></div>');
    $(this).before('<span style="color:white">&#10004;</span>');
  });
  
  checkboxs.change(function(){
    if($(this).is(':checked')){
     $(this).parent().addClass('customCheckboxChecked');
    } else {
     $(this).parent().removeClass('customCheckboxChecked');
    }
  });
})