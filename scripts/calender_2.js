var today=new Date();
var todaysDate = today.getDate(); //1 - 31
var todaysDay = today.getDay(); // 0- 6
var todaysMonth = today.getMonth(); // 0 - 11
var todaysYear = today.getFullYear();
var Months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var startDayOfMonth = (new Date(today.getFullYear(),todaysMonth,1)).getDay();
var endDateOfMonth = (new Date(today.getFullYear(),todaysMonth+1,0)).getDate();
var startDate = (new Date(today.getFullYear(),todaysMonth,1));

function addMonthName(){
  document.getElementById('currentMonth').innerHTML=Months[todaysMonth]+" - "+todaysYear;
}

function addDays(){
  addMonthName();
  var k=1;
  var cal_cell=document.getElementById('weekdays');
  for(var i = 0; i<=calculateNumberOfWeeks();i++){
    var row = document.createElement('tr');
    cal_cell.appendChild(row);
    for(var j=0;j<7;j++){
      var cell = document.createElement('td');
      row.appendChild(cell);
      if(k <= endDateOfMonth){
        var date = new Date(today.getFullYear(),todaysMonth,k);
        if(date.getDay() == j){
          cell.innerHTML = date.getDate();
          
          if(date.getDate() == todaysDate){
            cell.className = "cal-today";
            cell.id = "cell_num_"+k;
          }
          k++;
        }
      }
    }
  }
}

function calculateNumberOfWeeks(){
  var numberOfWeeks = 1;
  console.log(startDayOfMonth);
  var days = endDateOfMonth - ((6-startDayOfMonth) + 1);
  console.log(days);
  if(days % 7 == 0){
    numberOfWeeks = (days / 7);
    console.log("Remaining days divisible by 7 ", numberOfWeeks);
  }
  else{
    numberOfWeeks = Math.floor(days / 7)+1;
    console.log("Remaining days are not divisible by 7 ", numberOfWeeks);
  }
  return numberOfWeeks;
}

function test(){
  console.log(calculateNumberOfWeeks());
}
