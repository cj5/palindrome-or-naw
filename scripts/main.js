
let input = window.prompt("Enter a word or phrase. Palindrome or Naw?")

let inputCleaned = input.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '')
let inputCount = input.split("").length
let countDiv2 = Math.floor(inputCount / 2)
let lastHalf = (inputCleaned.substr(inputCleaned.length - countDiv2)).split("")
let revLastHalf = lastHalf.reverse().join("")
let firstHalf = inputCleaned.substr(0,countDiv2)

if (input == "") {
    alert("nothing was input")
} else if (firstHalf == revLastHalf) {
    alert('"'+input+'"' + ' ★IS★ a palindrome')
} else {
    alert('"'+input+'"' + ' is ★NOT★ a palindrome')
}
