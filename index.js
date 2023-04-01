$("#confirm-task").click(function(){
    
    // Get values from form
    var task = $("input").val();
    var priority = $("#floatingSelect1 option:selected").text();
    var difficulty = $("#floatingSelect2 option:selected").text();
    var timeRequired = $("#floatingSelect3 option:selected").text();

    // Check if the form is empty
    if (task.trim() === "") {
        return;
    }

    // Create new row with task details
    var newRow = "<div class='col-md-5'><p>" + task + "</p></div>" +
                 "<div class='col-md-2 form-floating'><p>" + priority + "</p></div>" +
                 "<div class='col-md-2 form-floating'><p>" + difficulty + "</p></div>" +
                 "<div class='col-md-2 form-floating'><p>" + timeRequired + "</p></div>" +
                 "<div class='col-md-1'><button type='button' class='btn btn-circle trash-btn'><i class='fa-sharp fa-solid fa-trash'></i></button></div>";

    // Append new row to task table
    $("#task-table").append("<div class='row task'>" + newRow + "</div>");

    // Clear form
    $("input").val("");
    $("#floatingSelect1").prop('selectedIndex',0);
    $("#floatingSelect2").prop('selectedIndex',0);
    $("#floatingSelect3").prop('selectedIndex',0);

    // Add event listener to trash button in new row
    $(".trash-btn").click(function(){
        $(this).closest('.task').remove();
    });
});

