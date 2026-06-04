const knowMore = document.getElementById("knowmore");
const popup = document.getElementById("aboutPopup");
const closeBtn = document.querySelector(".close-btn");

knowMore.addEventListener("click", () => {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === popup){
        popup.style.display = "none";
    }
});