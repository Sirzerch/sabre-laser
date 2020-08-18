let btn = document.querySelector('.btn');
let laser = document.querySelector('.laser');
let fonctionne = null

let allumeBtn = function () {
    this.style.backgroundColor = "#cc2fc2";
    this.style.boxShadow = "0px 0px 8px 5px #cc2fc2";
    this.style.transition = "All 200ms";
    fonctionne = true
    btn.addEventListener("click", eteintBtn)
}

let allumeLaser = function () {
    laser.style.transform = "scaleX(1)";
    laser.style.backgroundColor = "#cc2fc2";
    laser.style.boxShadow = "0px 0px 8px 5px #cc2fc2";
    laser.style.transition = "transform 300ms ease-in-out";
    fonctionne = true
    btn.addEventListener("click", eteintLaser)
}

let eteintBtn = function () {
    if (fonctionne = true) {
        btn.style.backgroundColor = "#d9d9d9"
        btn.style.boxShadow = "0px 0px 0px 0px #d9d9d9"
        fonctionne = null
        btn.removeEventListener("click", eteintBtn)
    }
}
let eteintLaser = function () {
    if (fonctionne = true) {
        laser.style.transform = "scaleX(0)"
        fonctionne = null
        btn.removeEventListener("click", eteintLaser)
    }
}

btn.addEventListener('click', allumeBtn)
btn.addEventListener('click', allumeLaser)
