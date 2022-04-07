$(document).ready(function () {
  $("#submit").submit(function(event) {
    event.preventDefault();
  })

  $("#begin").click(function() {
    $("#intro").addClass("hidden");
    $("#survey").removeClass("hidden");
  })

  const name = $("#name-input").val();
  const q1 = $("#color").val();
  const q2 = $("#food").val();
  const q3 = $("#flavor").val();
  const q4 = $("#vacation").val();
  const q5 = $("#image").val();
  
  if
})