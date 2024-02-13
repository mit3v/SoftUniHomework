function extract(content) {

    let text = document.getElementById("content").textContent;

    const regex = /(?<=\().*?(?=\))/g;
    const matchesArr = text.match(regex);
    return matchesArr.join("; ");
}