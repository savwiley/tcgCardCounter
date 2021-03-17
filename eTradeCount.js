/* eTCG */

//grab the body & sidebar
const body = document.querySelector("body");
const sidebar = document.querySelector("#sidebar");

//grab list
const listGroup = document.querySelector(".list-group");

//add button to sidebar
const eModBtn = document.createElement("a");
    eModBtn.setAttribute("class", "list-group-item");
    eModBtn.textContent = "Card Counter";
    eModBtn.addEventListener("click", () => {
      sidebar.appendChild(cardSideCounter);
    });
    listGroup.appendChild(eModBtn);

//card counter
const cardSideCounter = document.createElement("div");
    cardSideCounter.style.display = "flex";
    cardSideCounter.style.flexDirection = "column";

//textarea
const cardInput = document.createElement("textarea");
    cardInput.setAttribute("placeholder", "card01, card02, card03");
    cardSideCounter.appendChild(cardInput);

//counting button
const cardBtn = document.createElement("input");
    cardBtn.setAttribute("type", "button");
    cardBtn.setAttribute("value", "Count!");
    cardBtn.addEventListener("click", () => {
        countCommas(cardInput.value);
    });
    cardSideCounter.appendChild(cardBtn);

//number of cards
const countText = document.createElement("span");
    countText.setAttribute("id", "countText");
    countText.textContent = `0 cards`;
    cardSideCounter.appendChild(countText);

//close button
const closeBtn = document.createElement("input");
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("value", "X");
    closeBtn.addEventListener("click", () => {
      cardSideCounter.remove()
    });
    cardSideCounter.appendChild(closeBtn);

/* FUNCTIONS */

//FUNC counts cards
function countCommas(e) {
    countText.textContent = `${e.split(",").length} cards`;
}