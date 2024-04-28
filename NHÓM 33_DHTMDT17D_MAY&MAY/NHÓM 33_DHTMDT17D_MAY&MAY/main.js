function htmlRecipe(data,id){
    let html = ``;
    html += `<div class="modal-content">`;
    html += `<div class="modal-header">`;
    html += `<h3 class="modal-header__title">Thông tin công thức</h3>`;
    html += `<div class="modal-header__icon">`;
    html += `<i class="fa-solid fa-xmark"></i>`;
    html += `</div>`;
    html += `</div>`;
    html += `<div class="modal-body">`;
    html += `<div class="row">`;
    html += `<div class="col-4">`;
    html += `<img src="${data[id].image}" class="modal-image" >`;
    html += `</div>`;
    html += `<div class="col-8">`;
    html += `<h2 class="modal-body__title">${data[id].title}</h2>`;
    html += `<h4 class="modal-body__summary">${data[id].summary}</h4>`;
    html += `<div class="modal-body__recipe">`;
    html += `<p class="modal-body__recipe-title">Nguyên liệu bao gồm:</p>`;
    html += `<ul class="modal-body__recipe-component">`;
    for(let i = 0; i < data[id].recipes.length; i++){
        html += `<li class="modal-body__recipe-items">${data[id].recipes[i]}</li>`;
    }
    html += `</ul>`;
    html += `</div>`;
    html += `<div class="modal-body__tutorial">`;
    html += `<p class="modal-body__tutorial-title">Cách làm:</p>`;
    html += `<ul class="modal-body__tutorial-component">`;
    for(let i = 0; i < data[id].tutorials.length; i++){
    html += `<li class="modal-body__tutorial-items">${data[id].tutorials[i]}</li>`;
    }
    html += `</ul>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    return html;
}

function htmlTrick(data,id){
    let html = ``;
    html += `<div class="modal-content">`;
    html += `<div class="modal-header">`;
    html += `<h3 class="modal-header__title">Thông tin công thức</h3>`;
    html += `<div class="modal-header__icon">`;
    html += `<i class="fa-solid fa-xmark"></i>`;
    html += `</div>`;
    html += `</div>`;
    html += `<div class="modal-body">`;
    html += `<div class="row">`;
    html += `<div class="col-4">`;
    html += `<img src="${data[id].image}" class="modal-image" alt="">`;
    html += `</div>`;
    html += `<div class="col-8">`;
    html += `<h2 class="modal-body__title">${data[id].title}</h2>`;
    html += `<h4 class="modal-body__summary">${data[id].summary}</h4>`;
    if(data[id].recipe.title.length !== 0){
    html += `<div class="modal-body__recipe">`;
    html += `<p class="modal-body__recipe-title">${data[id].recipe.title}</p>`;
    html += `<ul class="modal-body__recipe-component">`;
    for(let i = 0; i < data[id].recipe.detail.length; i++){
        html += `<li class="modal-body__recipe-items">${data[id].recipe.detail[i]}</li>`;
    }
    html += `</ul>`;
    html += `</div>`;
    }
    if(data[id].cause.title.length !== 0){
    html += `<div class="modal-body__cause">`;
    html += `<p class="modal-body__cause-title">${data[id].cause.title}</p>`;
    html += `<ul class="modal-body__cause-component">`;
    for(let i = 0; i < data[id].cause.detail.length; i++){
    html += `<li class="modal-body__cause-items">${data[id].cause.detail[i]}</li>`;
    }
    html += `</ul>`;
    html += `</div>`;
    }
    if(data[id].fix.title.length !== 0){
    html += `<div class="modal-body__fix">`;
    html += `<p class="modal-body__fix-title">${data[id].fix.title}</p>`;
    html += `<ul class="modal-body__fix-component">`;
    for(let i = 0; i < data[id].fix.detail.length; i++){
    html += `<li class="modal-body__fix-items">${data[id].fix.detail[i]}</li>`;
    }
    html += `</ul>`;
    html += `</div>`;
    }
    if(data[id].note.title.length !== 0){
    html += `<div class="modal-body__note">`;
    html += `<p class="modal-body__note-title">${data[id].note.title}</p>`;
    html += `<ul class="modal-body__note-component">`;
    for(let i = 0; i < data[id].note.detail.length; i++){
    html += `<li class="modal-body__note-items">${data[id].note.detail[i]}</li>`;
    }
    html += `</ul>`;
    html += `</div>`;
    }
    html += `</div>`;
    html += `</div>`;
    return html;
}

//chuyen tab noi dung
let items = document.querySelectorAll('.detail-info__items');
let tabs = document.querySelectorAll('.detail-info__tab');
items.forEach(function(item) {
    item.addEventListener("click", function(){
        //xoa nen mau xanh o click cu
        items.forEach(function(item) {
            item.classList.remove('active');
        });
        //xoa noi dung ben trong
        tabs.forEach(function(tab) {
            tab.classList.remove('show-tab');
        });
        let href = item.getAttribute('data-href');
        let tab = document.querySelector('.detail-info__detail-'+href);
        tab.classList.add('show-tab'); //hien thi noi dung o tab moi
        item.classList.add('active'); //hien thi noi dung o items tren bang ne mau xanh
    })
});
//cong tru so luong dang ky
let plus = document.querySelector('.detail-quantity__input .fa-plus');
let minus = document.querySelector('.detail-quantity__input .fa-minus');
let quantity = document.querySelector('.detail-quantity__input input[type="phone"]');
document.addEventListener('DOMContentLoaded', function() {
    //lan chuot keo header xuong
    window.addEventListener('scroll', function() {
        var headerWrapper = document.querySelector('.header-wrapper');
        var header = document.querySelector('.header'); 
        var scrollPosition = window.scrollY;
        // console.log(scrollPosition);
        // Thay đổi lớp CSS khi cuộn xuống dưới
        if (scrollPosition > 0) {
            headerWrapper.classList.add('header-fixed');
            header.style.height = '113px';
        } else {
            headerWrapper.classList.remove('header-fixed');
            header.removeAttribute('style');
        }

    });
    //modal nguyen lieu
    let modal = document.getElementById("myModal");
    let chooseRecipe = document.querySelectorAll('.choose-recipe');
    chooseRecipe.forEach(function (choose) {
        choose.addEventListener("click", function() {
            let id = choose.getAttribute('data-id');
            // console.log(recipes);    
            modal.innerHTML = htmlRecipe(recipesItems,id - 1);
            modal.classList.add('show');
            let close = document.querySelector('.modal-header__icon');
            close.addEventListener("click", function() {
                modal.classList.remove('show');
            });
        })
    })
    //modal meo nau an
    let modalTrick = document.getElementById('modalTrick');
    let chooseTrick = document.querySelectorAll('.choose-trick');
    chooseTrick.forEach(function (choose) {
        choose.addEventListener("click", function() {
            let id = choose.getAttribute('data-id');
            // console.log(recipes);    
            modalTrick.innerHTML = htmlTrick(tricksItem,id - 1);
            modalTrick.classList.add('show');
            let close = document.querySelector('.modal-header__icon');
            close.addEventListener("click", function() {
                modalTrick.classList.remove('show');
            });
        })
    })
    //click ra ngoai modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('show');
        }else if(event.target == modalTrick){
            modalTrick.classList.remove('show');
        }
    }
    //dang nhap
    let login = document.getElementById("login");
    if(login){
        login.addEventListener('click', function(){
            let tenDangNhap = document.getElementById('tendangnhap').value; // lay gia tri cua id ten la tendangnhap
            let matKhau = document.getElementById('matkhau').value; // lay gia tri cua id ten la matkhau
            if(tenDangNhap == 'lehaminh' && matKhau == '123'){
                location.href = 'index.html';
            }else{
                alert('Sai tài khoản hoặc mặt khẩu!');
            }
        })
    }
    //su kien them so luong
    if(plus){
        plus.addEventListener('click', function(){
            let quantityVal = parseInt(quantity.value)
            quantityVal += 1;
            document.querySelector('.detail-quantity__input input[type="phone"]').value = quantityVal;
        })
    }
    //su kien tru so luong
    if(minus){
        minus.addEventListener('click', function(){
            let quantityVal = parseInt(quantity.value)
            if(quantityVal <= 1){
                quantityVal = quantityVal;
            }else{
                quantityVal -= 1;
            }
            document.querySelector('.detail-quantity__input input[type="phone"]').value = quantityVal;
        })
    }
    //su kien nhap so luong trong o input
    if(quantity){
        quantity.addEventListener('change', function(){
            let quantityVal = parseInt(this.value); // Lấy giá trị nhập vào và chuyển đổi thành số nguyên
    
            if(quantityVal <= 0){ // Kiểm tra nếu số nhập vào là số âm hoặc không phải là một số
                this.value = 1; // Đặt giá trị là 1, this o day la document.querySelector('.detail-quantity__input input[type="phone"]')
            }
        })
    }

    //ktra ten
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    if(name){
        name.addEventListener("change", function() {
            var nameError = document.getElementById("name-error");
            if(name.value.length == 0){
                nameError.innerHTML = "Vui lòng nhập tên của bạn";
            }
        });
    }
    //ktra email
    if(email){
        email.addEventListener("change", function() {
            var emailError = document.getElementById("email-error");
            if(email.value.length == 0){
                emailError.innerHTML = "Vui lòng nhập email của bạn";
            }
        });
    }
    //ktra so dien thoai
    if(phone){
            phone.addEventListener("change", function() {
            var phoneError = document.getElementById("phone-error");
            if(phone.value.length == 0){
                phoneError.innerHTML = "Vui lòng nhập số điện thoại của bạn";
            }
        });
    }
})