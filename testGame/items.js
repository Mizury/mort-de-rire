// haven't touched this in awhile need to tidy up - 4/8/17


//inventory
var inventory = []



//all items

//weapons

//Daggers.basic
var dagger1 = {name:"Prison Shank", strength:1, weight:1, buy:2, sell:1};
var dagger2 = {name:"Carving Knife", strength:2, weight:1, buy:5, sell:1};
var dagger3 = {name:"Switch Blade", strength:4, weight:1, buy:10, sell:2};
var dagger4 = {name:"Steak Knife", strength:5, weight:2, buy:12, sell:3};
var dagger5 = {name:"Butchers Knife", strength:7, weight:3, buy:15, sell:3};
var dagger6 = {name:"Ka-Bar", strength:10, weight:5, buy:25, sell:5};
//Daggers.uncommon
var dagger7 = {name:"Gut Ripper", strength:3, weight:1, buy:10, sell:1};
var dagger8 = {name:"Obliterator", strength:5, weight:2, buy:15, sell:2};
var dagger9 = {name:"Dagger of the Void", strength:10, weight:4, buy:25, sell:3};
var dagger10 = {name:"Guild Dagger", strength:12, weight:5, buy:35, sell:5};
//Dagger.rare
var dagger11 = {name:"Duskblade", strength:20, weight:5, buy:75, sell:10};
var dagger12 = {name:"Ouroboros Dagger", strength:25, weight:5, buy:99, sell:10};


//Swords
var sword1 = {name:"Toy Sword", strength:2, weight:3, buy:3, sell:1};
var sword2 = {name:"Wood Sword", strength:3, weight:4, buy:4, sell:1};

/*
//testing
var dagger = {
    'prisonShank' : {name:"Prison Shank", strength:1, weight:1, buy:2, sell:1},
    'carvingKnife' : {name:"Carving Knife", strength:2, weight:1, buy:5, sell:1},
    'switchBlade' : {name:"Switch Blade", strength:4, weight:1, buy:10, sell:2}
}
*/


//armor

//Chest
var chest1 = {name:"Wool Shirt", defense:1, weight:1, buy:2, sell:1};

//Helm
var helm1 = {name:"Baseball Cap", defense:1, weight:1, buy:2, sell:1};



//arrays
var swords = [sword1,sword2]
var commonDaggers = [dagger1,dagger2,dagger3,dagger4,dagger5,dagger6] //allows us to weigh rng later
var uncommonDaggers = [dagger7,dagger8,dagger9,dagger10] //breaking out the daggers could probably be done easier with another attribute might try that later.
var rareDaggers = [dagger11,dagger12]
var daggers = [commonDaggers,uncommonDaggers,rareDaggers] //yeah idk
var daggerLength =commonDaggers.length+uncommonDaggers.length+rareDaggers.length //turns out you can't get the accurate length if I just used daggers.
var weapons = _.concat(uncommonDaggers, commonDaggers, rareDaggers);
var armor = [chest1,helm1];
var allItems = weapons.concat(armor);
var x = weapons();

//maths
daggers[Math.floor(Math.random() * daggerLength)].name;

//function roll
function roll() {
    var roll = Math.floor(Math.random() * 99) + 1;
    if (roll <= 75) {
        roll
            if (roll <= 50 ) {
        var newItem = commonDaggers[Math.floor(Math.random() * commonDaggers.length)];
        console.log (newItem.name);
        if (weapons.indexOf(newItem.name) >= 0) {
            player.weapons.mainHand = newItem;
        }
            }
            else {
                var newItem = armor[Math.floor(Math.random() * armor.length)];
                console.log (newItem.name);
                if (newItem = chest1) {
                player.armor.chest = newItem;
                } else {
                    player.armor.helm = newItem
                }
            }
        }
    else if (roll > 75 && roll <= 95) {
        var newItem = uncommonDaggers[Math.floor(Math.random() * uncommonDaggers.length)].name;
        console.log (newItem);
    }
    else {
        var newItem = rareDaggers[Math.floor(Math.random() * rareDaggers.length)].name;
        console.log (newItem);
    }
};
