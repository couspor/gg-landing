//Visitor Tracking
var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
  widgetcode:
    "35074a07bf996fd88e4ad7bf8493642fb081008ce54deb21426241464ccb8de2d075f5a1390755f53a6849185aa83b0e",
  values: {},
  ready: function () {},
};
var d = document;
s = d.createElement("script");
s.type = "text/javascript";
s.id = "zsiqscript";
s.defer = true;
s.src = "https://salesiq.zoho.com/widget";
t = d.getElementsByTagName("script")[0];
t.parentNode.insertBefore(s, t);
function trackVisitor() {
  try {
    if ($zoho) {
      var LDTuvidObj =
        document.forms["WebToLeads3505252000074458723"]["LDTuvid"];
      if (LDTuvidObj) {
        LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
      }
      var firstnameObj =
        document.forms["WebToLeads3505252000074458723"]["First Name"];
      if (firstnameObj) {
        name = firstnameObj.value + " " + name;
      }
      $zoho.salesiq.visitor.name(name);
      var emailObj = document.forms["WebToLeads3505252000074458723"]["Email"];
      if (emailObj) {
        email = emailObj.value;
        $zoho.salesiq.visitor.email(email);
      }
    }
  } catch (e) {}
}
// Mandatory Checks
function checkMandatory3505252000074458723() {
  var mndFileds = new Array("Last Name", "Phone");
  var fldLangVal = new Array("Full\x20Name", "Phone");
  for (i = 0; i < mndFileds.length; i++) {
    var fieldObj =
      document.forms["WebToLeads3505252000074458723"][mndFileds[i]];
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
  if (!validateEmail3505252000074458723()) {
    return false;
  }
  document
    .querySelector(".crmWebToEntityForm .formsubmit")
    .setAttribute("disabled", true);
}
//Validate Email
function validateEmail3505252000074458723() {
  var form = document.forms["WebToLeads3505252000074458723"];
  var emailFld = form.querySelectorAll("[ftype=email]");
  var i;
  for (i = 0; i < emailFld.length; i++) {
    var emailVal = emailFld[i].value;
    if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
      var atpos = emailVal.indexOf("@");
      var dotpos = emailVal.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert("Please enter a valid email address. ");
        emailFld[i].focus();
        return false;
      }
    }
  }
  return true;
}
