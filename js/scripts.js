$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var yearInput = parseInt($("#yearInput").val());
    console.log(yearInput);


    if (yearInput%100===0) {
      $("#negative").show();
    }
    else if (yearInput % 4 === 0) {
      $("#positive").show();
    }
    else if (!(yearInput % 4 === 0)) {
      $("#negative").show();
    }
  })
})
