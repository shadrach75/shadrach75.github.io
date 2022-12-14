const form = document.querySelector("form"),
statusTxt =form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //Preventing form from submitting
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml object
    
    xhr.open("POST", "index.php", true); //sending post request to message.php
    
    xhr.onload =()=>{ //once ajax loaded

         //if ajax response status is 200 & read status is 4 means there is no error
    if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.response; //Storing ajax response in a response variable 
        //Text changes to red if email is not valid
        if (response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address") || response.indexOf("Sorry failed to send your")){
            statusTxt.style.color = "red";
        }else{
            form.reset();
            setTimeout(()=>{
                statusTxt.style.display = "none";
            }, 3000); //hide the statusTxt after 3secs
        }

        statusTxt.innerText = response;
    }
}
let formData = new FormData(form); //creating new FormData obj. This obj is used to send form data
    xhr.send(formData);//sending form data
} 
