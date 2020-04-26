  
$(document).ready(function () {

    $(".devbtn").on("click", function (event) {
        event.preventDefault();

        var burger_id = $(this).attr("data-id")
        alert(burger_id);
        $.ajax({
            method: "PUT",
            // match this up with your Put route api// 
            url: "/api/burgers/" + burger_id
        }).then(function (data) {
            // reload page to display devoured burger in proper column
            location.reload();
        });
    });
});