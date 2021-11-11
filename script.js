const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let today = new Date();
    let inputeDate = new Date(document.getElementById('date_input').value);

    let birthMonth,birthDate,birthYear;

    let birthDetails ={
        date: inputeDate.getDate(),
        month: inputeDate.getMonth()+1,
        year : inputeDate.getFullYear()
    }
 
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();


           leapChecker(currentYear);

    if(birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) || (birthDetails.date > currentDate && birthDetails.month == currentMonth  && birthDetails.year == currentYear))
    {
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

      birthYear = currentYear - birthDetails.year;

      if(currentMonth >= birthDetails.month){
          birthMonth = currentMonth - birthDetails.month;
        
      }
      else{
          birthYear--;
          birthMonth = 12 + currentMonth - birthDetails.month;

      }
      if(currentDate >= birthDetails.date){
          birthDate = currentDate - birthDetails.date;
      }
      else{
          birthMonth--;
          let days =months[currentMonth -2];
          birthDate = days + currentDate - birthDetails.date;

          if(birthMonth < 0){
              birthMonth = 11;
              birthYear--;
          }
      
        }
      displayResult(birthDate , birthMonth ,birthYear);
    
}
    function displayResult(bDate , bMonth ,bYear){
        document.getElementById("Years").textContent =bYear;
        document.getElementById("Months").textContent =bMonth;
        document.getElementById("Days").textContent =bDate;


    }



    function leapChecker(year){
        if(year%4 ==0 || (year %100 == 0  && year % 400 == 0)){
             months[1] = 29;
        }
        else{
            months[1] = 28;
        }
        console.log(year , months[1]);
    }


