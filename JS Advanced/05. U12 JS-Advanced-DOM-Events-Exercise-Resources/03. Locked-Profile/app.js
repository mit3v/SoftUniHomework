function lockedProfile() {

    let buttonsRef = Array.from(document.querySelectorAll("button"));
    for (let b of buttonsRef) {
        b.addEventListener("click", myF);
    }

    function myF(event) {

        let infoRef = event.target.parentElement.querySelector("div");
        let currentRadioButton = event.target.parentElement.querySelector("input[type=radio]:checked");
        if (currentRadioButton.value === "unlock") {
            let buttonShow = event.target.parentElement.querySelector("button");
            if (buttonShow.textContent == "Show more") {
                infoRef.style.display = "block";
                buttonShow.textContent = "Hide it";
            } else {
                infoRef.style.display = "none";
                buttonShow.textContent = "Show more";
            }
        }

    }

}