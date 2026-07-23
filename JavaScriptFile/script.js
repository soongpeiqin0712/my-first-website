// Register Form Validation
document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var fullname = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();

    if (fullname === "" || email === "") {
        alert("Please fill in all fields.");
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});

// Dark Mode
document.getElementById("themeToggle").addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        this.innerHTML = "☀️";
    } else {
        this.innerHTML = "🌙";
    }
});