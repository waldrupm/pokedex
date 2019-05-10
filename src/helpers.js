export function padId(num) {
  return ("000" + num).slice(-3);
}

function getCard(cards) {
  return cards[Math.floor(Math.random() * cards.length)];
}

export function getCardHand(cards, num) {
  let handArr = [];
  for(let i = 0; i < num; i++) {
    handArr[i] = getCard(cards);
  }
  return handArr;
}

export function getHandScore(handCards) {
  let handScore = 0;
  handCards.forEach((e) => {
    handScore += e.base_experience;
  });
  return handScore;
}