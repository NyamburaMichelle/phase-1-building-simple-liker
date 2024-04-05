// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const like=document.querySelector(".like") 
function clickHeart(e) {
  const heart=e.target;
  mimicServerCall()
  .then(function(response) {
    alert("You notified the server!");
    alert(response);
    like.innerText= FULL_HEART;
})

.catch(function(error) {
 alert("Something went wrong")
})

}
for(const char of like.innerHTML) {
 like.addEventListener("click", clickHeart);

}
console.log(clickHeart);



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



