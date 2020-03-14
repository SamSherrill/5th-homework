// Jonathan showed creating a "scripts" "styles" and one other folder, and tossed those into an "assets folder".
// That is not required but "it's a great time to learn".

$(document).ready(function () {
    console.log("ready!");

    // Code to get today's weekday & day stored. 
    var today = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var todayDate = days[today.getDay()] + ", " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();

    // Display today's weekday & date on the DOM below the already displayed title.
    $("#currentDay").text(todayDate);
    // ^^^ Did research on https://www.w3schools.com/js/js_date_methods.asp -- Go here if this breaks.

    // ALMOST FOR SURE NEED TO LOOP THIS FOR ALL CONTAINERS.
    for (i = 0; i < 9; i++) {
        // EXAMPLE FROM WORKING MOVIE APP HARD ACTIVITY
        // for (var i = 0; i < movies.length; i++) {

        //     // Then dynamicaly generates buttons for each movie in the array
        //     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        //     var a = $("<button>");
        //     // Adds a class of movie to our button
        //     a.addClass("movie");
        //     // Added a data-attribute
        //     a.attr("data-name", movies[i]);
        //     // Provided the initial button text
        //     a.text(movies[i]);
        //     // Added the button to the buttons-view div
        //     $("#buttons-view").append(a);
        //   }

        // Need 3 separate items in each row -- 1) Box with some static text, 2) text box that receives & retains info,
        // and 3) blue button with save icon
        // Create & display div containers for each hour time slot

        var newRowEl = $("<div>")
        newRowEl.addClass("container");
        newRowEl.attr("row-number", i);
        // $(".container").width("100%"); // So far this width 100% seems useless. The div is the same with or without it.
        // This below needs to change to the right $("") reference
        $(newRowEl).attr("style", "background-color:gray");
        $(newRowEl).height("100px");
        $("#schedule-container").append(newRowEl);

        // Loop for the 3 containers
        // for (i = 0; i < 3; i++) {
        //     // Need 3 separate items in each row -- 1) Box with some static text, 2) text box that receives & retains info,
        //     // and 3) blue button with save icon


        //     // Create & display div containers for each hour time slot

        // }
    }

    // Set data-index for each div that represents an hour time slot. This will require a for loop.
});

// Gotta use responsive -- HOW???
// The base code we were given is responsive. Make sure this doesn't break when I add the hour slots.


// Probably want to use:
//  1) Bootstrap
//  2) Font Awesome
//  3) Google Fonts -- DONE

//     # 05 Third-Party APIs: Work Day Scheduler #
// Create a simple calendar application that allows the user to save events for each hour of the day. 
// This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be  
// sure to read the documentation carefully and concentrate on using Moment.js in the browser.

//          ## USER STORY ##
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

//          ## ACCEPTANCE CRITERIA ##

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//          DONE

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// --> These are shown as 9-5 on the gif

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// -- Time past is grayed out. Current our is in red. Future is in green.

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

// The following animation demonstrates the application functionality:
// ![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

//          ## REVIEW ##
// You are required to submit the following for review:
// * The URL of the deployed application.
// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.