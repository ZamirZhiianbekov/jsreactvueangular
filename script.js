const slider = document.querySelector(".slider"),
active = document.querySelector("#active"),
line1 = document.querySelector("#line1"),
line2 = document.querySelector("#line2"),
line3 = document.querySelector("#line3"),
line4 = document.querySelector("#line4"),
container = document.querySelector(".container");

line1.addEventListener("click", function() {
   slider.style.transform = "translateX(0)";
   active.style.top = 0;
   container.style.background = "#d5c50d";
});
line2.addEventListener("click", function() {
   slider.style.transform = "translateX(-25%)";
   active.style.top = "80px";
   container.style.background = "#0e8191"
});
line3.addEventListener("click", function() {
   slider.style.transform = "translateX(-50%)";
   active.style.top = "160px";
   container.style.background = "#07814c"


});
line4.addEventListener("click", function() {
   slider.style.transform = "translateX(-75%)";
   active.style.top = "240px";
   container.style.background = "#a10820"
});
