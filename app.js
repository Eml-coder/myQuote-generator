const quoteWrapper = document.getElementById('quote-wrapper');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const tweetBttn = document.getElementById('tweet');
const newQuoteBttn = document.getElementById('new-quote');

//Setting up API
let apiQ = [];

const newQ = () => {
  //get random quote
  const randomQuote = apiQ[Math.floor(Math.random() * apiQ.length)];

  !randomQuote.author
    ? (authorText.textContent = 'Uknown author')
    : (authorText.textContent = randomQuote.author);

  //if the quote text length is greater than 120,  change the font size to 30px, if it is not,  change the font size to 50px:
  randomQuote.text.length > 150
    ? quoteText.classList.add('long-quote')
    : quoteText.classList.remove('long-quote'); //

  quoteText.textContent = randomQuote.text;
};

const getQ = async () => {
  const apiLink = 'https://type.fit/api/quotes';
  try {
    const reply = await fetch(apiLink);
    apiQ = await reply.json();
    newQ();
  } catch (error) {
    //errors here
  }
};

//Twitter functionality
const tweetQ = () => {
  const tweetLink = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(tweetLink, '_blank');
};

//Event Listeners
newQuoteBttn.addEventListener('click', newQ);
tweetBttn.addEventListener('click', tweetQ);

getQ();
