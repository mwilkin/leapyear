$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var yearInput = $("#yearInput").val();
    console.log(yearInput);
    if (yearInput % 4 === 0) {
      $("#positive").show();
    }
    if (!(yearInput % 4 === 0)) {
      $("#negative").show();
    }
  })
})
