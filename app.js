const form = document.querySelector('form');
const productInput = document.querySelector("#product");
const quantityInput = document.querySelector("#qty");
const List = document.querySelector("ul");
const button1 = document.querySelector("button");


form.addEventListener("submit", function(e){
    e.preventDefault();
    prdctName = productInput.value;
    qtty = quantityInput.value;
    // addListItem(prdctName, qtty);
    const newLi = document.createElement("li");
    newLi.innerText = `${qtty} - ${prdctName}`;
    List.append(newLi);
    // List.style.listStyleType = "none"; // Can be added on styleSheet.
    productInput.value = '';
    quantityInput.value = '';
    // e.preventDefault();

});

// const addListItem = function (pName, qty){
//     const newLi = document.createElement("li");
//     newLi.innerText = `${qty} ${pName}`;
//     List.append(newLi);
    
// }

    