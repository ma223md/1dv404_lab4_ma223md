"use strict";

function ContestManager(calendar){
    var contestArray = [];
    
    this.getCalendar = function(){
        return calendar;
    };
    
    this.setCalendar = function(_calendar){
        calendar = _calendar;
    };
    

}

ContestManager.prototype.contestmanager = function(date){
    //create new calendar
    var calendar = new Calendar;
}

ContestManager.prototype.createContest = function(date){
    if(ContestManager.calendar.isFree(date)){
        //create contest
        var contest = new Contest;
        //add to list
        ContestManager.contestArray.push(contest);
        //add to calendar
    }
    
    else {
        // date is busy
    }
}