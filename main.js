var money = 0; // Money.
var updateRate = 1000; // Updaterate for actions happening every x milliseconds.
var moneyps = 0;



// Clicking for Money
function kaching () {
	money++;
  updateMoney();
};

// Event Listener for Clicking Money

var elcm = document.getElementById("kaching");
elcm.addEventListener("click", kaching, false);

// Object Constructor for autoclickers. Also guideline for creating new autoClicker objects.
// var nimi = new autoClicker(clicks, multiplier, cost, costIncrease)
function autoClicker(clicks, cost, costIncrease, level) {
  this.clicks = clicks;
  this.cost = cost;
  this.costIncrease = costIncrease;
  this.level = level;
};

// Autoclickers
var bottlecollector = new autoClicker(0, 10, 1.15, 0);
var craftseller = new autoClicker(0, 100, 1.15, 0);
var hotdog = new autoClicker(0, 1000, 1.15, 0);

// Function for buying clickers for Money.
function buyClicker (c, button) {
	if (money < c) {
  	return false;
  };
  money -= c;
  return true;
};

// Function for buying Bottle-Collector
function buyBC() {
  if (buyClicker(bottlecollector.cost, this)) {
  	bottlecollector.clicks += 0.01;
  	bottlecollector.cost *= bottlecollector.costIncrease;
  	bottlecollector.level++;
		
    var e = document.getElementById("bottlecollector-level");
    e.innerHTML = "lvl " + bottlecollector.level;
    
    var e2 = document.getElementById("buybottlecollector");
    e2.innerHTML = "Buy for " + bottlecollector.cost.toFixed(2) + " dollors";
  };
};

//Function for buying Craftseller
function buyCS() {
	if (buyClicker(craftseller.cost, this)) {
		craftseller.clicks += 0.05;
		craftseller.cost *=craftseller.costIncrease;
		craftseller.level++;
		
		var e = document.getElementById("craftseller-level");
		e.innerHTML = "lvl " + craftseller.level;
		
		var e2 = document.getElementById("buycraftseller");
		e2.innerHTML = "Buy for " + craftseller.cost.toFixed(2) + " dollors";
	};
};

//Function for buying Hotdog
function buyHD() {
	if (buyClicker(hotdog.cost, this)) {
		hotdog.clicks += 0.10;
		hotdog.cost *=hotdog.costIncrease;
		hotdog.level++;
		
		var e = document.getElementById("hotdog-level");
		e.innerHTML = "lvl " + hotdog.level;
		
		var e2 = document.getElementById("buyhotdog");
		e2.innerHTML = "Buy for " + hotdog.cost.toFixed(2) + " dollors";
	};
};


// Event Listener for buying Bottle-Collector
var elbc = document.getElementById("buybottlecollector");
elbc.addEventListener("click", buyBC, false);

//Event Listener for buying Craftseller
var elcs = document.getElementById("buycraftseller");
elcs.addEventListener("click", buyCS, false);

//Event Listener for buying Hotdog
var elhd = document.getElementById("buyhotdog");
elhd.addEventListener("click", buyHD, false);

// Function for adding clickers work to Money

function clickerMoney() {
	window.setInterval(function() {
		money += bottlecollector.clicks;
		money += craftseller.clicks;
		money += hotdog.clicks;
	}, 10)
}

// Function for updating amount of Money.
function updateMoney() {
  window.setInterval(function() {
  	var e = document.getElementById("money");
 	e.innerHTML = money.toFixed(0);
    
	var mps = 100*(bottlecollector.clicks + craftseller.clicks + hotdog.clicks);
	var e2 = document.getElementById("moneyps");
	e2.innerHTML = mps.toFixed(2);
	
  }, 10);
};
// Making onload event after window loads.
window.onload = function start() {
	// Functions to be executed here
  updateMoney();
  clickerMoney();
};