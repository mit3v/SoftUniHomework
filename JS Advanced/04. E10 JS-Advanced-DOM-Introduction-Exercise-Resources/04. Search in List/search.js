function search() {

   let searchedText = document.getElementById("searchText").value;
   let nodeArr = Array.from(document.querySelectorAll("#towns li"));
   let matches = 0;
   for (el of nodeArr) {
      el.style.textDecoration = "";
      el.style.fontWeight = "";
      if (el.textContent.includes(searchedText)) {
         el.style.textDecoration = "underline";
         el.style.fontWeight = "bold";
         matches++;
      }
   }
   document.getElementById("result").textContent = `${matches} matches found`;
   matches = 0;
}


