window.addEventListener('scroll', function(){
    var header = document.querySelector('.nav-bar')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const navIcon = document.querySelector(".menu-icon");
let navBar = document.querySelector(".nav-bar ul");

navIcon.addEventListener("click", () => {
    if(navBar.style.display === "block"){
        navBar.style.display = "none"
    }else {
        navBar.style.display = "block"
    }
});

var car = 0;
function plusCar(car){
    document.querySelector(".carAdd").innerHTML = car;
}

function addCar (){
    var btns = document.querySelector(".btn");
    var box = document.querySelector(".box");
    var before = document.querySelector(".before");
    btns.parentNode.removeChild(btns);


    const btnNew = document.createElement("button");
    btnNew.innerHTML = "Item adicionado ao carrinho";
    box.insertBefore(btnNew, before);

    btnNew.style.padding = "15px";
    btnNew.style.marginTop = "35px";
    btnNew.style.border = 'none';
    btnNew.style.borderRadius = "10px";
    btnNew.style.background = "#707070";
    btnNew.style.color = '#fff';
    btnNew.style.fontSize = "18px";
    
    plusCar(++car)
}

function addCar2 (){
    var btns = document.querySelector(".btn2");
    var box2 = document.querySelector(".box2");
    var before2 = document.querySelector(".before2");
    btns.parentNode.removeChild(btns);


    const btnNew = document.createElement("button");
    btnNew.innerHTML = "Item adicionado ao carrinho";
    box2.insertBefore(btnNew, before2);

    btnNew.style.padding = "15px";
    btnNew.style.marginTop = "35px";
    btnNew.style.border = 'none';
    btnNew.style.borderRadius = "10px";
    btnNew.style.background = "#707070";
    btnNew.style.color = '#fff';
    btnNew.style.fontSize = "18px";
    
    plusCar(++car)
}

function addCar3 (){
    var btns = document.querySelector(".btn3");
    var box3 = document.querySelector(".box3");
    var before3 = document.querySelector(".before3");
    btns.parentNode.removeChild(btns);


    const btnNew = document.createElement("button");
    btnNew.innerHTML = "Item adicionado ao carrinho";
    box3.insertBefore(btnNew, before3)

    btnNew.style.padding = "15px";
    btnNew.style.marginTop = "35px";
    btnNew.style.border = 'none';
    btnNew.style.borderRadius = "10px";
    btnNew.style.background = "#707070";
    btnNew.style.color = '#fff';
    btnNew.style.fontSize = "18px";

    
    plusCar(++car)
}

function addCar4 (){
    var btns = document.querySelector(".btn4");
    var box4 = document.querySelector(".box4");
    var before4 = document.querySelector(".before4");
    btns.parentNode.removeChild(btns);


    const btnNew = document.createElement("button");
    btnNew.innerHTML = "Item adicionado ao carrinho";
    box4.insertBefore(btnNew, before4)

    btnNew.style.padding = "15px";
    btnNew.style.marginTop = "35px";
    btnNew.style.border = 'none';
    btnNew.style.borderRadius = "10px";
    btnNew.style.background = "#707070";
    btnNew.style.color = '#fff';
    btnNew.style.fontSize = "18px";
    
    plusCar(++car)
}

function addCar5 (){
    var btns = document.querySelector(".btn5");
    var box5 = document.querySelector(".box5");
    var before5 = document.querySelector(".before5");
    btns.parentNode.removeChild(btns);


    const btnNew = document.createElement("button");
    btnNew.innerHTML = "Item adicionado ao carrinho";
    box5.insertBefore(btnNew, before5)

    btnNew.style.padding = "15px";
    btnNew.style.marginTop = "35px";
    btnNew.style.border = 'none';
    btnNew.style.borderRadius = "10px";
    btnNew.style.background = "#707070";
    btnNew.style.color = '#fff';
    btnNew.style.fontSize = "18px";
    
    plusCar(++car)
}

function addCar6 (){
    var btns = document.querySelector(".btn6");
    var box6 = document.querySelector(".box6");
    var before6 = document.querySelector(".before6");
    btns.parentNode.removeChild(btns);


    const btnNew = document.createElement("button");
    btnNew.innerHTML = "Item adicionado ao carrinho";
    box6.insertBefore(btnNew, before6)

    btnNew.style.padding = "15px";
    btnNew.style.marginTop = "35px";
    btnNew.style.border = 'none';
    btnNew.style.borderRadius = "10px";
    btnNew.style.background = "#707070";
    btnNew.style.color = '#fff';
    btnNew.style.fontSize = "18px";
    
    plusCar(++car)
}