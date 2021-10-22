$(document).ready(function () {
    $('.submit').submit(function (e) {
        e.preventDefault();
        ten = $('.ten').val();
        diachi = $('.diachi').val();
        tour = $('.tour').val();
        note = $('.note').val();
        var ngay = new Date();
        var date = ngay.getDate() +'/'+ngay.getMonth()+'/'+ngay.getFullYear()+','+ngay.getHours()+':'+ngay.getMinutes();
        $('.r_ten').html(ten);
        $('.r_note').html(note)
        $('.r_diachi').html(diachi)
        $('.r_tour').html(tour)
        $('.ngaydk').html(date)
        if((diachi=='Hà Nội-Hạ Long-Tuần Châu')) 
            gia=10000000;
        else if(diachi=='Hà Nội-Sapa') 
            gia=6000000;
        else if(diachi=='Đà Nẵng-Hội An') 
            gia=3000000;
        else if(diachi=='Buôn Mê Thuột-Kon Tum') 
            gia=2000000;
        else if(diachi=='TP.HCM-Nha Trang') 
            gia=3500000;
        else 
            gia=2500000;
        l_sl = $('.nguoilon').val();
        l_gia = gia;
        l_tien = l_sl*l_gia;
        t_sl = $('.treem').val();
        t_gia = gia;
        t_tien = t_sl*t_gia;
        tong = 0;
        $('.l_sl').html(l_sl);
        $('.l_gia').html(l_gia)
        $('.l_tien').html(l_tien)
        $('.t_sl').html(t_sl)
        $('.t_gia').html(t_gia)
        $('.t_tien').html(t_tien)
        tong = l_tien+t_tien;
        $('.tong').html(tong)
    });
})