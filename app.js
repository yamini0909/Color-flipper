const colors = ["green", "red", "RGB(100, 216, 65)", "#f15025" ,"RGB: (226, 83, 47)" , "RGB: (224, 216, 195)" ,"RGB(100, 216, 235)"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber]
})

function getRandomNumber(){
   return Math.floor(Math.random() * colors.length)
}