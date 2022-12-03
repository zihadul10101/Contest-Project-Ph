
// Get the button
let topArrow = document.getElementById("topArrowHandler");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topArrow.style.display = "block";
    } else {
        topArrow.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// header sticky element


// window.onscroll = function () { mySticky() };

// var headerResponsive = document.getElementById("myHeader");
// var sticky = headerResponsive.offsetTop;

// function mySticky() {
//     if (window.pageYOffset > sticky) {
//         headerResponsive.classList.add("sticky");
//     } else {
//         headerResponsive.classList.remove("sticky");
//     }
// }

// dark or light mode
function darkLightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// header responsive
function headerRes() {
    var x = document.getElementById("myTopnav");
    console.log(x);
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// loder 



document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};



// video show or hide
function openForm() {
    document.getElementById("showVideo").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
