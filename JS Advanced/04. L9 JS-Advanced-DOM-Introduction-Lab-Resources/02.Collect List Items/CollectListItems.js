function extractText() {


    const list = document.getElementById("items"); // намираме елемента, който е в списъка;
    const itemsArr = Array.from(list.children); // изваждаме неговите деца, превърнати в масив, който съхраняваме в променлива;
    let result = [];
    for (let item of itemsArr) {   // това тук можем да го направим така: for (let item of list.children); но внимаваме;
        // console.log(item.textContent);
        result.push(item.textContent); // за всяко от децата четем textContent и го пушваме към резултата;
    }
    // console.log(result.join("\n"));

    const textArea1 = document.getElementById("result"); // намираме къде на страницата се намира елемента result;
    textArea1.value = result.join("\n"); // джойнваме масива от стрингове и го сетваме като value на textarea-та;
}

function ninjaSolution() {

    document.getElementById("result").value = [...document.getElementById("items").children].map(e => e.textContent).join("\n");
}