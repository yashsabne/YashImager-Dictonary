document.querySelector('.fa-volume-high').style.visibility = 'hidden';
  
//for history purpose
   const todoArray = [
];

renderTodoList();

function renderTodoList() {

    let todoListArray = '';
    let searchElement;

    for (let i = 0; i < todoArray.length; i++) {
        const todoObject = todoArray[i];
        
         searchElement= todoObject;

        const htmlHere = `<span id='searchEle'>${searchElement}</span> <button
            onclick ="todoArray.splice(${i},1);
                      renderTodoList();" class="btn-cross" ><i class="fa-solid fa-circle-xmark"></i></button> `;
        todoListArray += htmlHere;

    }
    document.querySelector('.work').style.backgroundColor = "white";
    document.querySelector('.work').innerHTML = todoListArray;
    
    localStorage.setItem('todoListArray',JSON.stringify(todoListArray));

    if (todoArray.length === 0) {
        document.querySelector('.work').innerHTML = "All history Cleared, No searches any more;";
        document.querySelector('.work').style.color = "red";

    }


}

function inputTaker() {
    const inputTakingHere = document.getElementById("search-input")
    const searchElement = inputTakingHere.value;

    todoArray.push(searchElement);


    console.log(todoArray);
 

    renderTodoList();


}


const accessKey = "RSeZNJCAvqPerxk7KudCfMe6XxzLXn2FHlfCaWgLB0c";


const formE1  = document.querySelector("form");
const inputE1 = document.getElementById('search-input');
const searchResults = document.querySelector('.result-img');

// console.log(imgResult); // tessting

const showMore = document.getElementById("my-showMore-btn");

let inputData = '';
let page = 1;

async function searchImages() {
    inputData = inputE1.value;
    // console.log(inputData) testing

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = '';
    }

    results.map((result) => {

        const imageWrapper = document.createElement('div'); 
        imageWrapper.classList.add("img-div");

        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;

        imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);


    });


    page++;

    if (page > 1 ) {
        showMore.style.display = "block";
    }


}

formE1.addEventListener("submit",(event) => {

    event.preventDefault();
    page = 1;
    searchImages();

});

showMore.addEventListener("click",(event) => {
    searchImages();

});



document.getElementById("Overly").addEventListener("click", function(){
    var e =document.getElementsByClassName("modalbox");
   
           e[0].style.display = 'block';
      
   })	;
   document.getElementById("close").addEventListener("click", function(){
      var e =document.getElementsByClassName("modalbox");
    e[0].style.display= 'none';
    
   });

   // ==================js for meaning==================//
   
   
const urlWord = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const btnMean = document.getElementById('btn-word');
const inputUser = document.getElementById('input').value;


btnMean.addEventListener("click", () => {

    

    const inputUser = document.getElementById('input').value;

    fetch(`${urlWord}${inputUser}`).
    then((response) => response.json()).
    then((data) => {
        document.querySelector('.wordType').innerHTML = inputUser;
        document.querySelector('.defination').innerHTML = 'Definition: ' + data[0].meanings[0].definitions[0].definition + `<br>`;    
        document.querySelector('.about-grammer').innerHTML = 'Example : ' + data[0].meanings[0].definitions[0].example;
   
    })
    .catch (() => {
        defination.innerHTML = `<div> Sorry but <u>${inputUser}</u> is not available in <b><i>Yash's</i> dictionary</b>. </div>`;

    });

    setTimeout(() => {
      document.querySelector('.fa-volume-high').style.visibility = 'visible'; 
    }, 800);


});





function speak() {
    const inputUser = document.getElementById('input').value;
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(`${inputUser}`);
  
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[4]; // Choose a specific voice
  
    // Speak the text
    speechSynthesis.speak(utterance);
  }


//============scroll to top============//
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
