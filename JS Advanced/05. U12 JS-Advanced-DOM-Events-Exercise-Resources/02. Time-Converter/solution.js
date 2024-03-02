function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('[type="button"]'));

    for (let btn of buttons) {
        btn.addEventListener("click", convertHandler);
    }

    function convertHandler(event) {
        let input = event.currentTarget.parentElement.children[1];
        let value = Number(input.value);
        let unit = input.id // days, hours, miutes, seconds

        switch (unit) {
            case "days": propagateNewValue(value); break;
            case "hours": propagateNewValue(value / 24); break;
            case "minutes": propagateNewValue(value / 24 / 60); break;
            case "seconds": propagateNewValue(value / 24 / 60 / 60); break;
        }
    }

    function propagateNewValue(days) {
        let inputs = document.querySelectorAll('[type="text"]');
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 *60;
    }
}