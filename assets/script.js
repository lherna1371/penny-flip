let headsCount = 0;
let tailsCount = 0;

if(localStorage.getItem('headsCount') !== null){
    headsCount = parseInt(localStorage.getItem('headsCount'));
}

if(localStorage.getItem('tailsCount') !== null){
    tailsCount = parseInt(localStorage.getItem('tailsCount'));
}

scoreTable() 


// eventlistener on button, if user clicks 'flip the penny' button these updates take place:
document.querySelector('#flip').addEventListener('click',function(){
    // decide the outcome: heads/tails
    let isHeads = Math.random() < 0.5;

    if (isHeads) {
        // updating my dom  to display heads outcome
        document.querySelector('img').src = './assets/images/penny-heads.jpg';
        document.querySelector('#message-header').textContent = 'You Flipped Heads!'
        headsCount++
    } else {
        // updating my dom  to display tails outcome
        document.querySelector('img').src = './assets/images/penny-tails.jpg';
        document.querySelector('#message-header').textContent = 'You Flipped Tails!'
        tailsCount++
    }


    localStorage.setItem('headsCount', headsCount);
    localStorage.setItem('tailsCount', tailsCount);

    scoreTable() 
});


function scoreTable() {
    // calculate sum and percentage for heads/tails 
    let sum = headsCount + tailsCount;
    let percentageHeads = 0;
    let percentageTails = 0;

    if (sum > 0) {
        percentageHeads = Math.round(headsCount/sum * 100);
        percentageTails = Math.round(tailsCount/sum * 100);
    }

    // update table cells for total counts and percentages 
    document.querySelector('.heads-counter').textContent = headsCount;
    document.querySelector('.tails-counter').textContent = tailsCount;
    document.querySelector('.heads-percentage').textContent = percentageHeads + '%';
    document.querySelector('.tails-percentage').textContent = percentageTails + '%';
}