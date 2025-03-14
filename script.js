const headerElement = document.querySelector('header');
const headerHeight = parseFloat(getComputedStyle(headerElement).height);
const navigationOne = document.querySelector('.navbar_1 ul');
const cancel=document.querySelector('.cancel');
const menu=document.querySelector('.menu');

const screenWidth=parseFloat(window.innerWidth);
const main=document.querySelector('main');
main.style.paddingTop=`${headerHeight}px`;



if(screenWidth <=1200){
navigationOne.style.top=`${headerHeight}px`;

navigationOne.style.height=`calc(100vh - ${headerHeight}px)`;
cancel.addEventListener('click',()=>{
    navigationOne.style.left='-200vw';
    cancel.style.display='none';
    menu.style.display='block';
})

menu.addEventListener('click',()=>{
    navigationOne.style.left='0px';
    menu.style.display='none';
    cancel.style.display='block';
    console.log(2);

})


}



