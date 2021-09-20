
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


    const getRandomJokeResponse = (request, response, params, acceptedTypes) => {
        if (acceptedTypes.includes('text/xml')){
            response.writeHead(200, {'Content-Type': 'text/xml'});
            response.write(fetchJokeXML(params.limit));
            response.end();
        } if (acceptedTypes.includes('application/json')) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(fetchJokeJSON(params.limit));
            response.end();
        }
       // response.write(fetchJoke(params));
    }

    // Helper functions 
function fetchJokeXML(max=5) {
    let myArray = [];
    // Depending on the parameters, the array will hold randomly
    // selected jokes. The array is then passed off as xml and 
    // displayed on the browser as such. 
    for (let i = 0; i < max; i++) {
        let selectJoke = returnRandomNumber();
        let selectedJoke = jokes[selectJoke];
        const responseXML = `
        <joke>
          <question>${selectedJoke.q}</question>
          <answer>${selectedJoke.q}</answer>
        </joke>
      `;
      myArray.push(responseXML);
    } 
    return myArray;
}

function fetchJokeJSON(max=5) {
    let myArray = [];
    // Depending on the parameters, the array will hold randomly
    // selected jokes. The array is then passed off as json and 
    // displayed on the browser as such. 
    for (let i = 0; i < max; i++) {
        let selectJoke = returnRandomNumber();
        let selectedJoke = jokes[selectJoke];
        myArray.push(selectedJoke);
    } 
    let displayJoke = JSON.stringify(myArray);
    return displayJoke   
}
function returnRandomNumber() {
    let num = Math.floor(Math.random() * 10);
    return num;
}

module.exports.getRandomJokeResponse = getRandomJokeResponse;