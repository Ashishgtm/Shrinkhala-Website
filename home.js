
/* threedot and images */ 
var dot = document.getElementsByClassName("dot");
var banner = document.getElementById("banner");

dot[0].onclick = function(){
    banner.src="images/sk2.jpg";
    animation();
    this.classList.add("active");
}

dot[1].onclick = function(){
    banner.src="images/sk1.jpg";
    animation();
    this.classList.add("active");
}

dot[2].onclick = function(){
    banner.src="images/sk4.jpg";
    animation();
    this.classList.add("active");
}
function animation()
{
    banner.classList.add("zoom");
    setTimeout(function(){
        banner.classList.remove("zoom");
    },500);

    for(b of dot){
        b.classList.remove("active");
    }
}

/*preloader*/
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
})


/*scroll down*/
$('#goToAboutSection1').click(function() {
    $('html, body').stop().animate({scrollTop: $('#section1').offset().top}, 800, function(){});
})
$('#goToAboutSection2').click(function() {
    $('html, body').stop().animate({scrollTop: $('#section2').offset().top}, 800, function(){});
})
$('#goToAboutSection3').click(function() {
    $('html, body').stop().animate({scrollTop: $('#section3').offset().top}, 800, function(){});
})
$('#goToAboutSection4').click(function() {
    $('html, body').stop().animate({scrollTop: $('#section4').offset().top}, 800, function(){});
})
$('#goToAboutSection5').click(function() {
    $('html, body').stop().animate({scrollTop: $('#section5').offset().top}, 800, function(){});
})



var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }
    else{
        icon.src = "images/moon.png";
    }
}