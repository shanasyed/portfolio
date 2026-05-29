const form=document.getElementById("contactform");
const successmessage=document.getElementById("successmessage");
form.addEventListener("submit",function(){
    successmessage.innerText="message sent  successfully";
});