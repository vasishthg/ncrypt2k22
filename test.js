// let keylog = [];
// document.onkeydown = function (e) {
//     let keypressed = e.key;
//     keylog.push(keypressed);
//     console.log(keylog);
// // };
// document.body.addEventListener("keydown", function(event) {
//     if ((event.code == "KeyN")) {
//               alert ("helos");
//               event.preventDefault()
//           }
// }); 
$(document).keydown(function (event) {
      if (event.code == "KeyN") {
          alert("wiejrr")
      }
});