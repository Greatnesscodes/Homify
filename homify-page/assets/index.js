$(document).ready(function () {

    $('#menu').hide();
    $('.menubar').click(function () {
        $('#menu').slideToggle(1000);
    })

    $(".accordion-head").click(function () {

        $(this).next().slideToggle(1000);

    });
    $('.closbtn').click(function (){
        $('#menu').slideUp(1000)
    })



    let slideIndex = 0;
    carousel();

    function carousel() {
        let i;
        let x = document.getElementsByClassName("slide_container");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) { slideIndex = 1 }
        x[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 12000);


    
    }
})
