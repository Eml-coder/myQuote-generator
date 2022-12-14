const quoteWrapper = document.getElementById('quote-wrapper');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const tweetBttn = document.getElementById('tweet');
const newQuoteBttn = document.getElementById('new-quote');
//loaders
// function load() {
//   quoteWrapper.hidden = true;
//   //loader.hidden = false;
// }
// function finalised () {
//   quoteWrapper.hidden = false;
//   //loader.hidden = true;
// }

//Setting up API
let apiQ = [];

const newQ = () => {
  //load();

  //get random quote
  const randomQuote = apiQ[Math.floor(Math.random() * apiQ.length)];
  //check if author is blank or null, if it is, we want to display 'unknown' instead of blank, if it is not blank, we want to display the author name.
  !randomQuote.author
    ? (authorText.textContent = 'Uknown author')
    : (authorText.textContent = randomQuote.author);

  //if the quote text length is greater than 120, we want to change the font size to 30px, if it is not, we want to change the font size to 50px:
  randomQuote.text.length > 150
    ? quoteText.classList.add('long-quote')
    : quoteText.classList.remove('long-quote'); //"long-quote" is a class in the css file?

  //display quote to the interface, hide loader
  quoteText.textContent = randomQuote.text;
  //loader
  //finalised();
};

const getQ = async () => {
  //load();
  const apiLink = 'https://type.fit/api/quotes';
  try {
    const reply = await fetch(apiLink);
    apiQ = await reply.json();
    newQ();
  } catch (error) {
    //will catch errors here
  }
};

//Twitter functionality
const tweetQ = () => {
  const tweetLink = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  //open a new window with the tweet link
  window.open(tweetLink, '_blank');
};

//Event Listeners
newQuoteBttn.addEventListener('click', newQ);
tweetBttn.addEventListener('click', tweetQ);

//getQ function is called when the page loads
getQ();

//load();
