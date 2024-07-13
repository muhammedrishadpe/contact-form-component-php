const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  let xhr = new XMLHttpRequest(); // createing new xml object
  xhr.open("POST", "message.php", true); //  sending post req to message.php file
  xhr.onload = () => {
    // once ajax loaded
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response; 
      if (
        response.indexOf("Email and password field is required!") != -1 ||
        response.indexOf("Enter a valid email address!") ||
        response.indexOf("Sorry, failed to send your message!")
      ) {
        statusTxt.innerHTML = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerHTML = response;
    }
  };
  let formData = new FormData(form); 
  xhr.send(formData); //sending form data
};
