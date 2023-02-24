//login& sign in  
const wrapper = document.querySelector(".wrapper"),
signupHeader = document.querySelector(".signup header"),
loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
wrapper.classList.remove("active");
});
// end login 

// star dark mood

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '0.4s';
    }else{
        body.style.background = '#212121';
        body.style.color = '#86B817';
        body.style.transition = '0.4s';
    }
});

// end dark mood


// formvalidate
function formvalidate() {

    var FullName = document.getElementById("fullname").value;
    var Email = document.getElementById("email").value;
    var Pass = document.getElementById("pass").value;
    var error = document.getElementById("error");
    var text = ""
    var btm = document.getElementById("mom");
    if (FullName.length < 15) {

        text = "Please complete the registration"
        error.innerHTML=text
        return false;
        
    }
    else if (Email.indexOf("@") == -1 || Email.length < 12 ) {

        
    
        text = "Please complete the registration Email"
        error.innerHTML=text
        return false;

    }
    else if  (Pass.length < 12) {
        text = "Please complete the registration Pass"
        error.innerHTML=text
        return false;
    }
    else{
        alert("complet")
        return true;
    }



}
 

function sendMail(){


}

