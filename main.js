// -------------- Question 1 ----------------- //

var sum = items.reduce((a, b) => a + b.price, 0)
var avg = sum / items.length
document.querySelector(
  "#answer1"
).innerHTML = `The average of all prices is ${avg.toFixed(2)}`

// -------------- Question 1 ----------------- //

// -------------- Question 2 ----------------- //
var newarr = []

var priceRange = items.filter(function(items) {
  if (items.price > 14.0 && items.price < 18.0) {
    return items.title
  }
})

var titles = priceRange.map(priceRange => priceRange.title)

var t2 = titles.join("\n")
document.querySelector(
  "#answer2"
).innerHTML = `The items that equal $14.00 and $18.00 dollars are: \n\n ${t2}`
// -------------- Question 2 ----------------- //

// -------------- Question 3 ----------------- //

var code = items.filter(items => items.currency_code === "GBP")

var ans3title = code.map(code => code.title)

var ans3price = code.map(code => code.price)

document.querySelector(
  "#answer3"
).innerHTML = `${ans3title} costs ${ans3price} dollars.`
// -------------- Question 3 ----------------- //
