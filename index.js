function onmouseOvera() {
    document.getElementById("hinh").src = "IMG/hinh1.jpg";
}
function onmouseouta() {
    document.getElementById("hinh").src = "IMG/hinh-1.jpg";
}

function onmouseOverb() {
    document.getElementById("2").src = "IMG/hinh2.jpg";
}
function onmouseoutb() {
    document.getElementById("2").src = "IMG/hinh-2.jpg";
}
function onmouseOver3() {
    document.getElementById("3").src = "IMG/hinh3.jpg";
}
function onmouseout3() {
    document.getElementById("3").src = "IMG/hinh-3.jpg";
}
function onmouseOver4() {
    document.getElementById("4").src = "IMG/hinh4.jpg";
}
function onmouseout4() {
    document.getElementById("4").src = "IMG/hinh-4.jpg";
}
function onmouseOver5() {
    document.getElementById("5").src = "IMG/hinh5.jpg";
}
function onmouseout5() {
    document.getElementById("5").src = "IMG/hinh-5.jpg";
}
function onmouseOver6() {
    document.getElementById("6").src = "IMG/hinh6.jpg";
}
function onmouseout6() {
    document.getElementById("6").src = "IMG/hinh-6.jpg";
}
function onmouseOver7() {
    document.getElementById("7").src = "IMG/hinh7.jpg";
}
function onmouseout7() {
    document.getElementById("7").src = "IMG/hinh-7.jpg";
}
function onmouseOver8() {
    document.getElementById("8").src = "IMG/hinh8.jpg";
}
function onmouseout8() {
    document.getElementById("8").src = "IMG/hinh-8.jpg";
}
function onmouseOver9() {
    document.getElementById("9").src = "IMG/hinh9.jpg";
}
function onmouseout9() {
    document.getElementById("9").src = "IMG/hinh-9.jpg";
}



function check() {
    var ck = true;

    if (document.getElementById("txtHo").value == "") {
        document.getElementById("txtHo").style.backgroundColor = "red";
        alert("Không được để trống họ và tên !");
        ck = false;
    }
    if (document.getElementById("txtnoidung").value == "") {
        document.getElementById("txtnoidung").style.backgroundColor = "red";
        alert("Không được để trống Nội dung !");
        ck = false;
    }
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
        email.focus;
        return false;
    }
    else {
    }
    if (document.getElementById("txtthang").value == 2) {
        if (document.getElementById("txtngay").value > 29) {
            alert("Ngày sinh không hợp lệ");
            ck = false;
        }
    }
    var mau = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var phone = document.getElementById("txtDT");
    if (phone.value !== '') {
        if (mau.test(phone.value) == false)
        {
            ck = false;
            alert("vui lòng nhập số điện thoại đúng định dạng");
        }
    } else {
        alert(" bạn chưa nhập số điện thoại");
        ck = false;
    }
    if (ck == true) {
        alert("Gửi Thành Công- chúng tôi sẽ liên hệ sớm nhất có thể !");
    }

}
function validateForm()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == ''){
        alert('Bạn chưa nhập tên đăng nhập');
    }
    else if (password == '')
    {
        alert('Bạn chưa nhập mật khẩu');
    }
    else{
        alert('Đăng Nhập Thành Công');
        return true;
    }
 
    return false;
}


