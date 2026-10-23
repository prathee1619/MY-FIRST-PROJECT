var p = prompt("Are u from IIITA?(Y/N) [If it is a N you can't know more about me 😔]");
if (p == "Y") {
    var button = document.querySelector('#button');
    var div_h = document.querySelector('#h');
    var div_p = document.querySelector('#p');
    button.addEventListener("click", function () {
        div_h.innerHTML = "MORE INFO 😉:";
        div_p.innerHTML = "If you ever want to successfully kidnap me, do not use a trap door. Just surround me with a circle of milk and biscuits, and I will willingly surrender to avoid touching either. I am what scientists call a 'highly selective culinary enthusiast' (and what my parents call a nightmare to feed). My survival strategy relies on a very narrow list of approved foods. If a meal requires dipping a baked good into a cold dairy beverage, I will treat that room like a hazardous spill zone and evacuate immediately 😂."
    })
}