window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("nav").classList.add("sticky");
    } else {
        document.getElementById("nav").classList.remove("sticky");
    }

}

function showMenu() {
    document.getElementById("navbar").style.width = "100vw";
    document.getElementById("show").style.display = "none";
    document.getElementById("hide").style.display = "block";
}

function hideMenu() {
    document.getElementById("navbar").style.width = "0px";
    document.getElementById("show").style.display = "block";
    document.getElementById("hide").style.display = "none";
}