/* eTCG */

//grab the sidebar
const sidebar = document.querySelector("#sidebar");

//grab list
const listGroup = document.querySelector(".list-group");

//add button to sidebar
const iconBtn = document.createElement("i");
    iconBtn.setAttribute("class", "fa fa-terminal");
    iconBtn.textContent = "\r\n Card Counter";

let clickSwitch = "off";

const eModBtn = document.createElement("a");
    eModBtn.setAttribute("class", "list-group-item");
    eModBtn.style.cursor = "pointer";
        eModBtn.appendChild(iconBtn);
    eModBtn.addEventListener("click", () => {
        if (clickSwitch === "off") {
            sidebar.appendChild(cardSideCounter);
            clickSwitch = "on";
        } else if (clickSwitch === "on") {
            cardSideCounter.remove();
            clickSwitch = "off";
        }
    });
    listGroup.appendChild(eModBtn);

//card counter
const cardSideCounter = document.createElement("div");
    cardSideCounter.style.display = "flex";
    cardSideCounter.style.flexDirection = "column";

//textarea
const cardInput = document.createElement("textarea");
    cardInput.setAttribute("placeholder", "card01, card02, card03");
    cardInput.style.borderColor = "#666";
    cardInput.style.borderRadius = "2px";
    cardInput.style.outline = "none";
    cardSideCounter.appendChild(cardInput);

//counting button
const cardBtn = document.createElement("input");
    cardBtn.setAttribute("type", "button");
    cardBtn.setAttribute("value", "Count!");
    cardBtn.style.border = "1px solid #666";
    cardBtn.style.background = "#f5f5f5";
    cardBtn.style.borderRadius = "2px";
    cardBtn.style.boxShadow = "1px 1px 1px rgb(0 0 0 / 20%)";
    cardBtn.style.outline = "none";
    cardBtn.style.margin = "3px 0";
    cardBtn.addEventListener("click", () => {
        const val = cardInput.value;
        countText.textContent = `${val.split(",").length} cards`;
    });
    cardSideCounter.appendChild(cardBtn);

//number of cards
const countText = document.createElement("span");
    countText.setAttribute("id", "countText");
    countText.style.textAlign = "center";
    countText.style.fontSize = "20px";
    countText.textContent = "0 cards";
    cardSideCounter.appendChild(countText);
