
/* Function for changing background color on checkboxes */
$(function (){
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
});


/* Function for enabling tooltip. Requires popper.js */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/* Activate Slider Component in Bootstrap */
// CPU-SLIDER
$("#cpu").slider();
$("#cpu").on("slide", function(slideEvt) {
	$("#cpuSliderVal").text(slideEvt.value); });

// RAM-SLIDER
$("#ram").slider();
$("#ram").on("slide", function(slideEvt) {
	$("#ramSliderVal").text(slideEvt.value);
});

// RAM-SLIDER
$("#ssd").slider();
$("#ssd").on("slide", function(slideEvt) {
	$("#ssdSliderVal").text(slideEvt.value);
});

/* Calculate value of sliders and update price */
$(document).change(function () {
		
		var price_cpu = 0.1;
		var price_ram = 0.1;
		var price_ssd = 0.1;
		var cpu = document.getElementById("cpu").value;
		var ram = document.getElementById("ram").value;
		var ssd = document.getElementById("ssd").value;
		var total = (parseFloat(cpu) * parseFloat(price_cpu)) + (parseFloat(ram) * parseFloat(price_ram)) + (parseFloat(ssd) * parseFloat(price_ssd));
		var amount = total.toFixed(2);

        	$("#price-number").text('$' + amount).append('<span class="font-weight-normal text-dark"><small style="font-size:40%;"> /mo</small></span>');
});

/* ----------------------- BUTTONS ACTIONS ------------------------ */
/* Trigger Demo Button and goto url */
$("#demo-button").on('click', function(){
     window.location = "demo.html";    
});

/* Trigger More Featurea Button and goto url */
$("#more-features-button").on('click', function(){
     window.location = "features.html";    
});






