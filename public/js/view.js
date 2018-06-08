$(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devoured");
  
      var devouredState = {
        devoured: devoured
      };
  
      // Send the PUT request.
      $.ajax("/api/devoured/" + id, {
        type: "PUT",
        data: devoured
      }).then(
        function() {
          console.log("You devoured: ", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var burger_name = {
        burger_name: $("#burgers").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: burger_name
      }).then(
        function() {
          console.log("added burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  