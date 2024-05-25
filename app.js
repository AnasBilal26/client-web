var menuicon =document.querySelector(".menuicon")
var ffll =document.querySelector(".fullscreen")
var full =document.querySelector(" .fullscreensec")

menuicon.addEventListener("click",function(){
full.style.right =0;
ffll.style.right =0;
});
var full =document.querySelector(" .fullscreensec")
var cross = document.querySelector (".cross")
var ffll =document.querySelector(".fullscreen")


cross.addEventListener("click",function(){
    full.style.right ="-100%";
    ffll.style.right ="-100%";
    });
    var loader =document.querySelector(".loader")
    setTimeout(function(){

loader.style.top ="-100%"

    },3000)
