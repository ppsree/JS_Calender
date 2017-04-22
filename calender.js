var today=new Date();
var currentDate=today.getDate();
var currentDay=today.getDay();
var currentMonth=today.getMonth();//0-11
var monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var start = new Date(today.getFullYear(), today.getMonth(), 1);
var startDay=start.getDay(); //0-6
var end = new Date(today.getFullYear(), today.getMonth()+1,0);
var endDate=end.getDate(); //1-31

function myWeekdays(){
  showCurrentMonth();
var parent = document.getElementById("weekHeader");
parent.className="container";
var myRow=document.createElement("div");
myRow.className="row;"
parent.appendChild(myRow);
var list=['S','M','T','W','T','F','S'];
len = list.length;
for(var i=0;i<len;i++){
  var child = document.createElement('div');
  myRow.appendChild(child);
  child.className="col-md-1"
  child.innerHTML=list[i];
}
showCalender();

};

function showCurrentMonth(){
  document.getElementById('monthName').innerHTML=monthList[currentMonth];
};

function showCalender(){
  var cal_start=1;
  //console.log(cal_start);
  var parent = document.getElementById("workspace");



      for (var i=0;i<6;i++){

        var cal_row=document.createElement("div");
        parent.appendChild(cal_row);
        cal_row.className = "row";
        for(var j=0;j<7;j++){

          var cal_col=document.createElement("div");
          cal_row.appendChild(cal_col);
          cal_col.className="col-md-1";

          //console.log(cal_start);
          //console.log(currentDay);
          //while(cal_start <= endDate){
          var theNextDate=new Date(today.getFullYear(), today.getMonth(), cal_start);
            if((theNextDate).getDay() == j && cal_start <= endDate){
              cal_col.innerHTML=cal_start;
              console.log(currentDay);
              //while(cal_start <= endDate){
              cal_start++;
            //}
          }
      //}

     }
  }
}

/*
function showCalender(){
  var cal = document.getElementById("workspace");
  var cal_row = document.createElement('div');
  cal.appendChild(cal_row);
  cal_row.className='row';

}
*/

var showCalender1=function(){
  var parent = document.getElementById("workspace");
  for(var i=0; i<4;i++){
    var month=document.createElement("div");
    parent.appendChild(month);
    month.className = "row";
    for(var j=0;j<7;j++){
      var day=document.createElement("div");
      month.appendChild(day);
      day.className="col-md-1";
      day.innerHTML=j;
    }
  }
}
