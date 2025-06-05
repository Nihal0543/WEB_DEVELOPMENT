const decrese = document.getElementById("decrease");
const increase = document.getElementById("increase");   
const reset = document.getElementById("reset");
const Count = document.getElementById("Count");
let countValue = 0;

increase.onclick = function() {
    countValue++;
    Count.textContent=countValue;
}

decrease.onclick = function() {
    countValue--;
    Count.textContent=countValue;
}

reset.onclick = function() {
    countValue=0;
    Count.textContent=countValue;
}
