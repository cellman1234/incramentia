window.onload = Load()
function Save(){
		if(typeof(Storage) !== "undefined"){
		//Currency variables
		localStorage.setItem("wood",wood);
    }
}
function Load() {
if(typeof(Storage) !== "undefined"){
		//Currency variables
		wood = localStorage.getItem("wood",wood);
    }
}
var stuff = 0;
var pick_stamina = 0;
var chestinfo = 0;
var space = 100
var level = 0;
var XP = 0;
var wood = 0;
var leaves = 0;
var glass = 0;
var bottles = 0;
var soil = 0;
var roots = 0;
var ruby = 0;
var diamond = 0;
var tech = 0;
var specter = 0;
var emerald = 0;
var sapphire = 0;
var POLsapphire = 0;
var amber = 0;
var POLamber = 0;
var topaz = 0;
var POLtopaz = 0;
var amethyst = 0;
var POLamethyst = 0;
var fireore = 0;
var SpecterTop = 0;
var goldore = 0;
var ironore = 0;
var magicore = 0;
var magicdust = 0;
var coaldust = 0;
var golddust = 0;
var irondust = 0;
var light = 0;
var POLemerald = 0;
var POLruby = 0;
var CONlight = 0;
var POLdiamond = 0;
var magicbones = 0;
var stone = 0;
var iron = 0;
var gold = 0;
var magic =0;
var coal = 0;
var fire = 0;
var bones = 0;
var pickQuality = .5;
var axeQuality = 1;
var swordQuality = 1;
var enemyHp = 20;
var enemyDmg = 5;
var yourHp = 100;
var cookie = document.cookie;

function directions() {
    alert("Click on the buttons at the top of this game to get all of your materials. In the crafting section, click on the images to buy the tools, weppons, and armor. Mining stone gives you fire ore, coal, iron ore, and stone. Chopping Wood gives you wood and leaves. Digging gives you soil and sometimes a treasure chest!")
}
function getWood() {
    wood = wood + axeQuality
    if(Math.random()<=0.05) {
        leaves = leaves + 1
    }
    addXP()
    refreshInv()
}; //gathering

function getStone() {
    stone = stone + pickQuality
    if(Math.random()<=0.1) {
     ironore = ironore + 1
    }
    if(Math.random()<=0.2) {
     coal = coal + 1
    }
    if(Math.random()<=0.009) {
    goldore = goldore + 1
    }
    if(Math.random()<=0.006)
    fireore = fireore + 1
    addXP()
    if(Math.random()<=0.0001) {
    emerald = emerald + 1
    }
    if(Math.random()<=0.0001) {
    diamond = diamond + 1
    }
    if(Math.random()<=0.0001) {
    ruby = ruby + 1
    }
    if(Math.random()<=0.0001) {
    magicore = magicore + 1
    }
    refreshInv()
};
function dig() {
    soil = soil + pickQuality*2
    addXP()
    if(Math.random()<=0.1) {
        roots++
    }
    if(Math.random()<=.001) {
    alert("YOU FOUND A TREASURE CHEST!!!")
    XP = XP + 1000
    }
    refreshInv()
}
function attack() {
    addXP()
    refreshInv()
    document.getElementById('log').innerHTML = ("-You found a zombie!  It has " + enemyHp + " health!")
    enemyHp = enemyHp - swordQuality
    if (enemyHp <= 0) {
    enemyHp = 20
    bones = bones + 2
    if(Math.random()<=.05) {
        magic = magic + Math.round(Math.random(2))
    }
    if(Math.random()<=.05) {
        tech = tech + Math.round(Math.random(2))
    }
    refreshInv()
    document.getElementById('log').innerHTML = ("-You beat the zombie!")
    enemyHp = Math.round(Math.random() * 100)
    }
    else {
    yourHp = yourHp - enemyDmg
    refreshInv()
    }
    if (yourHp <= 0) {
    resetall()
    alert("You died!")
    }
};
//crafting
function chest() {
 if(wood>=10) {
     wood = wood - 10
     space = space + 50
     chestinfo = chestinfo + 1
     refreshInv()
 }
 else {
    alert("Not enough materials!  You need 10 wood to make a chest!")
 }
}
function woodAxe() {
    if (wood >= 15) {
        wood = wood - 15
        axeQuality = 2
        addXP()
    }
    else {
        alert("Not enough wood!  You need 15 wood for a wooden pickaxe!")   
    }
    refreshInv()
};
function stoneAxe() {
    if (stone >= 30) {
        stone = stone - 30
        axeQuality = 4
        addXP()
    }
    else {
        alert("Not enough stone!  You need 30 stone for a stone pickaxe!")   
    }
    refreshInv()
};
function ironAxe() {
 if(iron >= 25 && coal >= 2) {
    iron = iron - 25
    coal = coal - 2
    axeQuality = 7
 }
 else {
    alert("Not enough materials!  You need 25 iron and some coal to make an iron axe!")
 }
 refreshInv()
};
function goldAxe() {
 if(gold >= 20 && coal >= 5) {
    gold = gold - 25
    coal = coal - 5
    axeQuality = 10
 }
 else {
    alert("Not enough materials!  You need 20 gold and 5 coal to make an gold axe!")
 }
 refreshInv()
};
function fireAxe() {
 if(gold >= 10 && coal >= 5 && fire >= 10) {
    gold = gold - 10
    coal = coal - 5
    fire = fire - 10
    axeQuality = 14
 }
 else {
    alert("Not enough materials!  You need 10 gold, 5 coal, and 10 fire to make an gold axe!")
 }
 refreshInv()
};

function woodPick() {
    if (wood >= 10) {
        wood = wood - 10
        pickQuality = 1
        pick_stamina = 150
        addXP()
    }
    else {
        alert("Not enough wood!  You need 10 wood for a wooden pickaxe!")   
    }
    refreshInv()
};
function stonePick() {
    if (stone >= 30) {
        stone = stone - 30
        pickQuality = 3
        pick_stamina = 300
        addXP()
    }
    else {
        alert("Not enough stone!  You need 30 stone for a stone pickaxe!")   
    }
    refreshInv()
};
function ironPick() {
 if(iron>=25 && coal>=2) {
    iron = iron - 25
    coal = coal - 2
    pickQuality = 7
    pick_stamina = 600
 }
 else {
    alert("Not enough materials!  You need 25 iron and some coal to make an iron pickaxe!")
 }
 refreshInv()
};
function goldPick() {
 if(gold>=20 && coal>=10) {
    gold = gold - 20
    coal = coal - 10
    pickQuality = 10
    pick_stamina = 1000
 }
 else {
    alert("Not enough materials!  You need 20 gold and 10 coal to make an gold pickaxe!")
 }
 refreshInv()
};
function firePick() {
 if(iron>=20 && coal>=10 && fire>=10) {
    iron = iron - 20
    coal = coal - 10
    fire = fire - 10
    pickQuality = 15
    pick_stamina = 3000
 }
 else {
    alert("Not enough materials!  You need 20 iron, 10 coal, and 10 fire to make an Fire pickaxe!")
 }
 refreshInv()
};
function woodSword() {
    if (wood >= 15) {
        wood = wood - 15
        swordQuality = 2
        addXP()
    }
    else {
        alert("Not enough wood!  You need 15 wood for a wooden sword!")   
    }
    refreshInv()
};
function stoneSword() {
    if (stone >= 30) {
        stone = stone - 30
        swordQuality = 4
        addXP()
    }
    else {
        alert("Not enough stone!  You need 30 stone for a stone sword!")   
    }
    refreshInv()
};
function ironSword() {
    if (iron >= 30 && coal>= 2) {
        iron = iron - 30
        coal = coal - 2
        swordQuality = 7
        addXP()
    }
    else {
        alert("Not enough materials!  You need 30 iron and some coal for an iron sword!")   
    }
    refreshInv()
};
function goldSword() {
    if (gold >= 30 && coal>= 10) {
        gold = gold - 30
        coal = coal - 10
        swordQuality = 10
        addXP()
    }
    else {
        alert("Not enough materials!  You need 30 gold and 10 coal for an gold sword!")   
    }
    refreshInv()
};
function SunSword() {
    if (gold >= 30 && coal>= 10 && iron>= 15) {
        gold = gold - 30
        coal = coal - 10
        iron = iron - 15
        swordQuality = 25
        addXP()
    }
    else {
        alert("Not enough materials!  You need 30 gold, 10 coal, and 15 iron for a SunBlade!")   
    }
    refreshInv()
};
function FireSword() {
    if (gold >= 40 && coal>= 20 && iron>= 30 && fire>= 20) {
        gold = gold - 40
        coal = coal - 20
        iron = iron - 30
        level = level - 10
        fire = fire - 20
        swordQuality = 50
        addXP()
    }
    else {
        alert("Not enough materials!  You need 40 gold, 20 coal, and 30 iron, and 20 fire for a FireSword!")   
    }
    refreshInv()
};

function ironArmor() {
    if (iron >= 30 && coal >= 2) {
        iron = iron - 30
        coal = coal - 2
        yourHp = 100
        enemyDmg = 0.5
        addXP()
    }
    else {
        alert("Not enough materials!  You need 30 iron and some coal for iron armor!")   
    }
    refreshInv()
};
function camoArmor() {
    if (leaves >= 100) {
        leaves = leaves - 100
        enemyDmg = 1
        addXP()
    }
    else {
        alert("Not enough leaves!  You need 100 leaves for camo armor!")   
    }
    refreshInv()
};
function goldArmor() {
    if (gold >= 40 && coal>=2) {
        gold = gold - 40
        coal = coal - 10
        yourHp = 100
        enemyDmg = 0.25
        addXP()
    }
    else {
        alert("Not enough materials!  You need 40 gold and 10 coal for gold armor!")   
    }
    refreshInv()
};
function fireArmor() {
    if (gold >= 20 && coal>=10 && fire>=20) {
        gold = gold - 20
        coal = coal - 10
        fire = fire - 20
        yourHp = 100
        enemyDmg = 0.09
        addXP()
    }
    else {
        alert("Not enough materials!  You need 20 gold, 10 coal, and 20 fire for gold armor!")   
    }
    refreshInv()
};
function IronOre() {
    if(ironore >= 1 && coal>=2) {
        ironore = ironore - 1
        coal = coal - 1
        iron = iron + 1
    }
    else{
        alert("Not enough materials! You need 1 IronOre and 2 coal to get 1 iron")
    }
    refreshInv()
};
function GoldOre() {
    if(goldore >= 1 && coal>=2) {
        goldore = goldore - 1
        coal = coal - 1
        gold = gold + 1
    }
    else{
        alert("Not enough materials! You need 1 GoldOre and 2 coal to get 1 gold")
    }
    refreshInv()
};
function FireOre() {
    if (fireore >= 1 && coal>=2) {
        fireore = fireore - 1
        coal = coal - 2
        fire = fire + 1
    }
    else {
        alert("Not enough materials! You need 1 FireOre and 2 coal to get 1 fire!")   
    }
    refreshInv()
};
function MagicOre() {
    if (magicore >= 1 && coal>=2) {
        magicore = magicore - 1
        coal = coal - 2
        magic = magic + 1
    }
    else {
        alert("Not enough materials! You need 1 MagicOre and 2 coal to get magic!")   
    }
    refreshInv()
};
function PolishedEmerald() {
    if (emerald>= 1 && coal>=2) {
        magic = magic - 1
        coal = coal - 2
        POLemerald = POLemerald + 1
    }
    else {
        alert("Not enough materials! You need 1 Magic and 1 emrald to get 1 Polished Emerald!")   
    }
    refreshInv()
};
function PolishedSapphire() {
    if (sapphire>= 1 && coal>=2) {
        magic = magic - 1
        coal = coal - 2
        POLsapphire = POLsapphire + 1
    }
    else {
        alert("Not enough materials! You need 1 Magic, 1 sapphire, to get 1 Polished Sapphire!")   
    }
    refreshInv()
};
function PolishedTopaz() {
    if (topaz>= 1 && coal>=2) {
        magic = magic - 1
        coal = coal - 2
        POLtopaz = POLtopaz + 1
    }
    else {
        alert("Not enough materials! You need 1 Magic, 1 topaz, to get 1 Polished topaz!")   
    }
    refreshInv()
};
function PolishedAmethyst() {
    if (amethyst>= 1 && coal>=2) {
        magic = magic - 1
        coal = coal - 2
        POLamethyst = POLamethyst + 1
    }
    else {
        alert("Not enough materials! You need 1 Magic, 1 amethyst, to get 1 Polished Amethyst!")   
    }
    refreshInv()
};
function PolishedDiamond() {
    if (diamond>= 1 && coal>=2) {
        magic = magic - 1
        coal = coal - 2
        POLdiamond = POLdiamond + 1
    }
    else {
        alert("Not enough materials! You need 1 Magic, 1 diamond, to get 1 Polished Diamond!")   
    }
    refreshInv()
};
function PolishedAmber() {
    if (amber>= 1 && coal>=2) {
        magic = magic - 1
        coal = coal - 2
        POLamber = POLamber + 1
    }
    else {
        alert("Not enough materials! You need 1 Magic, 1 amber, to get 1 Polished Amber!")   
    }
    refreshInv()
};
//powders
function Light() {
    if (coal>=2) {
        coal = coal - 2
        light = light + 1
    }
    else {
        alert("Not enough materials! You need  and 2 coal to get 1 Light!")   
    }
    refreshInv()
};
function CONLight() {
    if (light>=1 && coal>=2) {
        coal = coal - 2
        light = light - 1
        CONlight = CONlight + 1
    }
    else {
        alert("Not enough materials! You need  1 light and 2 coal to get 1 Concentrated Light!")   
    }
    refreshInv()
};
function GoldDust() {
    if (gold>=1 && coal>=2) {
        golddust = golddust + 4
        coal = coal - 2
        gold = gold - 1
    }
    else {
        alert("Not enough materials! You need 1 gold and 2 coal to get 4 gold dust!")   
    }
    refreshInv()
};
function IronDust() {
    if (iron>=1 && coal>=2) {
        irondust = irondust + 4
        coal = coal - 2
        iron = iron - 1
    }
    else {
        alert("Not enough materials! You need 1 iron and 2 coal to get 4 iron dust!")   
    }
    refreshInv()
};
function MagicDust() {
    if (magic>=1 && coal>=2) {
        magicdust = magicdust + 4
        coal = coal - 2
        magic = magic - 1
    }
    else {
        alert("Not enough materials! You need 1 Magic and 2 coal to get 4 magic dust!")   
    }
    refreshInv()
};
function CoalDust() {
    if (coal>=1) {
        coaldust = coaldust + 4
        coal = coal - 1
    }
    else {
        alert("Not enough materials! You need 1 coal to get 4 coal dust!")   
    }
    refreshInv()
};
//magic
function MagicBones() {
    if (bones>=1) {
        coaldust = coaldust - 4
        magicdust = magicdust - 4
        magicbones = magicbones + 2
        bones = bones - 1
    }
    else {
        alert("Not enough materials! You need 4 coal dust, 4 magic dust, and 1 bone to get 2 magic bones!")   
    }
    refreshInv()
};
function EmraldStaff() {
    if (XP>=500000 && magicbones>= 4 && bones>=4 && magicdust>=4) {
        magicbones = magicbones - 4
        magicdust = magicdust - 4
        XP = XP - 500000
        bones = bones - 4
        yourHp = 200;
        yourDmg = yourDmg + 30
    }
    else {
        alert("Not enough materials! You need 500,000 XP, 4 magic bones, 4 magic dust, and 4 bonee to get an Emrald Staff!")   
    }
    refreshInv()
};
function DiamondStaff() {
    if (XP>=1000000 && magicbones>= 4 && bones>=4 && magicdust>=4) {
        magicbones = magicbones - 4
        magicdust = magicdust - 4
        XP = XP - 1000000
        bones = bones - 4
        yourHp = 225;
        yourDmg = yourDmg + 35
    }
    else {
        alert("Not enough materials! You need 1,000,000 XP, 4 magic bones, 4 magic dust, and 4 bones to get a Diamond Staff!")   
    }
    refreshInv()
};
function Zapinator() {
    if (XP>=1000 && magicbones>= 4 && bones>=4 && magicdust>=4 && fire>=10) {
        magicbones = magicbones - 4
        magicdust = magicdust - 4
        XP = XP - 1000
        bones = bones - 4
        yourDmg = yourDmg + 40
    }
    else {
        alert("Not enough materials! You need 100,000,000 XP, 4 magic bones, 4 magic dust, and 4 bones, and 10 fire to get a Zapinator!")   
    }
    refreshInv()
};
function RubyStaff() {
    if (XP>=100000000 && magicbones>= 4 && bones>=4 && magicdust>=4) {
        magicbones = magicbones - 4
        magicdust = magicdust - 4
        XP = XP - 100000000
        bones = bones - 4
        yourHp = 250;
        yourDmg = yourDmg + 40
    }
    else {
        alert("Not enough materials! You need 100,000,000 XP, 4 magic bones, 4 magic dust, and 4 bones to get a Ruby Staff!")   
    }
    refreshInv()
};
function SpecterTop() {
    if (XP>=100 && diamond>=4 && ruby>=4 && magicdust>=4 && emerald>=4) {
        magicdust = magicdust - 4
        XP = XP - 100
        ruby = ruby - 4
        diamond = diamond - 4
        emerald = emerald - 4
        SpecterTop = 1
        alert("You hear faint moanings in the distance as you take the Spectre Top.")
    }
    else {
        alert("Not enough materials! You need 100 XP, 4 diamonds, 4 emeralds, 4 rubys, and 4 magic dust to get a Specter Top!")   
    }
    refreshInv()
};
function SpecterStaff() {
    if (XP>=10000000 && magicbones>= 4 && SpecterTop>=4 && magicdust>=4) {
        magicbones = magicbones - 4
        magicdust = magicdust - 4
        XP = XP - 100000000
        SpecterTop = SpecterTop - 1
        yourHp = 300;
        yourDmg = yourDmg + 55
    }
    else {
        alert("Not enough materials! You need 100,000,000 XP, 4 magic bones, 4 magic dust, and 1 Specter Top to get a SpecterStaff!")   
    }
    refreshInv()
};
function strength_potion() {
    if(bottle>= 1 && roots>= 2) {
        strength_potion = strength_potion + 1
        bottle = bottle - 1
        roots = roots - 2
        
        
    }else {
    alert("Not enough materials!  You need 1 bottle and 2 roots to make a Strength Potion!")
 }
 refreshInv()  
};

function effciency_potion() {
    if(bottle>= 1 && roots>= 2 && energy>= 2) {
        efficiency_potion = efficiency_potion + 1
        bottle = bottle - 1
        energy = energy - 2
        roots = roots - 2
        
        
    }else {
    alert("Not enough materials!  You need 1 bottle and 2 roots to make a Effciency Potion!")
 }
 refreshInv()  
};
//abilities
function brew(potion) {
 if(potion = "HP") {
    if(roots >= 3 && bottles >= 1) {
    yourHp++
    bottles++
    }
 }
}
function treeScorch() {
    if(XP >= 100) {
        XP = XP - 100
        wood = wood + 50
    }
    else {
     alert("Not enough XP!  You need 100 XP to cast this spell!")   
    }
    refreshInv()
};
function heal() {
    if(XP >= 50) {
        XP = XP - 50
        yourHp = 100
    }
    else {
     alert("Not enough XP!  You need 50 XP to heal!")   
    }
    refreshInv()
};
function mineDwarf() {
    if(XP>= 2000000){
 level = level + 10
 XP = XP + 10
 wood = wood + 10
 leaves = leaves + 10
 soil = soil + 10
 ruby = ruby + 10
 diamond = diamond + 10
 emerald = emerald + 10
 sapphire = sapphire + 10
 POLsapphire = POLsapphire + 10
 amber = amber + 10
 POLamber = POLamber + 10
 topaz = topaz + 10
 POLtopaz = POLtopaz
 amethyst = amethyst + 10
 POLamethyst = POLamethyst + 10
 fireore = fireore + 10
 goldore = goldore  + 10
 ironore = ironore  + 10
 magicore = magicore  + 10
 magicdust = magicdust  + 10
 coaldust = coaldust  + 10
 golddust = golddust  + 10
 irondust = irondust  + 10
 light = light  + 10
 POLemerald = POLemrald  + 10
 POLruby = POLruby  + 10
 CONlight = CONlight  + 10
POLdiamond = POLdiamond  + 10
magicbones = magicbones  + 10
stone = stone + 10
iron = iron  + 10
gold = gold  + 10
magic = magic  + 10
coal = coal  + 10
fire = fire  + 10
bones = bones  + 10
        }
        else {
            alert("Not enough XP wou need 2,000,000 XP")
        }
        refreshInv()
};
function yourgoal() {
    alert("you need to get 500 million XP and then you have won the game!")
}
function chooseClass() {
    addXP()
 var char = prompt("Are you a dwarf, elf, human, machine or a cheater.").toUpperCase()
 switch(char) {
 case "DWARF":
     
    alert("In progress for now, you idiot!!")
    refreshInv()
    break;
 case "ELF":
     axeQuality = axeQuality * 2
     alert("You are an Elf!")
     refreshInv()
     break;
 case "HUMAN":
     XPadd = XPadd * 2
     alert("You are a Human!")
     refreshInv()
     break;
    case "VAMPIRE":
    NaN
    break;
case "MACHINE":
    swordQuality = swordQuality * 2
    alert("You are a Machine!")
    refreshInv()
    break;
    case "CHEATER":
    yourHp = 0
    swordQuality = -1000
    enemyDmg = 1000
    axeQuality = -500
    alert("Die, cheater!")
    reset()
    refreshInv()
    break;
    default:
    alert("Sorry, that is not a class.  Either check your spelling or choose one of the given classes.  Don't worry, more coming soon!");
 }
};
function resetall() {
level = 0;
XP = 0;
wood = 0;
leaves = 0;
soil = 0;
ruby = 0;
 diamond = 0;
 specter = 0;
 emerald = 0;
 fireore = 0;
 SpecterTop = 0;
 goldore = 0;
 ironore = 0;
 magicore = 0;
 magicdust = 0;
 coaldust = 0;
 golddust = 0;
 irondust = 0;
 POLemerald = 0;
 POLruby = 0;
 POLdiamond = 0;
 magicbones = 0;
 stone = 0;
 iron = 0;
 gold = 0;
 magic =0;
 coal = 0;
 fire = 0;
 bones = 0;
 pickQuality = .5;
 axeQuality = 1;
 swordQuality = 1;
 enemyHp = 20;
 enemyDmg = 5;
 yourHp = 100;
 document.getElementById('woodinv').innerHTML = ("-")
 document.getElementById('stoneinv').innerHTML = ("-")
 document.getElementById('fightinv').innerHTML = ("-")
 document.getElementById('magic').innerHTML = ("-Basic Pyrostaff")
 document.getElementById('log').innerHTML = ("")
 document.getElementById('level').innerHTML = ("LVL 1: " + XP + " XP")
 document.getElementById('HP').innerHTML = ("100 HP")
 document.getElementById('sandinv').innerHTML = ("-")
};
//dynamics
function addXP() {
    XP++
    if (XP >= level * level) {
    level = level + 1
    }
 document.getElementById('level').innerHTML = ("LVL " + level + ": " + XP +"XP")
};
function refreshInv() {
  Save()
    if(stuff == space) {
        alert("Too much stuff!  Make a chest!")
    }
    else {
    stuff++
    document.getElementById("woodinfo").innerHTML = ("Axe quality: " + axeQuality)
    document.getElementById("stoneinfo").innerHTML = ("Pick quality: " + pickQuality)
    document.getElementById("fightinfo").innerHTML = ("Sword quality: " + swordQuality)
    document.getElementById("chestinfo").innerHTML = ("Chest #: " + chestinfo)
    document.getElementById('fightinv').innerHTML = ("-You have " + bones + " bones and " + tech + " tech.")
    document.getElementById('woodinv').innerHTML = ("-You have " + wood + " wood and " + leaves + " leaves.");
    document.getElementById('sandinv').innerHTML = ("-You have " + soil + " soil and " + roots + " roots.  You get " + pickQuality*2 + " soil per excavation.")
    document.getElementById('stoneinv').innerHTML = ("-You have " + stone + " stone, " + ironore + " iron ore, " + goldore + " gold ore, " + coal + " coal, and " + fireore + " fire ore, and " + magicore + " magic ore.")
    document.getElementById('HP').innerHTML = (yourHp + " HP")
    document.getElementById('magic').innerHTML = ("-Staff of Experience")
    document.getElementById('geminv').innerHTML = ("-You have " + ruby + " ruby, " + diamond + " diamond, and "+ emerald + " emerald.")
    document.getElementById('metalinv').innerHTML = ("-You have " + iron + " iron, " + gold + " gold, " + fire + " fire, and " + magic + " magic.")
    document.getElementById('lightinv').innerHTML = ("-You have " + light + " light.")
    document.getElementById('level').innerHTML = ("LVL " + level + ": " + XP +"XP")
}
}
function SetHi() {
    document.cookie = prompt("What is your name?");
}
function Hi() {
    alert("Hi " + cookie)
}


//	Simple example of using private variables
//
//	To start the stopwatch:
//		obj.start();
//
//	To get the duration in milliseconds without pausing / resuming:
//		var	x = obj.time();
//
//	To pause the stopwatch:
//		var	x = obj.stop();	// Result is duration in milliseconds
//
//	To resume a paused stopwatch
//		var	x = obj.start();	// Result is duration in milliseconds
//
//	To reset a paused stopwatch
//		obj.stop();
//
var	clsStopwatch = function() {
		// Private vars
		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds
 
		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
 
		// Public methods
		// Start or resume
		this.start = function() {
				startAt	= startAt ? startAt : now();
			};
 
		// Stop or pause
		this.stop = function() {
				// If running, update elapsed time otherwise keep it
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0; // Paused
			};
 
		// Reset
		this.reset = function() {
				lapTime = startAt = 0;
			};
 
		// Duration
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};
 
var x = new clsStopwatch();
var $time;
var clocktimer;
 
function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}
 
function formatTime(time) {
	var h = m = s = ms = 0;
	var newTime = '';
 
	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;
 
	newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
	return newTime;
}
 
function show() {
	$time = document.getElementById('time');
	update();
}
 
function update() {
	$time.innerHTML = formatTime(x.time());
}
 
function start() {
	clocktimer = setInterval("update()", 1);
	x.start();
}
 
function stop() {
	x.stop();
	clearInterval(clocktimer);
}
 
function reset() {
	stop();
	x.reset();
	update();
}