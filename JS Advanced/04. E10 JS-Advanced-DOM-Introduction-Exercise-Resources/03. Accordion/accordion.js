function toggle() {

    let buttonText = document.querySelector(".button").textContent;
    let hiddenText = document.getElementById("extra");
    if (buttonText === "More") {
        document.querySelector(".button").textContent = "Less";
        hiddenText.style.display = "block";
    } else if (buttonText === "Less") {
        document.querySelector(".button").textContent = "More";
        hiddenText.style.display = "none";
    }


}