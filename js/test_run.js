"use strict";

function isEven(val) {
    return val % 2 === 0;
}



var d = new Date("December 20, 2014"),
otherd = new Date("December 21, 2014"),
dateArray = [];

dateArray.push(d);

function isDateFree(date) {
    // check date array if date is free
    for (var i = 0; i < dateArray.length; i++) {
        if (dateArray[i] === date) {
            return false;
        }
    }
}
    
test (isDateFree(), function(){
    ok(isDateFree(otherd), 'Date is free');
    ok(!isDateFree(d), 'Date is not free');
}) 

test (isEven(), function() {
    ok(isEven(0), 'Zero is an even number');
    ok(isEven(2), 'So is two');
    ok(isEven(-4), 'So is negative four');
    ok(!isEven(1), 'One is not an even number');
    ok(!isEven(-7), 'Neither is negative seven');
})