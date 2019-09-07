var x = document.querySelector("#pic")
x.addEventListener("mouseover",function(){
  x.style.color = "white";
})
x.addEventListener("mouseout", function(){
  x.style.color = "red"
})

var xx = document.querySelector("#jum")

xx.addEventListener("mouseover",function(){
  xx.style.color = "orange";
})
xx.addEventListener("mouseout",function(){
  xx.style.color = "white"
})

var x2 = $('#pic')
x2.on("click",function () {
  $('.jumbotron').fadeToggle(3000);
  $('#pic1').fadeToggle(3000);
  $('#pic').text("You just wiped half the universe...")



  $("#sign_up").fadeToggle(3000);
  $('#pic').fadeOut(3000);
})

var x3 = $("h1")
x3.on("click",function () {
  $('.nav-link').fadeOut(3000);
})
