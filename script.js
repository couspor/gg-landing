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

function allowOnlyDigits(evt) {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;

  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  else return true;
}

function emptyInput() {
  var lname = document.getElementById("lname").value;
  if (lname == "") {
    alert("Please Check Your Inputs!");
    return null;
  }
}
