var request = new XMLHttpRequest();

const apiCallOnButtonClick = () => {
  request.open("GET", "https://randomuser.me/api/?format=json", true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(this.response);
      var firstName = data.results[0].name.first;
      var lastName = data.results[0].name.last;
      var emailAdress = data.results[0].email;
      var contactNumber = data.results[0].phone;
      document.getElementById("firstName").value = firstName;
      document.getElementById("lastName").value = lastName;
      document.getElementById("emailAdress").value = emailAdress;
      document.getElementById("contactNumber").value = contactNumber;
    } else {
      console.log("error");
    }
  };
  request.send();
};
