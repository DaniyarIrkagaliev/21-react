

const suits = ['spades', 'hearts', 'clubs', 'diamonds'];


function getSuit(){
    var randVal = Math.floor(Math.random() * suits.length);
    return suits[randVal];
}


function getValue() {
    var randVal = Math.floor(Math.random() * 13) + 1;
    return randVal;
}

function getCard(){
    const value = getValue();
    const suit = getSuit()

    const card = [value, suit];
    return card;
}