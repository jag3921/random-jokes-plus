// Random Jokes returend as json
const http = require('http');
const url = require('url');

//const query = require('querystring');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const errorPage = `
<html>
  <head>
    <title>404 - File Not Found!</title>
  </head>
  <body>
    <h1>404 - File Not Found!</h1>
    <p>Check your URL, or your typing.</p>
  </body>
</html>`;

// Jokes
const jokes = [
{q: "Why don't sharks like to eat clowns??",
 a : "Because they taste funny!!!"},
{q: "What did the boy cat say to the girl cat????",
 a : "You're Purr-fect!!!"},
{q: "What is a frog's favorite outdoor sport??",
 a : "Fly Fishing!!!"},
{q: "I hate jokes about German sausages..",
 a: "Theyre the wurst."},
{q: "Did you hear about the cheese factory that exploded in France??",
 a: "There was nothing left but de Brie."},
{q: "Our wedding was so beautiful..",
 a : "Even the cake was in tiers."},
{q: "Is this pool safe for diving??",
 a : "It deep-ends."},
{q: "Dad, can you put my shoes on??",
 a : "I dont think theyll fit me."},
{q: "Can February March??",
 a : "No, but April May"},
{q: "Dad, can you put the cat out??",
 a : "I didnt know it was on fire."}
];



const onRequest = (req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;

    if (pathname == "/" || pathname == "/random-jokes") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(fetchJoke());
        res.end();
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(errorPage);
        res.end();
    }
}

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`);

// Helper functions 
function fetchJoke() {
    let selectJoke = returnRandomNumber();
    let selectedJoke = jokes[selectJoke];
    let displayJoke = JSON.stringify(selectedJoke);
    return displayJoke
}
function returnRandomNumber() {
    let num = Math.floor(Math.random() * 10);
    return num;
}