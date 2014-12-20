"use strict";

// test of contestmanager and calendar combined
// variables for test
var newCalendar = new Calendar();
var contestManager = new ContestManager(newCalendar),
newDate = new Date("December 24, 2014"),
oldDate = new Date("December 24, 2013");

test ("Create contest", function(){
    ok(contestManager.createContest(newDate), "Contest created on valid date");
    ok(!contestManager.createContest(oldDate), "Contest not created with invalid date");
    ok(!contestManager.createContest(notADate), "Contest not created with wrong input");
})

