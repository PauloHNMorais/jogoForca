import words from "./words"
import removeAccents from "remove-accents"

import { getConfigurations } from "./configurationService"

let state = {
  secretWord: "",
  displayedWord: "",
  category: "",
  life: 7,
  time: 200,
  wrongLetters: [],
  selectedLetters: [],
  currentLetter: "",
  hangmanIndex: "forcaEspera",
  selectedRightLetter: null,
  message: null
}

function getRandomCategoryAndWord() {
  const category = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]
  const wordsList = words[category]
  const word = wordsList[Math.floor(Math.random() * wordsList.length)]

  return { category, word }
}

export async function newGame() {
  String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }

  const { word, category } = getRandomCategoryAndWord()
  const config = await getConfigurations()
  
  state.time = config.time
  state.secretWord = word.toUpperCase()
  state.displayedWord = "_".repeat(word.length)
  state.wrongLetters = []
  state.hangmanIndex = 0
  
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == "-")
    state.displayedWord = state.displayedWord.replaceAt(i, "-")
    else if (word.charAt(i) == " ")
    state.displayedWord = state.displayedWord.replaceAt(i, " ")
  }
  state.category = category

  return state
}

export function checkLetter(key, state) {
  String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }

  let newState = state
  let rightLetters = 0

  newState.selectedLetters.push(key)

  for (let i = 0; i < newState.secretWord.length; i++) {
    let letter = removeAccents(newState.secretWord.charAt(i))
    if (letter == key) {
      rightLetters += 1
      newState.displayedWord = newState.displayedWord.replaceAt(i, newState.secretWord[i])
    }
  }

  if (rightLetters == 0) {
    if (newState.life > 0) {
      newState.life = newState.life - 1
      newState.hangmanIndex += 1
    }
    newState.selectedRightLetter = false
    newState.wrongLetters.push(key)
  } else {
    newState.selectedRightLetter = true
  }

  // check WIN
  if (newState.displayedWord == state.secretWord) {
    newState.displayedWord = newState.displayedWord.toUpperCase()
    newState.message = "Você venceu!"
    newState.hangmanIndex = "forcaVitoria"
  }

  // check LOST
  if (newState.life == 0) {
    newState.displayedWord = newState.secretWord.toUpperCase()
    newState.hangmanIndex = "forcaDerrota",
    newState.message = "Você perdeu!"
  }

  return newState
}