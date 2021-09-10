
function updateCaseNumber(product, price, isIncrease) {
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if (isIncrease == true){
        productNumber =parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber=parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //Calculate Total
    calculateTotal();
    
}
//Case handler EventListner add
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case',59,true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case',59,false);
})

function getInputValue(product) {
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    //update subtotal
    document.getElementById('sub-total').innerText = subTotal;
     const taxTotal = subTotal / 10;
    document.getElementById('tax-amount').innerText = taxTotal;  //update TaxTotal
    const totalPrice = subTotal + taxTotal;
    document.getElementById('total-price').innerText = totalPrice; // Total amount
 
}

// Phone handler addEventLinstner
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone',1219,true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone',1219,false);
})

