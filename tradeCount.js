/* DOMS */

//grab the body
const body = document.querySelector("body");

//grab the button
const modBtn = document.querySelector(".cardCountButton");
    modBtn.addEventListener("click", () => {
        body.appendChild(cardInputOverlay);
    });

//overlay
const cardInputOverlay = document.createElement("div");
    cardInputOverlay.setAttribute("class", "cIOverlay");

//instructions
const cardDir = document.createElement("span");
    cardDir.textContent = "Input your card list below. Use full card names (filler00, filler01 - NOT filler00/01) and separate them with commas, like you would on a trade form.";
    cardInputOverlay.appendChild(cardDir);

//textarea
const cardInput = document.createElement("textarea");
    cardInputOverlay.appendChild(cardInput);

//counting button
const cardBtn = document.createElement("input");
    cardBtn.setAttribute("type", "button");
    cardBtn.setAttribute("value", "Count!");
    cardBtn.addEventListener("click", () => {
        countCommas(cardInput.value);
    });
    cardInputOverlay.appendChild(cardBtn);

//number of cards
const countText = document.createElement("span");
    countText.setAttribute("id", "countText");
    countText.textContent = `0 cards`;
    cardInputOverlay.appendChild(countText);

//close button
const closeBtn = document.createElement("input");
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("value", "X");
    closeBtn.addEventListener("click", () => {
        cardInputOverlay.remove()
    });
    cardInputOverlay.appendChild(closeBtn);

/* FUNCTIONS */

//FUNC counts cards
function countCommas(e) {
    countText.textContent = `${e.split(",").length} cards`;
}






