"use strict";

function Calendar(){
    // array with dates
    var dateArray = [];
}

Calendar.prototype.isDateFree = function(date) {
    // check date array if date is free
    for (var i = 0; i < this.dateArray.length; i++) {
        if (this.dateArray[i] == date) {
            return false;
        }
    }
    // else return true
    return true;
};

Calendar.prototype.freeDate = function(date) {
    // remove date from list
};

Calendar.prototype.setDate = function(date) {
    // add date to list
    this.dateArray.push(date);
};