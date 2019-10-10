// -------------- Question 1 ----------------- //

// Question: What is the average price of all items?

var sum = items.reduce((a, b) => a + b.price, 0)
var avg = sum / items.length
document.querySelector(
  "#answer1"
).innerHTML = `The average of all prices is ${avg.toFixed(2)}`

// -------------- Question 1 ----------------- //

// -------------- Question 2 ----------------- //

// Question: Show me an array of items that cost between $14.00 and $18.00 USD?

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

// Question: Which item has a "GBP" currency code? Display it's name and price.

var code = items.filter(items => items.currency_code === "GBP")

var ans3title = code.map(code => code.title)

var ans3price = code.map(code => code.price)

document.querySelector(
  "#answer3"
).innerHTML = `${ans3title} costs ${ans3price} dollars.`
// -------------- Question 3 ----------------- //

// -------------- Question 4 ----------------- //

// Question: Display a list of all items who are made of wood.

const mat = items.filter(items => {
  let material = items.materials

  if (material.includes("wood")) {
    return material
  }
})

const ans4title = mat.map(mat => mat.title)

const ans4 = ans4title.join("\n\n")

document.querySelector(
  "#answer4"
).innerHTML = `Items that are made of wood are:\n\n ${ans4}`

// -------------- Question 4 ----------------- //

// -------------- Question 5 ----------------- //

// Question: Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

const materials = items.filter(items => {
  let mat = items.materials

  let length = mat.length
  if (length >= 8) {
    return length
  }
})

const ans5title = materials.map(name => name.title)
const title1 = ans5title[0]
const title2 = ans5title[1]
const ans5material = materials.map(name => name.materials)
const material1 = ans5material[0].join("\n")
const material2 = ans5material[1].join("\n")

document.querySelector(
  "#answer5"
).innerHTML = `${title1} has ${ans5material[0].length}: \n\n ${material1} \n\n\n ${title2} has ${ans5material[1].length}: \n\n ${material2}`

// -------------- Question 5 ----------------- //

// -------------- Question 6 ----------------- //

// Question: How many items were made by their sellers?

const madeBySellers = items.filter(made => {
  let by = made.who_made

  if (by === "i_did") {
    return by
  }
})

document.querySelector(
  "#answer6"
).innerHTML = `${madeBySellers.length} were made by their sellers.`

// -------------- Question 6 ----------------- //
