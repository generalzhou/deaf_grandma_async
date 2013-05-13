$(document).ready(function() {
  
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.post("http://localhost:9393/grandma", $(this).serialize(), function(data) {
      var grandma = $(data).find("#grandma_says").text();
      // debugger
      if ($('#grandma_says').length > 0) {
        $('#grandma_says').text(grandma);
      } else {
        $('h1').after('<p>Grandma says: "<span id="grandma_says">' + grandma + '</span>"</p>');
      }
      console.log(data);
    });

    console.log("probably called before the callback");
  });
    


});
