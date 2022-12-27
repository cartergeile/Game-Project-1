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

let allDecks = []
let dealerHand = []
let playerHand = []

//create deck
const createDeck = ()=> {
  const deck = []
  suits.forEach((suit)=>{
    values.forEach((value)=>{
      const card = value + suit
      deck.push(card)
    })
  })
  return deck
}

// shuffling the decks
const shuffleDecks = (num) => {
  for (let i = 0; i < num; i++){
    const newDeck = createDeck()
    allDecks = [...allDecks, ...newDeck]
  }
}

// getting random card
const selectRandomCard = () => {
  const randomIndex = Math.floor(Math.random()*allDecks.length)
  const card = allDecks[randomIndex]
  allDecks.splice(randomIndex, 1) // takes the random card out of decks
  return card
}

// dealing the hands out
const dealHands = () => {
  dealerHand = [selectRandomCard(), selectRandomCard()]
  dealerHand.forEach((card, index) => {
    const newCard = cardModel.cloneNode(true)
    index === 0? newCard.classList.add('back'): newCard.innerHTML = card;// hides first dealer card
    (card[card.length -1] === 'D' || card[card.length -1] === 'H') && newCard.setAttribute('data-red', true)  // makes heart and diamonds red
    dealer.append(newCard)
  })
  playerHand = [selectRandomCard(), selectRandomCard()]
  playerHand.forEach((card) => {
    const newCard = cardModel.cloneNode(true)
    newCard.innerHTML = card;
    (card[card.length -1] === 'D' || card[card.length -1] === 'H') && newCard.setAttribute('data-red', true)
    player.append(newCard)
  })
}
// the hit button
// add event listener
// if player has more than 21 bust(game over)
// if player less than 21 can choose to hit again
// tell player what value of hand is
const calcValue = (hand) => {
  let value = 0
  hand.forEach((card) => {
    if (card.length === 2) {
      (card[0] === 'K' || card[0] === 'Q' || card[0] === 'J') ? value+=10 : value += Number(card[0])
    }
    else {
      value += 10
    }
  })
  return value
}

const hitPlayer = () => {
  const newCard = selectRandomCard()
  playerHand.push(newCard)
  const newCardNode = cardModel.cloneNode(true);
  newCardNode.innerHTML = newCard;
  player.append(newCardNode)
  const handValue = calcValue(playerHand)
  if (handValue > 21) {
    console.log("BUST")
    alert("bust")
  }
}
hitButton.addEventListener('click', hitPlayer)





shuffleDecks(5)
const randomCard = selectRandomCard()
dealHands()
