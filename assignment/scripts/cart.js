console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

/* Create a global variable named `basket` and set it to an empty array. */
let basket = [];
const maxItems = 5; //stretch goal: using functions inside other functions

/**Create a function called `addItem`. It should:
  - take an input parameter for a string `item`
  - add the new item to the global array `basket`. 
  - return `true` indicating the item was added */

function addItem(item){
    if(isFull()){
        return false;
    } else {
    basket.push(item)
    return true;
    }
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

  function empty(){
    basket.splice(0,basket.length);
    return basket;
  }

//   ### Stretch Goals 
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

// __Using functions in other functions!__

// 1. Add a global `const` named `maxItems` and set it to 5.


// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
function isFull(){
    if(basket.length>=maxItems){
        return true;
    } 
    return false;
}

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

// __Using Array built-in functions!__

// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found

function removeItem(item){
    if(typeof item === "string"){
        let itemIndex = basket.indexOf(item);
        if (itemIndex === -1){
            return null;
        } else {
            basket.splice(itemIndex,1);
            return item;
        }
    }
}

console.log(`Let's go shopping! Currently there are ${basket.length} items in your basket.`)
console.log("Basket: ", basket)
console.log("Items In the basket:", listItems(basket));
console.log('adding apples. (expect true)', addItem("apples"));
console.log("Item count:", basket.length);
console.log("basket: ", basket);
console.log('These items are in your basket:')
listItems(basket);
console.log('adding eggs', addItem("eggs"));
console.log("basket check:", basket);
console.log(`Now you have ${basket.length} items:`)
listItems(basket);
console.log("We need a few more things: bread, milk, chicken, and cheese");
console.log("adding bread, expect true", addItem("bread"));
console.log("adding milk, expect true", addItem("milk"));
console.log("adding chicken, expect true", addItem("chicken"));
console.log("adding cheese, expect false", addItem("cheese"));
console.log("Total items: ", basket.length);
console.log("Items in your basket:");
listItems(basket);
console.log("on second thought, we don't need chicken (expect 'chicken')");
console.log("Returning the chicken:", removeItem("chicken"));
console.log("or the cheese (expect null)")
console.log("putting back cheese.", removeItem("cheese"));
console.log("Final check. Do we have everything?");
listItems(basket);
console.log("Time to check out. Emptying basket.");
empty();
console.log("In the basket:")


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
