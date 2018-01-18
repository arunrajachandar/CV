$(window).load(function() {
  $(".loader").fadeOut("slow");
});
$("button").click(function() {
  $(".loader").fadeIn("slow");
  $(".loader").fadeOut("slow");
});
