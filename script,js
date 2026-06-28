// ======================
// FORM VALIDATION
// ======================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill all fields";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@")) {

        formMessage.textContent = "Please enter a valid email";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
});


// ======================
// DARK MODE
// ======================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}


// ======================
// FETCH API
// ======================

const loadData = document.getElementById("loadData");

loadData.addEventListener("click", () => {

    const loading = document.getElementById("loading");
    const apiData = document.getElementById("apiData");

    // Show loading spinner
    loading.innerHTML = "<p class='spinner'>Loading...</p>";
    apiData.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts/1")

        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            return response.json();
        })

        .then(data => {

            loading.textContent = "";

            apiData.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;
        })

        .catch(error => {

            loading.textContent = "";

            apiData.innerHTML = `
                <p style="color:red;">
                    Failed to load data.
                </p>
            `;

            console.error(error);
        });
});