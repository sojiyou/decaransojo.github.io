const themeBtn = document.getElementById("themeBtn");
const headerLinks = document.getElementsByClassName("headerLinks");
const container = document.getElementById("container");

themeBtn.textContent = "☀️";
themeBtn.style.backgroundColor = "rgb(235,235,235)";

themeBtn.addEventListener("click", () => {
    /* If the background is dark */
    if (themeBtn.textContent === "☀️") {
        themeBtn.style.backgroundColor = "rgb(70,70,70)";

        document.body.style.backgroundColor = "rgb(250, 249, 246)"; // change the background color to light
        document.body.style.color = "rgb(28, 28, 28)"; // change the color to white
        container.style.backgroundColor = "rgb(235, 235, 235)"; // change the background color of container to light

        /* for changing the color of link inside the header */
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(28, 28, 28)";
        }

        themeBtn.textContent = "🌙";
        /* If the background is light */
    } else if (themeBtn.textContent === "🌙") {
        themeBtn.style.backgroundColor = "rgb(235,235,235)";

        document.body.style.backgroundColor = "rgb(28, 28, 28)"; // change the background color to dark
        document.body.style.color = "rgb(255, 237, 204)"; // change the color to white
        container.style.backgroundColor = "rgb(38, 38, 38)"; // change the background color of container to dark
        
        /* for changing the color of link inside the header */
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(255, 237, 204)";
        }

        themeBtn.textContent = "☀️";
    };
})

