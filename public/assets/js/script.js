$(function () {
    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");
        let devoured = $(this).data("devoured");

        let newDevouredState = {
            devoured: devoured
        };

        // PUT request:
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", devoured);
                // Reload the page to get the updated list: 
                location.reload();
            }
        );
    });
    // Submit Click event:
    $(".create-form").on("submit", function (event) {
        // PreventDefault on a submit event: 
        event.preventDefault();
        let newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: false
        };
        console.log(newBurger.burger_name)
        // POST request:
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list: 
                location.reload();
            }
        );
    });


}); 
