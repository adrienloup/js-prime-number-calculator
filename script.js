const paragraph = document.getElementsByTagName('p')[2]
const input = document.getElementsByTagName('input')[0]

function primeNumber(value) {
  for(let i =2; i < value; i++) {
    if(value % i === 0) {
      paragraph.innerHTML = value + ' is not prime. It is divisible by ' + i + '.'
      input.value = ''
      return
    }
  }
  paragraph.innerHTML = value + ' is a prime number.'
  input.value = ''
  return
}

input.addEventListener('keypress', e => {
  e.target.value = e.target.value.replace(/[^1-9]+/g, '')
})

document.addEventListener('keydown', e => {
  if(e.keyCode === 13) {
    e.preventDefault()
    let value = input.value
    if(/^\d*$/.test(value) && value != '') primeNumber(value)
  } 
}, false)
