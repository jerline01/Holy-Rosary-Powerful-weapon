
var song =  new Audio ("hail mary song.mp3");


$("#prayer").on("mouseenter",function(){
  song.play();
});

$("#prayer").on("mouseleave",function(){
  song.pause();
});
