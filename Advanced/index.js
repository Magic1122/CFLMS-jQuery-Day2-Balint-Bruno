console.log('JS is running...')

class Card {
    constructor(name, number) {
        this.name = `${name} ${number}`
        this.number = number
        this.mistery = `${name} ?`
    }
}

const cards = []

for (i = 1; i <= 10; i++) {
    const card = new Card('Card', i)
    cards.push(card)

    const cardNode =
        `<div class="card ui-draggable" number="${cards[i - 1].number}" id='card${i}'>
    <p>${card.name}</p>
    </div>`

    $('#cards').append(cardNode)
}

console.log(cards)

$(".card").draggable({
    addClasses: true
});

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const shuffledCards = shuffle([...cards])

shuffledCards.map((card) => {
    const cardNode =
        `<div class="card-mistery" number="${card.number}" id='card${i}'>
    <p>${card.mistery}</p>
    </div>`

    $('#results').append(cardNode)

})

$(".card").draggable({
    drag: function (event, ui) {
        console.log(event)
    }
});

const handleCardDrop = (e, ui) => {
    // console.log('event', $(e.target).attr('number'))
    const misteryNum =  $(e.target).attr('number')
    // console.log('UI', $(ui.draggable[0]).attr('number'))
    const cardNumber = $(ui.draggable[0]).attr('number')

    if (misteryNum === cardNumber) {
        $(e.target).css('background-color', 'green')
        e.target.innerHTML = `<p>Card ${misteryNum}</p>`
    }

}

$('.card-mistery').droppable({
    drop: handleCardDrop
})


console.log(shuffledCards)
