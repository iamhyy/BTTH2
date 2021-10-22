$(document).ready(function () {
    var diachi, ten, sdt, email, nghe;
    var kynang = [];
    var mucdo = [];
    var click = 1;
    $('.popup').hide();
    $('.submit').click(function (e) {
        e.preventDefault();
        ten = $('.ten').val();
        diachi = $('.diachi').val();
        sdt = $('.sdt').val();
        email = $('.email').val();
        nghe = $('.nghe').val();
        for (i = 0; i < click; i++) {
            kynang[i] = $('.kynang').eq(i).val();
            mucdo[i] = $('.mucdo').eq(i).val();
        };
        $('.anh').change(function (event) {
            $("img").attr('src', URL.createObjectURL(event.target.files[0]));

        });
        $('.popup-ten').html(ten);
        $('.popup-nghe1').html(nghe);
        $('.popup-diachi1').html(diachi);
        $('.popup-email1').html(email);
        $('.popup-sdt1').html(sdt);
        for (i = 0; i < click; i++) {
            $('.tenkynang').eq(i).html(kynang[i]);
            $('.thanhmucdo').eq(i).attr('value', mucdo[i]);
        };
        $('.form').hide();
        $('.popup').show();
    });
    $('.them').click(function (e) {
        e.preventDefault();
        $('.tablenest:first').clone(1).appendTo('.nest'); 
        $('.progress:first').clone(1).appendTo('.progresswrap');

    });
    $('form input').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });
    $('.them').click(function () {
        click++;
    });

});