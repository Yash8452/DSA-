/*
Imagine you're in charge of an inventory system at a high-end jewelry store. 
The provided code initializes an inventory with unique jewelry items and checks whether a "diamond necklace" is already cataloged. 
Run the code to see how the Set handles the uniqueness of items in the inventory!
*/

// set only accepts the unique values

const inventory = new Set(); 

inventory.add("diamond necklace");
inventory.add("gold watch");
inventory.add("pearl earrings");
inventory.add("diamond necklace"); //this wont get add

console.log(inventory);
console.log(inventory.size); 
console.log(inventory.has("diamond necklace"))
