document.getElementById("enterName").style.display = "none";

const displayEnterName = () => {
    document.getElementById("enterName").style.display = "initial";
};


const printToDom = (divId, toPrint) => {

    document.getElementById(divId).innerHTML = toPrint;

}

const cardBuilder = () => {

    let domString = '';
    domString =
    `
    
    `;
    printToDom("card", domString);
}

document.getElementById("sortButton").addEventListener('click', cardBuilder);
