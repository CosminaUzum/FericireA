// https://favqs.com/api/qotd

// whenever you need a variable which wont be changing in future use 'const'
const quote_url = "https://favqs.com/api/qotd";

async function fetchQuote(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
var quoteElement = document.getElementById('quote-body');
var authorElement = document.getElementById('author');
var quoteContainerElement = document.getElementById('quote-container');

function updateQuote() {
    fetchQuote(quote_url).then(function(data) {
        quoteElement.innerText = data.quote.body;
        authorElement.innerText = data.quote.author;
    });
}

updateQuote();
// document.body.onkeyup = function(e) {
//     if (e.keyCode == 72) {
//         updateQuote();
//     }
// }

const quoteBtn = document.getElementById('quote-btn');
quoteBtn.addEventListener('click', () => {
    updateQuote();
})