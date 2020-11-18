var playButton=document.getElementById("play_button")

function loadContent(){
  $ ("#game_content").load("game.html");
}
playButton.addEventListener("click", function (){
  $.ajax({url: "game.html", success: loadContent});
})
