// scrollingheight : Enter Content & Padding (visible or not)
// clientHeight : visible content & Padding


let el = document.querySelector('.scroller');
let height=document.documentElement.scrollHeight - document.documentElement.clientHeight;


window.addEventListener("scroll" , ()=>{
let scrollTop=document.documentElement.scrollTop;
// console.log(scrollTop);
el.style.width=`${(scrollTop/height) * 100}%`;
});
