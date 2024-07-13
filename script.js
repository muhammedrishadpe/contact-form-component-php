
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.display  = "block";

    let xhr = new XMLHttpRequest(); // createing new xml object
    xhr.open("POST", "message.php", true); //  sending post req to message.php file
    xhr.onload = () => { // once ajax loaded
if(xhr.readyState == 4 && xhr.status == 200) { // if ajax response status is 200 & ready status is 4 means there is no any error
    let response = xhr.response; // storing ajax response in a response variable
    console.log(response);

}
} 
xhr.send();
}