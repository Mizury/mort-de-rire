//import
import _ from 'C:/Program Files/nodejs/node_modules/lodash';

// these variable help our RNG function by providing a set number we can dictate for starter level items and also provide a true RNG experience. 
var commonNames = ["Prison Shank","Carving Knife","Switch Blade","Steak Knife","Butchers knife","Ka-Bar"]
var strengthRoll = [1,1,1,1,2,2,2,3,3,4,5]
var weightRoll = [1,2,3]
var buyRoll = [2,3,4,4,4,5,5,5]
var sellRoll = [1,1,1,1,2,2,3]
var globalItems = []

// makes our math on the RNG roll one function
function performRoll(arr) { 
    return arr[Math.floor(Math.random() * arr.length)];
 }

//function to roll rng and create a starting item common dagger
function roll() {
     var randomObj = {}
        randomObj.Id = globalItems.length + 1;
        if (globalItems.indexOf(randomObj.Id) >= 0 ) { // this should hopefully never happen
            alert("Item already exists in Inventory")
        } else if (globalItems.indexOf(randomObj.Id) >= 99 ){ //locks in our inventory (array) at 99 items. 
            alert("Inventory Full")
        } else {
        randomObj.name = commonNames[Math.floor(Math.random() * commonNames.length)];
        randomObj.strength = performRoll(strengthRoll);
        randomObj.weight = performRoll(weightRoll);
        randomObj.buy = performRoll(buyRoll);
        randomObj.sell = performRoll(sellRoll);
        randomObj.type = "weapon" // need to move this up and do some statements off this for armor or weapon.
    }
    globalItems.push(randomObj); //pushes the new object into the inventory array. 
 }

//console.log(JSON.stringify(globalItems,true,2)) //stringify's our inventory array (need to change that name to match)

//working on transfer
function trasnferIndex(arr, arrTwo){
    var arrTwo = _.slice(arr, [])
}

//can put arguments into slice indexes
// _.slice(player.items, [_.findIndex(player.items, ['Id', 4])], [_.findIndex(player.items, ['Id', 4]) +1]);

document.onkeypress = function(i) {
    i = i || window.event;
    if (i.keycode == 105) {
     roll()
    }
}

var display = _.orderBy(globalItems, ['name', 'buy'], ['asc', 'desc']);
