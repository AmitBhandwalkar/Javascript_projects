// Timer Variable
var time = null;
var sec = 0;
var min = 0;

startTimer = () => {
  // time is null or not
  if (time == null) {
    time = setInterval(function getTime() {
      sec += 1;
      if (sec == 60) {
        min += 1;
        sec = 0;
      }
      if (min == 0) {
        if (sec <= 9) {
          document.getElementById('time_field').innerHTML = "<i class='fa fa-hourglass-2'></i>" + "00:0" + sec;
        }
        else {
          document.getElementById('time_field').innerHTML = "<i class='fa fa-hourglass-2'></i>" + "00:" + sec;
        }
      }
      else {
        if (min <= 9) {
          if (sec <= 9) {
            document.getElementById('time_field').innerHTML = "<i class='fa fa-hourglass-2'></i>" + "0" + min + ":0" + sec;
          }
          else {
            document.getElementById('time_field').innerHTML = "<i class='fa fa-hourglass-2'></i>" + "0" + min + ":" + sec;
          }
        }
        else {
          if (sec <= 9) {
            document.getElementById('time_field').innerHTML = "<i class='fa fa-hourglass-2'></i>" + min + ":0" + sec;
          }
          else {
            document.getElementById('time_field').innerHTML = "<i class='fa fa-hourglass-2'></i>" + min + ":" + sec;
          }
        }
      }


    }, 1000);
  }
}

// function for calculat World per Minute
getLettersMin = (rlc) => {

  let tsec = sec + (min * 60);
  if (tsec != 0) {
    let worldmin = (rlc / tsec) * 60;
    return worldmin;
  }
  else {
    return null;
  }
}

// function for calculat error rate

getErrorRate = (ec, tl) => {
  let errorRate = (ec / tl) * 100;
  return errorRate;
}


// function for stop

function stop(){
  // stop time
  clearInterval(time);



}






var textarray1 = "javascript is a light weight object oriented programming language which is used by several websites for scripting the web";

// on document load set text foe writing
onload = function () {
  this.document.getElementById('Refresh_button').hidden='true';
  this.document.getElementById('current_let').innerHTML = textarray1[0] + "<br><i class='fa fa-sort-asc current-letter'></i>";
  let id;
  let i = 1;
  let ids = "next_let"
  while (i <= 16) {
    id = ids + i;
    if (textarray1[i] == " ") {
      this.document.getElementById(id).innerHTML = "&nbsp;";
    }
    else {
      this.document.getElementById(id).innerHTML = textarray1[i];
    }
    i += 1;
  }

  while (i <= 20) {
    id = ids + i;
    if (textarray1[i] == " ") {
      this.document.getElementById(id).innerHTML = "&nbsp;";
    }
    else {
      this.document.getElementById(id).innerHTML = textarray1[i];
      this.document.getElementById(id).style.color = "#8c8c8c"
    }
    i += 1;
  }

  while (i <= 22) {
    id = ids + i;
    if (textarray1[i] == " ") {
      this.document.getElementById(id).innerHTML = "&nbsp;";
    }
    else {
      this.document.getElementById(id).innerHTML = textarray1[i];
      this.document.getElementById(id).style.color = "#e6e6e6"
    }
    i += 1;
  }



};

//Variable for letter
var typeLets = new String();
var rightLets_ind = 0;
var rightLets_count = 0;
var error_count = 0;

// eventListener for lisn key press
document.addEventListener("keypress", function writing(event) {

  // get key is press
  let key = event.key
  if (key != null) {
    startTimer();
    currentLet = key;
    if (typeLets.length == 0) {
      typeLets = currentLet;
    }
    else {
      typeLets = typeLets + currentLet;
    }

    if (currentLet == textarray1[rightLets_ind]) {
      // when current type letter and text array letter match
      rightLets_ind += 1;
      rightLets_count += 1;
      document.getElementById('lastKey_field').style.color = 'green';

    }
    else {
      // when current type letter and text array letter not match(error)
      error_count += 1;
      document.getElementById('lastKey_field').style.color = 'red';

    }
    // set Error count
    document.getElementById('errors_field').innerHTML = "<i class='fa fa-close'></i> " + error_count;

    // set Last Letter
    document.getElementById('lastKey_field').innerHTML = currentLet;

    // get and set World/min
    let lettersMin = getLettersMin(rightLets_count);
    if (lettersMin != null) {
      document.getElementById('lettersMin_firld').innerHTML = "<i class='fa fa-bolt'></i>" + Math.round(lettersMin);
    }

    // get and set errorRate
    let errorRate = getErrorRate(error_count, typeLets.length);
    document.getElementById('errorsRate_field').innerHTML = Math.round(errorRate) + "%";

    // set Text
    if(textarray1.length!=rightLets_ind){
      // set cruuent letter
     document.getElementById('current_let').innerHTML = textarray1[rightLets_ind] + "<br><i class='fa fa-sort-asc current-letter'></i>";
   
    let i = 1;
    let id;
    text_id = rightLets_ind + 1;
    // for next 16 letters
    while (i <= 16) {
      id = "next_let" + i;
      if (typeof (textarray1[text_id]) == "undefined") {
        document.getElementById(id).innerHTML = "";
      }
      else {
        if (textarray1[text_id] == " ") {
          document.getElementById(id).innerHTML = "&nbsp;";
        }
        else {
          document.getElementById(id).innerHTML = textarray1[text_id];
        }
      }
      text_id += 1;
      i += 1;
    }

    // for next_last 4 letters
    while (i <= 20) {
      id = "next_let" + i;
      if (typeof (textarray1[text_id]) == "undefined") {
        document.getElementById(id).innerHTML = "";
      }
      else {
        if (textarray1[text_id] == " ") {
          document.getElementById(id).innerHTML = "&nbsp;";
        }
        else {
          document.getElementById(id).innerHTML = textarray1[text_id];
          document.getElementById(id).style.color = "#8c8c8c"
        }
      }
      text_id += 1;
      i += 1;
    }

    // for next_last 2 letters
    while (i <= 22) {
      id = "next_let" + i;
      if (typeof (textarray1[text_id]) == "undefined") {
        document.getElementById(id).innerHTML = "";
      }
      else {
        if (textarray1[text_id] == " ") {
          document.getElementById(id).innerHTML = "&nbsp;";
        }
        else {
          document.getElementById(id).innerHTML = textarray1[text_id];
          document.getElementById(id).style.color = "#f2f2f2"
        }
      }
      text_id += 1;
      i += 1;
    }
  }
  else{
    stop();
    document.getElementById('current_let').innerHTML="";
    document.getElementById('Refresh_button').hidden=false;
  }
    


  }

});

function Refresh(){
  location.reload();
}