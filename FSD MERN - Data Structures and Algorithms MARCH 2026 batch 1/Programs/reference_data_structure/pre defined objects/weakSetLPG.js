let lpgRequest =new WeakSet();



function requestLPG(customer) {
    if (lpgRequest.has(customer)) {
        console.log(`${customer.name} has already requested LPG. in process`);
    } else {
        lpgRequest.add(customer);
        console.log(`${customer.name} has requested LPG.`);
    }
}
let customer1 = { name: 'Alice', id: 1};
let customer2 = { name: 'Bob', id: 2};
requestLPG(customer1); // Alice has requested LPG.
requestLPG(customer2); // Bob has requested LPG.
requestLPG(customer1); // Alice has already requested LPG.
console.log(lpgRequest.has(customer1)); // true, customer1 is still in the WeakSet
customer1 = null; // Remove reference to customer1
console.log(lpgRequest.has(customer1)); // false, customer1 has been garbage collected