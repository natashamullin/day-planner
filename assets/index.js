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


});