var d = new Date();
m = d.getMonth() + 1;
dd = d.getDate();
y = d.getFullYear();

//惠的生日
if (m == 9 && dd == 23) {//520
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是惠的生日🎉");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}