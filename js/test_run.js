"use strict";

// datumvariabler
var calendar = new Calendar();
var d = new Date("December 20, 2014"),
otherd = new Date("December 21, 2014");

// ledigt datum och upptaget datum, test
test ("Date free", function(){
    ok(calendar.isDateFree(otherd), 'Date is free');
    ok(!calendar.isDateFree(d), 'Date is not free');
}) 

// felaktigt datum

// lägg till datum 
test ("Add date", function(){
    ok(calendar.setDate(otherd), "Date is set")
})

// variabler för infotext
var info = "Info about contest",
text;

// tilldela infotext, funktion
function setText(_text) {
    text = _text;
    return text;
}

// hämta infotext, test
test ("Set info text", function(){
    equal(setText(info), "Info about contest", "Information assigned correctly" )
});