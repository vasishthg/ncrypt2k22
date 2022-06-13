// Hello future ncrypt team :), if you are wondering that why did i do basic markup and css in js. Its because i want the future ncrypt webdev person to actually understand this (i mean it is pretty basic), just wanted to make the future ncrypt find this :). Dont get angere pls

// Preloader
jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('.loader').fadeOut('slow', function () {
            });
        },8000);
    });
});
$('body').css({
  'overflow-y': 'hidden'
});
setTimeout(function(){
  $('.loader').fadeOut('slow', function(){
    $('body').css({
      'overflow-y': 'auto'
    });
  });
},2000);

// redirs
  // Discord Redirect
$(".dclink").click(function(){
  window.open("https://discord.io/nCrypt22")
  event.preventDefault()
})
$(".dclink").css("cursor", "pointer")

  // Facebook Redirect
$(".fblink").click(function(){
  window.open("https://www.facebook.com/dpsslncrypt")
  event.preventDefault()
})
$(".fblink").css("cursor", "pointer")

  // Instagram Redirect
  $(".instalink").click(function(){
    window.open("https://www.instagram.com/ncryptdps/")
    event.preventDefault()
  })
  $(".instalink").css("cursor", "pointer")

// Watch
$("#wtch").click(function(){
  $("#overlay").fadeIn('slow')
})

function off(){
  $("#overlay").fadeOut('slow')
}

// cursor pointer
$(".pointer").css("cursor", "pointer")

$(document).bind("contextmenu",function(e) {
  e.preventDefault();
})

window.oncontextmenu = function () {
  return false;
}
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
      return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
      return false;
  }
});

$(".menyoo").click(function(){
  $("#sidenav").slideToggle();
})
function menuFunction(){
  var mentxt = document.getElementById("menu")
  if (mentxt.innerHTML === "Menu"){
    mentxt.innerHTML = "Close";
  }
  else{
    mentxt.innerHTML = "Menu";
  }
}

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("js/service-worker.js");
  }
});

$("#ncryptmail").click(function(){
  window.open("mailto:ncryptdpssl@gmail.com")
  event.preventDefault()
})
$("#ncryptmail").css("cursor", "pointer")

$("#ncrypttel").click(function(){
  window.open("tel:1234567890")
  event.preventDefault()
})
$("#ncrypttel").css("cursor", "pointer")

$(".backevent").click(function(){
  window.location.replace("/events")
})

$(".navlinka").css("cursor", "pointer")