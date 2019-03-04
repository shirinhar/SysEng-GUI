function field_focus(field, email) {
    if(field.value == email)
    {
      field.value = '';
    }
}

function field_blur(field, email) {
    if(field.value == '')
    {
      field.value = email;
    }
}

function login() {

}

function emergencyLogin() {
  var txt;
  if (confirm("Do you want to skip loging in?")) {
    // go to the list page
    window.location="../live_list/live_list.html";
  }
}
