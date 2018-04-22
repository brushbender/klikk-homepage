/* Send price form details */
$("#price-form").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
    
    function submitForm(){
    // Initiate Variables With Form Content
    var cpu = $("#cpu").val();
    var ram = $("#ram").val();
    var ssd = $("#ssd").val();
 
    $.ajax({
        type: "POST",
        url: "price-form.php",
        data: "cpu=" + cpu + "&ram=" + ram + "&ssd=" + ssd,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
});


/* Send create account details */
$("#account-form").validator().on("submit", function (event) {
	 if (event.isDefaultPrevented()) {
        
    } else {
        
        event.preventDefault();
        submitForm();
    }
    
    function submitForm(){
    // Initiate Variables With Form Content
    var email = $("#email").val();
    var password = $("#password").val();

 
    $.ajax({
        type: "POST",
        url: "account-form.php",
        data: "email=" + email + "&password=" + password,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
});