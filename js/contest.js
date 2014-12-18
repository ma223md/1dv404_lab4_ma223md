"use strict";

function Contest(date, text){
    // infotext
    this.getText = function() {
        return text;
    };
    
    this.setText = function(_text) {
        text = _text;
    };
    
    // date
    this.getDate = function() {
        return date;
    };
    
    this.setDate = function(_date) {
        date = _date;
    };
}

Contest.prototype.toString = function() {
    return this.getText() + " (" + this.getDate() + ")";
};