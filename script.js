const titles = [
"How can I learn English by myself?",
"How can I learn English quickly?",
"How can I learn English for free?",
"How to learn English in 30 days?",
"How can I speak English fluently in 10 days?",
"How do I improve my English speaking skills?",
"Can I learn English in 3 months?",
"How to speak faster?",
"Can I improve my English in 1 month?",
"How many hours study English a day?",
"How long should I study English a day?",
]

const search = document.querySelector(".search")
const inputBox = document.querySelector("input")
const resultBox = document.querySelector(".result-box")

inputBox.onkeyup = (e) => {
  const userInput = e.target.value
  let resultArray = []

  if (userInput.length > 0) {
    resultArray = titles.filter((title) => {
      if (title.startsWith(userInput)) return title
    })

    resultArray = resultArray.map((title) => {
      return "<li><b>" + userInput + '</b>' + title.substring(userInput.length) + "</li>"
    })

    if (resultArray.length > 0) {
      resultBox.innerHTML = resultArray.join("")
      search.classList.add("active")
    } else {
      search.classList.remove("active")
    }
  }else{
    search.classList.remove("active")
  }
}
