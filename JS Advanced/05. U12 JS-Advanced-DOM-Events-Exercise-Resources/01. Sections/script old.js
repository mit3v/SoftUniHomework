function create(words) {
   let divRef = document.getElementById("content");
   for (let word of words) {
      let divEl = document.createElement("div");
      let pEl = document.createElement("p");
      pEl.textContent = word;
      pEl.style.display = "none";
      divEl.appendChild(pEl);
      divRef.appendChild(divEl);
      divEl.addEventListener("click", clickHandler);
   }

   function clickHandler(event) {

      // event.target.childNodes[0].style.display = "";
      event.currentTarget.children[0].style.display = "block";
      // event.currentTarget.children[0].style.display = event.currentTarget.children[0].style.display == "block" ? "none" : "block"; // това ще включва и изключва надписа;
      // console.log(event.target.childNodes);
   }

}