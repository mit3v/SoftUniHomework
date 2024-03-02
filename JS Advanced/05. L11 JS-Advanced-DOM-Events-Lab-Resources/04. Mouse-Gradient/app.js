function attachGradientEvents() {

    let gradient = document.getElementById("gradient");
    gradient.addEventListener("mousemove", gradientMove);
    // gradient.addEventListener("mousemove", () => console.log("mouse moving from function"));
    gradient.addEventListener("mouseout", gradientOut);

    function gradientMove(event) {
        // console.log("mouse moving");
        const gradientBoxWidth = event.target.clientWidth;
        const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);
        const percentage = Math.trunc(positionOfTheMouse * 100);
        document.getElementById("result").textContent = percentage + "%";

    }

    function gradientOut() {
        // console.log("mouse is out");
        document.getElementById("result").textContent = "";
    }

}