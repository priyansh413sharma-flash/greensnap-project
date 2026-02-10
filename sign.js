document.getElementById("signupForm").addEventListener("submit", function(e){
  e.preventDefault();

  // prevent double signup bonus
  if(localStorage.getItem("greensnapUser")){
    window.location.href = "hhtml";
    return;
  }

  const user = {
    name: document.querySelector('input[type="text"]').value,
    email: document.querySelector('input[type="email"]').value,
    gcoins: 20   // signup bonus
  };

  localStorage.setItem("greensnapUser", JSON.stringify(user));
  localStorage.setItem("loggedIn", "true");

  window.location.href = "index.html";
});
