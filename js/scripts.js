  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

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

        