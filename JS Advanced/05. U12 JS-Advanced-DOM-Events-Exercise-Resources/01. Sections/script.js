function create(words) {
   let divRef = document.getElementById("content");
   for (let word of words) {
      let divEl = document.createElement("div");
      let pEl = document.createElement("p");
      pEl.textContent = word;
      pEl.style.display = "none";
      divEl.appendChild(pEl);
      divRef.appendChild(divEl);
      divEl.addEventListener("click", show);

      function show() {
         pEl.style.display = "";
      }
   }
}