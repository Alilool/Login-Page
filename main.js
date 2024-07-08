document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        verifyUser();
    }
});

function verifyUser() {
    const container = document.querySelector(".login-container")
    const display = document.getElementById("display")

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const validUsers = {
        "admin": "admin",
        "user1": "securepass1",
        "user2": "password456",
        "Ali": "Ali@2024",
        "Eileen": "Eileen@2024",
        "doaa": "doaa@2024"

    };

    if (validUsers.hasOwnProperty(username) && validUsers[username] === password) {
        container.innerHTML = "<h1>Welcome to our website</h1> <a href = './index.html'>Go back</a>"
    } else {
        display.innerHTML = "Wrong username or password"
        display.style.color = "red"
    }
}

let show_password = false

function showpassword() {
    let icon = document.getElementById("icon")
    let password = document.getElementById("password")

    if (show_password === false) {
        show_password = !show_password
        password.type = "text"
        icon.className = "fas fa-eye-slash"
    } else {
        show_password = !show_password
        password.type = "password"
        icon.className = "fas fa-eye"
    }
}