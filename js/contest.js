"use strict";

function Contest(date, text){
    // infotext
    this.getText = function() {
        return text;
    }
    
    this.setText = function(_text) {
        text = _text
    }
    
    this.getDate = function() {
        return date;
    }
    
    this.setDate = function(_date) {
        date = _date;
    }
    
    // date
}