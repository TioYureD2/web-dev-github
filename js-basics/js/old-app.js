// document.body.children[1].children[0].href = "https://youtube.com"

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://www.youtube.com";

anchorElement = document.querySelector("p a");
anchorElement.href = "https://www.academind.com";

let newAnchorElement = document.createElement("a");
let firstParagraph = document.querySelector("p");
firstParagraph.append(newAnchorElement);
newAnchorElement.href = "https://www.universal.org";
newAnchorElement.textContent = "This leads to where your money vanishes";

let mainHeader = document.getElementById("main-header");
mainHeader.remove();


firstParagraph.parentElement.append(firstParagraph)
firstParagraph.innerHTML = "I'm new, but <a href=\"https://www.universal.org\">here</a> is where your money vanishes"