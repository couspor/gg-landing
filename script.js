var mndFileds = new Array("Last Name", "Phone", "Email");
var fldLangVal = new Array("Full Name", "Phone", "Email");
var name = "";
var email = "";

function checkMandatory3505252000006603078() {
  for (i = 0; i < mndFileds.length; i++) {
    var fieldObj =
      document.forms["WebToLeads3505252000006603078"][mndFileds[i]];
    if (fieldObj) {
      if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
        if (fieldObj.type == "file") {
          alert("Please select a file to upload.");
          fieldObj.focus();
          return false;
        }

        alert(fldLangVal[i] + " cannot be empty.");
        fieldObj.focus();
        return false;
      } else if (fieldObj.nodeName == "SELECT") {
        if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
          alert(fldLangVal[i] + " cannot be none.");
          fieldObj.focus();
          return false;
        }
      } else if (fieldObj.type == "checkbox") {
        if (fieldObj.checked == false) {
          alert("Please accept  " + fldLangVal[i]);
          fieldObj.focus();
          return false;
        }
      }
      try {
        if (fieldObj.name == "Last Name") {
          name = fieldObj.value;
        }
      } catch (e) {}
    }
  }

  trackVisitor();
  document.getElementById("formsubmit").disabled = true;
}

var displayedCaptcha;

function createCaptcha() {
  //clear the contents of captcha div first
  document.getElementById("dispcaptcha").innerHTML = "";
  var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];

  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array

    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }

  var canv = document.createElement("canvas");

  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;

  var ctx = canv.getContext("2d");

  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);

  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  displayedCaptcha = captcha.join("");

  document.getElementById("dispcaptcha").appendChild(canv); // adds the canvas to the body element
}

function validateCaptcha() {
  var inputCaptcha = document.getElementById("entCaptcha").value;
  var enteredName = document.getElementById("lname").value;
  var enteredPhnum = document.getElementById("pno").value;
  var enteredEmail = document.getElementById("eml").value;

  event.preventDefault();
  //debugger

  if (displayedCaptcha == inputCaptcha) {
    alert("Valid Captcha");

    if (enteredName == "") alert("Name field cannot be empty");
    else if (enteredPhnum == "") alert("Phone number field cannot be empty");
    else if (enteredPhnum.length < 10)
      alert("Please enter a 10 digit phone number");
    else if (enteredEmail == "") alert("Email field cannot be empty");
    else if (enteredEmail.length < 5)
      alert(
        "Email field cannot have less than 5 characters. Please enter a longer email"
      );
    else document.getElementById("frm1").submit();
  } else {
    alert("You entered a wrong captcha. Please try again");

    document.WebToLeads3505252000006603078.captcha.focus();
    createCaptcha();
  }
}
