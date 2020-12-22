// current time
$("#currentDay").text(moment().format("MMM Do YYYY"));

$(document).ready(function () {

    function hourUpdater() {
        // set number of hours
        const currentHour = moment().hours();
        $(".time-block").each(function () {
            const hour = parseInt($(this).attr("id").split("-")[1]);

            // if we are past current hour turn grey
            if (hour < currentHour) {
                $(this).addClass("past");
                // if we are on current hour turn red
            } else if (hour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                // if neither turn green for future time 
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    // run hour up dater
    hourUpdater();

    //set up interval to update current time every minute
    const interval = setInterval(hourUpdater, 60000);
    //save on click
    $(".saveBtn").on("click", function () {
        const value = $(this).siblings(".textarea").val();
        const time = $(this).parent().attr("id")

        //save to local store so that it comes back up on reload
        localStorage.setItem(time, value)
    });

    //load saved info
    $("#9am .textarea").val(localStorage.getItem("9am"));
    $("#10am .textarea").val(localStorage.getItem("10am"));
    $("#11am .textarea").val(localStorage.getItem("11am"));
    $("#12pm .textarea").val(localStorage.getItem("12am"));
    $("#1pm .textarea").val(localStorage.getItem("1pm"));
    $("#2pm .textarea").val(localStorage.getItem("2pm"));
    $("#3pm .textarea").val(localStorage.getItem("3pm"));
    $("#4pm .textarea").val(localStorage.getItem("4pm"));
    $("#5pm .textarea").val(localStorage.getItem("5pm"));
});