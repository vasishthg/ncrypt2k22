var mentxt = document.getElementById("menubtn")

var stopAllYouTubeVideos = () => { 
    var iframes = document.querySelectorAll('iframe');
    Array.prototype.forEach.call(iframes, iframe => { 
      iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
    func: 'pauseVideo' }), '*');
   });
  }

$("#menubtn").click(function(){
    $(".menu").slideToggle()
    if (mentxt.innerHTML === "Menu"){
        mentxt.innerHTML = "Close";
    }
    else{
        mentxt.innerHTML = "Menu";
    }
})

$("#wtch").click(function(){
    $("#overlay").fadeIn('slow')
})
  
function off(){
    $("#overlay").fadeOut('slow')
    stopAllYouTubeVideos();
}

var sponsortext = document.getElementById("sponsor-name")

$("#btn1").click(function(){
    sponsortext.innerHTML = "Name1";
    document.getElementById("btn1").setAttribute("class", "carousel-btn active")
    document.getElementById("btn2").setAttribute("class", "carousel-btn ")
    document.getElementById("btn3").setAttribute("class", "carousel-btn ")
    document.getElementById("btn4").setAttribute("class", "carousel-btn ")
})

$("#btn2").click(function(){
    sponsortext.innerHTML = "Name2";
    document.getElementById("btn1").setAttribute("class", "carousel-btn ")
    document.getElementById("btn2").setAttribute("class", "carousel-btn active")
    document.getElementById("btn3").setAttribute("class", "carousel-btn ")
    document.getElementById("btn4").setAttribute("class", "carousel-btn ")
})

$("#btn3").click(function(){
    sponsortext.innerHTML = "Name3";
    document.getElementById("btn1").setAttribute("class", "carousel-btn ")
    document.getElementById("btn2").setAttribute("class", "carousel-btn ")
    document.getElementById("btn3").setAttribute("class", "carousel-btn active")
    document.getElementById("btn4").setAttribute("class", "carousel-btn ")
})

$("#btn4").click(function(){
    sponsortext.innerHTML = "Name4";
    document.getElementById("btn1").setAttribute("class", "carousel-btn ")
    document.getElementById("btn2").setAttribute("class", "carousel-btn ")
    document.getElementById("btn3").setAttribute("class", "carousel-btn ")
    document.getElementById("btn4").setAttribute("class", "carousel-btn active")
})

$(".redir-discord").click(function(){
    window.open("https://discord.gg/DeRyZhSva7")
})

$(".redir-insta").click(function(){
    window.open("https://www.instagram.com/ncryptdps/")
})

$(".redir-fb").click(function(){
    window.open("https://www.facebook.com/dpsslncrypt")
})

var title = document.getElementById("web-title")

$("#to-events").click(function(){
    title.innerHTML = "nCrypt - Events";
    $(".events").show()
    $(".team").hide()
    $(".alumini").hide()
    $(".menu").slideToggle()
    mentxt.innerHTML = "Menu";
})

function toEvents(){
    title.innerHTML = "nCrypt - Events";
    $(".events").show()
    $(".team").hide()
    $(".alumini").hide()
    $(".menu").slideToggle()
    mentxt.innerHTML = "Menu";
}

$("#to-home").click(function(){
    title.innerHTML = "nCrypt - Home";
    $(".events").hide()
    $(".team").hide()
    $(".alumini").hide()
    $(".menu").slideToggle()
    mentxt.innerHTML = "Menu";
})

$("#to-team").click(function(){
    title.innerHTML = "Meet The nCrypt Team";
    $(".events").hide()
    $(".team").show()
    $(".alumini").hide()
    $(".menu").slideToggle()
    mentxt.innerHTML = "Menu";
})

$("#to-alumini").click(function(){
    title.innerHTML = "nCrypt - Alumini";
    $(".events").hide()
    $(".team").hide()
    $(".alumini").show()
    $(".menu").slideToggle()
    mentxt.innerHTML = "Menu";
})

document.getElementById("jod-audio").muted = true;
document.getElementById("jod-audio").pause();
var theGod = () => { 
    document.getElementById("jod-audio").play();
    document.getElementById("jod-audio").muted = false;
    $(".thegod-anim").fadeIn()
}
$("#thegod").css("cursor", "pointer")

$("#thegod").click(function(){
    toggleConfetti();
    theGod();
})

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', '/js/particles.json', function() {
//     console.log('callback - particles.js config loaded');
//   });

$("#thegod-audio").click(function(){
    document.getElementById("jod-audio").muted = true;
    $(".thegod-anim").fadeOut()
    document.getElementById("jod-audio").pause();
    setTimeout(function(){
        toggleConfetti();
    },1000)
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

AOS.init()
