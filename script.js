const menu = document.querySelector('#mobile-menu');
const menuItems = document.querySelector('.navbar');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuItems.classList.toggle('active');

    if(menuItems.classList.contains('active')){
        document.getElementById('bar1').style.backgroundColor = "#000";
        document.getElementById('bar2').style.backgroundColor = "#000";
        document.getElementById('bar3').style.backgroundColor = "#000";
    }else{
        document.getElementById('bar1').style.backgroundColor = "#fff"
        document.getElementById('bar2').style.backgroundColor = "#fff"
        document.getElementById('bar3').style.backgroundColor = "#fff"
    }
});