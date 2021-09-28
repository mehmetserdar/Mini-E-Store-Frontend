// Bckk to top button

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#backTopBtn").fadeIn();
        } else {
            $("#backTopBtn").fadeOut();
        }
    })

    $("#backTopBtn").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    })
})

$("#btnSubmit").click(function () {
    var email, password, repassword;
    email = $("#user_email").val();
    email = jQuery.trim(email);
    password = $("#user_password").val();
    password = password.trim(password);
    repassword = $("#re_user_password").val();
    repassword = repassword.trim(repassword);
    /*validation_email  validation_phone validation_password */
    if (email == "") {
        $("#validation_email").html("Eposta boş geçilemez")
    } else if (validateEmail(email) == false) {
        $("#validation_email").html("Epostayı uygun formatta giriniz");
    }

    if (password == "") {
        $("#validation_password").html("Parola boş geçilemez")
    }
    if (repassword == "") {
        $("#re_validation_password").html("Parola tekrarı boş geçilemez")
    } else if
        (password != repassword) {
        $("#re_validation_password").html("Parolalar uyuşmuyor")
    }

    /*validation Email regex */
    function validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
});

$(function () {
    $("#search").keyup(function () { 
        var wordSearch = $(this).val();
        $("#serachUl li").removeClass("underScoreColor");
        if($.trim(wordSearch)!=""){
            $("#searchUl li:contains('"+ wordSearch +"')").addClass("underScoreColor")
        }
        


    })
})

$(function () {
    $("document").ajaxStart( function () { 
        $("#ajaxLoading").css({"display" : "inline-block"})
}) 
$("document").ajaxComplete( function () { 
    $("#ajaxLoading").css({"display" : "none"})
}) 
$("document").ajaxError( function () { 
    $("#responseAjax").append("hata meydana geldi")
}) 
$("document").click( function () { 
    $("#button_id").load("serverResponse.txt")
}) 
})