"use strict";

// datumvariabler
var calendar = new Calendar();
var d = new Date("December 20, 2014"),
otherd = new Date("December 21, 2014"),
anotherd = new Date("December 21, 2013");

// ledigt datum och upptaget datum, test
test ("Is date free", function(){
    ok(calendar.isDateFree(otherd), 'Date is free');
    ok(!calendar.isDateFree(otherd), 'Date is not free');
    ok(!calendar.isDateFree(anotherd), 'Invalid date');
}) 

// är datumet legitimt
test ("Is date valid", function(){
    ok(calendar.isDateValid(d), 'Date is valid');
    ok(calendar.isDateValid(anotherd), 'Date is invalid');
})

// lägg till datum 
test ("Add date", function(){
    ok(calendar.setDate(otherd), "Date is set");
})

// ta bort datum
test ("Remove date", function(){
    ok(calendar.freeDate(d), "Date is removed");
    ok(calendar.freeDate(anotherd), "Date doesn't exist");
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