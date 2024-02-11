// using an api for our javascript..were going to make a get request for our joke and put it in our interface or application  (application programming interface using a json api. will make an http request to the url https://icanhazdadjoke.com the api response we want is application/json not text/html so we need to parse it so we send a header of accept equal to application/json. we are going to use a fetch request within our application)
// use site called postman where you can make get requests under get/headers/pretty/html. under headers , add key value pair of "Accept": "application/json" and in the top bar select get and https://icanhazdadjoke.com under the pretty tab
//other methids to select
//get-means your getting data from the server
//post-means your submitting data such as a contact form or an admin screen when you adding a new blogpost
//put is for when your updating information on the server same as patch
//delete is to delete data on the server..

//in our project we want to make a request from our application for a joke and the way we can do that is using the "Fetch api--provides a javasript interface for accessing and manipulating parts of the http pipeline such as requests and responses. it also provides a global fetch method that provides an easy and logical way to fetch resources asynchronously across the network. you can build your own backend api with express or node.js or python jango" when you call a fetch to a url it returns a promise as it fetches the data asynchronisly
//ex... fetch('http://example.com/movies.json')
//      .then(response => response.json())
//      .then(data => console.log(data));(logging the data thats in the movies.json file)
//here we are fetching a json file across the network and printing it to the console. the simplest use of fetch takes one argument-the path to the resource you want to fetch and returns a promise containing the actual response(a response object) this is just an http response, not the actual JSON. to extract the JSON body content from the response we use the json() method(defined on the Body mixin, whch is implementes by both the request and respinse objects)

const jokeEl = document.getElementById('joke') 
// this will get the element with the id of 'joke' and store it in a variable called jokeEl.//getting the div with an id of joke that wtaps the text //Joke Goes Here

//also want the button in our JS so we call that out. //get another joke
const jokebtn = document.getElementById("jokeBtn");
//whe we go into our appplication we want to call a funtion called generate joke

//want to hook up an event listener to the button so that it recalls generatejoke again and again and again to change the jokes

jokebtn.addEventListener('click', generateJoke)
//want to call an eventlistener to generate joke and when that happens as soon as you click get another joke it should change jokes 

//if you go to inspect page and network tab you can see the requests it makes to icanhazdadjokes.com to fetch another joke and if you click the response tab you can see the new joke it fetched// you can also click the headers tab and see the requested url was made from type of request was a "get" request and in the request headers should see under accept: application/json because we sent that.

generateJoke()

//using ASYNC/AWAIT

async function generateJoke() {
    const config = {
       headers: {
           Accept:'application/json',
       },
       }
      const res = await fetch('https://icanhazdadjoke.com',config)

      const data = await res.json()
      jokeEl.innerHTML= data.joke;
      //set the joke element in our html to data with joke value
    }

//create it below. then copy the below and comment it out and above paste it using a sync await instead of.then which is the same result using a different method. instead of using .then we are just setting what we get back from fetch in a regular variable and whatever we get back from res.json into a variable

// USING .THEN
// function generateJoke(){
//  const config = {
//     headers: {
//         'Accept':  'application/json'
//     }
//     }
//     fetch ('https://icanhazdadjoke.com',config).then(res => res.json ()).then((data) => {
//         jokeEl.innerHTML= data.joke;
//         //accessing this .joke from the entire object
//      })
//     }
 



 //use an arrow funtion to call res to get teh json data and the second ".then" is gonna give us the actual data..call data using arrow function
//if we just make a get request to the above without an accept header its just gonna return html which we dont want so add an object with a headers value.. so accept as the key and applciation/json as the value

