$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();
  })

  $("#begin").click(function() {
    $("#intro").addClass("hidden");
    $("#survey").removeClass("hidden");
  })

  
  $("form").submit(function() {
    const name = $("#user-name").val().trim();
    const q1 = $("#color").val();
    const q2 = $("#food").val();
    const q3 = $("input:radio[name=flavor]:checked").val();
    const q4 = $("input:radio[name=location]:checked").val();
    const q5 = $("input:radio[name=tech]:checked").val();
    surveyResults(name, q1, q2, q3, q4, q5);
  })
  
  function surveyResults(name, q1, q2, q3, q4, q5) {
    if (name === ""){
      alert("You forgot your name!");
    }else if(q1 === "Choose one" || q2 === "Choose one") {
      alert("Missing an input(It's one of the dropdowns)")
    }else if(q1 === "Red"){
      if(q3 === "rocky" && q5 === "google") {
        $("#survey").addClass("hidden");
        $("#ruby, #restart").removeClass("hidden");
        $(".name").text(name);
      }
    }else if(q1 === "Yellow") {
      if(q2 === "Sushi" && q4 === "city") {
        $("#survey").addClass("hidden");
        $("#csharp, #restart").removeClass("hidden");
        $(".name").text(name);
      }
    }else {
      $("#survey").addClass("hidden");
      $("#javascript, #restart").removeClass("hidden");
      $(".name").text(name);
    }
  }
})

