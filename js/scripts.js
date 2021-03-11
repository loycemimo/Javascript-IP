
function results() {
  var gender = parseInt(document.getElementById("gender").value)
  var cc = parseInt(document.getElementById("centuryBorn").value.slice(0, 2));
  var yy = parseInt(document.getElementById("yearBorn").value.slice(2, 4));
  var dd = parseInt(document.getElementById("dateBorn").value);
  var mm = parseInt(document.getElementById("monthBorn").value);
  var day = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var akanDay = days[day.toFixed()];

  var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


  if (gender == 1) {
    if (akanDay === 'Sunday') {
      document.getElementById("output").innerHTML = maleNames[0];
      return true;
    }
  }
  else if (gender == 1) {
    if (akanDay === 'Monday') {
      document.getElementById("output").innerHTML = maleNames[1];
      return true;
    }
  }
  else if (gender == 1) {
    if (akanDay === 'Tuesday') {
      document.getElementById("output").innerHTML = maleNames[2];
      return true;
    }
  }
  else if (gender == 1) {
    if (akanDay === 'Wednesday') {
      document.getElementById("output").innerHTML= maleNames[3];
      return true;
    }
  }
  else if (gender == 1) {
    if (akanDay === 'Thursday') {
      document.getElementById("output").innerHTML = maleNames[4];
      return true;
    }
  }
  else if (gender == 1) {
    if (akanDay === 'Friday') {
      document.getElementById("output").innerHTML = maleNames[5];
      return true;
    }
  }
  else if (gender == 1) {
    if (akanDay === 'Saturday') {
      document.getElementById("output").innerHTML = maleNames[6];
      return true;
    }
  }
  if (gender == 2) {
    if (akanDay === 'Sunday') {
      document.getElementById("output").write= femaleNames[0];
      return true;
    }
  }
  else if (gender == 2) {
    if (akanDay === 'Monday') {
      document.getElementById("output").write= femaleNames[1];
      return true;
    }
  }
  else if (gender == 2) {
    if (akanDay === 'Tuesday') {
      document.getElementById("output").write= femaleNames[2];
      return true;
    }
  }
  else if (gender == 2) {
    if (akanDay === 'Wednesday') {
      document.getElementById("output").write= femaleNames[3];
      return true;
    }
  }
  else if (gender == 2) {
    if (akanDay === 'Thursday') {
      document.getElementById("output").write= femaleNames[4];
      return true;
    }
  }
  else if (gender == 2) {
    if (akanDay === 'Friday') {
      document.getElementById("output").write= femaleNames[5];
      return true;
    }
  }
  else if (gender == 2) {
    if (akanDay === 'Saturday') {
      document.getElementById("output").write= femaleNames[6];
      return true;
    }
  }
}