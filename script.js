const btnE1 = document.querySelector(".btn")
const inputE1 = document.getElementById("input")
const copyIconE1 = document.querySelector(".fa-copy")
const alertcontainerE1 = document.querySelector(".alert-container")
const togglePassword = document.getElementById("togglePassword");

// generate password
btnE1.addEventListener("click", ()=>{
  createPassword();
});

// copy password
copyIconE1.addEventListener("click",()=>{
  copyPassword();
  if(inputE1.value){
    alertcontainerE1.classList.remove('active');
    setTimeout(()=>{
    alertcontainerE1.classList.add("active")
    }, 2000);
  }
})

// Toggle Password Visibility
togglePassword.addEventListener("click", () => {
  const type = inputE1.getAttribute("type") === "password" ? "text" : "password";
  inputE1.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye-slash");
});

function createPassword(){
  const chars = "01HFh8Jr95fqd3Z6pT1hLSD2mZnU5T6Xxyz!@#$%^&*()_-+={}[] ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const passwordLength  = 14;
  let password = "";

  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
   password += chars[randomNum];
    // console.log(randomNum, password);
  }
  inputE1.value = password;
  alertcontainerE1.innerText = password + "copied!";
}

function copyPassword(){
  inputE1.select();
  inputE1.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputE1.value);
  
}


