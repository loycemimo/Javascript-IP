
  function selectGender() {
    var gender = document.getElementById("gender").value;
    if (gender == "1") {
      alert("Gender must be selected");
      return false;
    }

  function giveCentury() {
        var century = document.getElementById("centuryBorn").value;
        if (century == "") {
          alert("Century must be filled out");
          return false;
        } 

function giveYear() {
        var year = document.getElementById("yearBorn").value;
         if (year == "") {
           alert("Year must be filled out");
            return false;
        }   

function giveMonth() {
         var month = document.getElementById("monthBorn").value;
            if (month == "0") {
              alert("Month must be selected");
              return false;  
        
        }

function giveDay() {
         var day = document.getElementById("dateBorn").value;
            if (day == "") {
             alert("Day must be filled out");
             return false;  
        }  
        
        
var cc = parseInt(document.getElementById("centuryBorn").value.slice(0, 2));
var yy = parseInt(document.getElementById("yearBorn").value.slice(2, 4));
var dd = parseInt(document.getElementById("dayBorn").value);
var mm = parseInt(document.getElementById("monthBorn").value);
var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];