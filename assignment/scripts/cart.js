console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

/* Create a global variable named `basket` and set it to an empty array. */
let basket = [];

/**Create a function called `addItem`. It should:
  - take an input parameter for a string `item`
  - add the new item to the global array `basket`. 
  - return `true` indicating the item was added */

function addItem(item){
    basket.push(item)
    return true;
}

//   - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

function listItems(basket){
    if (basket && basket.length>0){ //check if basket is valid, and has items
        for (item of basket){ //loop through items
            console.log(item);//display item
        }
    } else {
        console.log("Your basket is empty");
    }
    return "";
}

/**- Create a function called `empty`. It should:
  - reset the `basket` to an empty array
  - do not use `basket = []` to reset the array */

  function empty(basket){
    basket.length = 0
    return basket;
  }

console.log(`Let's go shopping! Currently there are ${basket.length} items in your basket.`)
console.log("Basket: ", basket)
console.log("Items In the basket:", listItems(basket));
console.log('adding apples. (expect true)', addItem("apples"));
console.log("Item count:", basket.length);
console.log("basket: ", basket);
console.log("These items are in your basket:", listItems(basket));
console.log('adding eggs', addItem("eggs"));
console.log("basket check:", basket);
console.log(`Now you have ${basket.length} items:`, listItems(basket));
console.log("Time to check out. Emptying basket.");
empty(basket);
console.log("In the basket:", listItems(basket));


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
