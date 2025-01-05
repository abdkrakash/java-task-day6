document.getElementById("register-form").addEventListener("submit", (event) => {
    function formatDate() {
        const date = new Date();
        const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1 and pad with leading zero if needed
        const day = String(date.getDate()).padStart(2, '0'); // Pad day with leading zero if needed
    
        return `${year}/${month}/${day}`;
    }
    event.preventDefault();
  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("passwordError").innerTextr = "";
  document.getElementById("confirmPasswordError").innerTextr = "";

  const username = document.getElementById('username');
  if(username.value.trim()== "")
  {
    document.getElementById("usernameError").innerHTML =formatDate() + "required";
  }
});

