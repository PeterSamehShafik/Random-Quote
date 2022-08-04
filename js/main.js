var quotes = [ //12 quote
    {quote:"Be yourself; everyone else is already taken.", author:"Oscar Wilde"},
    {quote:"So many books, so little time.", author:"Frank Zappa"},
    {quote:"A room without books is like a body without a soul.", author:"Marcus Tullius Cicero"},
    {quote:"Without music, life would be a mistake.", author:"Friedrich Nietzsche"},
    {quote:"If you tell the truth, you don't have to remember anything.", author:"Mark Twain"},
    {quote:"In three words I can sum up everything I've learned about life: it goes on.", author:"Robert Frost"},
    {quote:"Be the change that you wish to see in the world.", author:"Mahatma Gandhi"},
    {quote:"You only live once, but if you do it right, once is enough.", author:"Mae West"},
    {quote:"متأمنيش انك هتسبيني فى حالة وهترجعيلي فى نفس الحالة", author:"Wegz KR"},
    {quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.", author:"Mahatma Gandhi"},
    {quote:"The fool doth think he is wise, but the wise man knows himself to be a fool.", author:"William Shakespeare"},
    {quote:"The only true wisdom is in knowing you know nothing.", author:"Socrates"},
];

function generateQuotes(){
    var index = Math.round(Math.random() * (quotes.length-1));
    var quote =document.getElementById("quote");
    var author =document.getElementById("author");

    quote.innerHTML= '"' + quotes[index].quote + '"';
    author.innerHTML= '- - ' + quotes[index].author + '.';
}