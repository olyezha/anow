$(document).ready(function () {



    let flag = false
    $('.burgerOpen').click(function () {
        if (!flag) {
            $('.menu').slideDown();
            $('.ltwo').css('display', 'none');
            $('.items').css('background-color', 'white');
            $('.items').css('position', 'absolute');
            $('.lone').css('transform', 'rotate(45deg)');
            $('.lthr').css('transform', 'rotate(-45deg)');
        } else {
            $('.menu').slideUp();
            $('.items').css('background-color', 'black');
            $('.ltwo').css('display', 'block');
            $('.items').css('position', 'relative');
            $('.lone').css('transform', 'rotate(0)');
            $('.lthr').css('transform', 'rotate(0)');
        }
        flag = !flag
    })
})      