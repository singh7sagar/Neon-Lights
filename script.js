const h1 = document.getElementById("h1");
// h1.textContent="Hee";

function change(){
    h1.textContent = "hiee!!";
    document.getElementById("h2").textContent="Byii";
}

const butt = document.querySelector("button")
butt.onclick = change;