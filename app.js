// deck of cards - 52
// shuffle several decks
// select a card(random) 
// deal hands to dealer and player (hide one of dealers card)
// give option to player of hit or pass
// if hit add card, if pass let dealer play
// determine winner
// deal the next hand

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const suits = ['S', 'H', 'C', 'D']

const cardModel = document.createElement('div')
cardModel.classList.add('card')

const dealer = document.getElementById("dealer")
const player = document.getElementById("player")
const hitButton = document.getElementById("hit")
const stayButton = document.getElementById("stay")
const buttonContainer = document.getElementById("button-container")
const notice = document.getElementById("notice")
const nextHandButton = document.getElementById("next-hand")


const createDeck = ()=> {
  values.forEach((value)=>{
    suits.forEach((suit)=>{
      const card = value + suit
      console.log(card)
    })
  })
}

createDeck ()