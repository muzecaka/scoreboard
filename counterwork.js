

let countWork = document.getElementById('count-work')
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
  console.log('You Clicked')
  count += 1
  console.log(count)
  countWork.textContent = count
}




function save() {
  console.log('Count Saved')
  console.log(count)
  
  saveEl.textContent += ' ' + count + ' - '
  
  count = 0
  
}

