
function valForm(txt){
	var bt = document.getElementById('btNext');
		
        if (txt.value.length<2) {
        	alert("Minimum Length 2 required for Name for Acivating Next Button");
        	bt.disabled = true;
         }
        else {
        	alert("Next Button Activated Successfully");
        	  bt.disabled =false;

        }
}
function valForm1(txt1){
	var bt = document.getElementById('btNext1');
        if (txt1.value.length<10) {
        	alert("Minimum Length 10 required for Achievements for Acivating Next Button");
        	bt.disabled = true;
         }
        else {

        	  bt.disabled =false;
        	  alert("Next Button Activated Successfully");
        }
}

function check(CheckBox) {
	alert("Minimum 1 Option Needs to be selected for Acivating Next Button");
	if(CheckBox.checked){
        alert("Next Button Activated Successfully");
        document.getElementById("btNext2").disabled = false;
    } else{
        
        document.getElementById("btNext2").disabled = true;
    }
}

function validatedate(inputText)
  {
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  // Match the date format through regular expression
  if(inputText.value.match(dateformat))
  {
  document.form1.text1.focus();
  //Test which seperator is used '/' or '-'
  var opera1 = inputText.value.split('/');
  var opera2 = inputText.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  // Extract the string into month, date and year
  if (lopera1>1)
  {
  var pdate = inputText.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputText.value.split('-');
  }
  var dd = parseInt(pdate[0]);
  var mm  = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Invalid date format!');
   return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Invalid date format!');
   return false;
  }
  }
  }
  else
  {
  alert("Invalid date format!");
  document.form1.text1.focus();
  
  }
  }