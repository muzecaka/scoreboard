let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let newGameEl = document.getElementById("home-el")

let resetEl = document.getElementById("home-el")



let countHome = 0
let countGuest = 0


function homeAdd1() {
  countHome += 1
  homeEl.textContent = countHome
}

function homeAdd2() {
  countHome += 2 
  homeEl.textContent = countHome 
}

function homeAdd3() {
  countHome += 3 
  homeEl.textContent = countHome 
}

function guestAdd1() {
  countGuest += 1 
  guestEl.textContent = countGuest 
}

function guestAdd2() {
  countGuest += 2 
  guestEl.textContent = countGuest
}

function guestAdd3() {
  countGuest += 3 
  guestEl.textContent = countGuest
}


function newGame() {
newGameEl.textContent = "New"
guestEl.textContent = 'Game'
countHome = 0
countGuest = 0
}


function reset() {
newGameEl.textContent = "0"
guestEl.textContent = '0'
countHome = 0
countGuest = 0
}