const clickedBurger = $('.burger-card');
const clickedSoup = $('.soup-card');
const clickedDessert = $('.dessert-card');

$('.show').click(event => {
    $('.container-counter').addClass('click-counter')
    // if (clickCounter){
        // $('.container-counter')
    // } else 
        $('.click-counter').html(`<h3>Number of clicked cards: </h3>
        <div class="main-burger"></div>
        <div class="main-soup"></div>
        <div class="main-dessert"></div>`)
})

clickedBurger.click(event => {
    clickedBurger.addClass('background-card')
})



clickedSoup.click(event => {
    clickedSoup.addClass('background-card')
});

clickedDessert.click(event => {
    clickedDessert.addClass('background-card')
});

let counterBurger = 1;
let counterSoup = 1;
let counterDessert = 1;

clickedBurger.click(event => {
    $('.main-burger').html(`The "Burger" card was clicked <strong>${counterBurger++}</strong> times!`);
    if(counterBurger > 10 && counterBurger <= 20) {
        $('.main-burger').addClass('background-green')
    } else if (counterBurger > 20 && counterBurger <= 30) {
        $('.main-burger').removeClass('background-green')
        $('.main-burger').addClass('background-yellow')
    } else if (counterBurger > 30) {
        $('.main-burger').removeClass('background-yellow')
        $('.main-burger').addClass('background-red')
    }    
});

clickedSoup.click(event => {
    $('.main-soup').html(`The "Soup" card was clicked <strong>${counterSoup++}</strong> times!`)
    if(counterSoup > 10 && counterSoup <= 20) {
        $('.main-soup').addClass('background-green')
    } else if (counterSoup > 20 && counterSoup <= 30) {
        $('.main-soup').removeClass('background-green')
        $('.main-soup').addClass('background-yellow')
    } else if (counterSoup > 30) {
        $('.main-soup').removeClass('background-yellow')
        $('.main-soup').addClass('background-red')
    }    
});

clickedDessert.click(event => {
    $('.main-dessert').html(`The "Dessert" card was clicked <strong>${counterDessert++}</strong> times!`)
    if(counterDessert > 10 && counterDessert < 20) {
        $('.main-dessert').addClass('background-green')
    } else if (counterDessert > 20 && counterDessert < 30) {
        $('.main-dessert').removeClass('background-green')
        $('.main-dessert').addClass('background-yellow')
    } else if (counterDessert > 30) {
        $('.main-dessert').removeClass('background-yellow')
        $('.main-dessert').addClass('background-red')
    }    
});
