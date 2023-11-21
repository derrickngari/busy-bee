const navbar = document.getElementById('navbar');
const toggleBtn = document.querySelector('#bars');
const closeBtn = document.querySelector('#close');

function toggle(){
    navbar.style.display = "flex";
    navbar.style.transition = "2s";
};

function closeLinks(){
    navbar.style.display = "none";
    navbar.style.transition = ".1s";
}