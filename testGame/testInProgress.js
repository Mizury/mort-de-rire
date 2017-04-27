importScripts(item.js)

var commonNames = ["Prison Shank","Carving Knife","Switch Blade","Steak Knife","Butchers knife","Ka-Bar"]
var strengthRoll = [1,1,1,1,2,2,2,3,3,4,5]
var weightRoll = [1,2,3]
var buyRoll = [2,3,4,4,4,5,5,5]
var sellRoll = [1,1,1,1,2,2,3]
var globalItems = []

function roll() {


     var randomObj = {}
        randomObj.Id = globalItems.length + 1;
        if (globalItems.indexOf(randomObj.Id) >= 0 ) {
            alert("Item already exists in inventory")
        } else if (globalItems.indexOf(randomObj.Id) >= 99 ){
            alert("Inventory Full")
        } else {
        randomObj.name = commonNames[Math.floor(Math.random() * commonNames.length)];
        randomObj.strength = performRoll(strengthRoll);
        randomObj.weightRoll = performRoll(weightRoll);
        randomObj.buyRoll = performRoll(buyRoll);
        randomObj.sellRoll = performRoll(sellRoll); 
    }
    globalItems.push(randomObj);
 }

 function performRoll(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
 }



function random() {
            var alphaChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            var randomObj = alphaChars[Math.floor(Math.random(7) * alphaChars.length)];
            console.log (randomObj)
        }
var randomObj = Math.random().toString(36).slice(2)


console.log(JSON.stringify(globalItems,true,2))