$(window).load(function() {
  $(".loader").fadeOut("slow");
});
$("a").click(function() {
  $(".loader").fadeIn("fast");
  $(".loader").fadeOut("fast");
});
