$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var yearInput = parseInt($("#yearInput").val());
    console.log(yearInput);

    if (isNaN(yearInput) || yearInput < 0) {
      $("#notayear").show();
    }
    else if (yearInput%400===0) {
      $("#positive").show();
    }
    else if (yearInput%100===0) {
      $("#negative").show();
    }
    else if (yearInput % 4 === 0) {
      $("#positive").show();
    }
    else if (!(yearInput % 4 === 0)) {
      $("#negative").show();
    }

  });
});
