/*Part1
 Write a for loop that logs every even number starting from 1000 down to 0 
 (you can do this a couple ways, either updating the i a certain way or by 
 checking if the number is even inside the for loop)
*/

for (let i = 1000;  i >= 0; i -=2) {
    console.log(i);
    } 
  console.log("End of Loop.");  

/*
Part2
Write a for loop that starts at 0 and goes to 10000, don't log any numbers but 
when the for loop is 1/4 of the way done through the loops (2500), your code should 
alert a message that says "A quarter of the way there!" then when your loop is halfway 
there (5000), your code should alert  a message that says "Halfway there!"  Finally 
when it reaches the last number (10000, make sure your condition is inclusive of 10000) 
it should alert "The loop is done!"
 */

for (let i = 0;  i <= 10000;  i++) {
    if (i/4 === 2500){
    alert ("A quarter of the way there!");
    }
    if (i/2 === 5000){
    alert("Halfway there!");
    }
    if (i === 10000){
    alert("The loop is done!");
    }
}
  

/* Part3
Finally write an array of your top 5 favorite tv shows (make them up if you don't have any)
If your array has a value like "My #1 favorite TV show is Breaking Bad" inside of it, that's 
not good and you'll get some points off. Your array should simply have values like "Breaking 
Bad" or "The Expanse" inside of it and your loop should use those values to shape the message 
below. Loop through the array of your top 5 favorite tv shows and log to the console the 
following message each loop:
"My #<INSERT PROPER NUMBER HERE> favorite tv show is <INSERT TV SHOW HERE>"
*/
 
let myFavoriteMovies = ["How it's Made", "Engineering Marvels", "Aerial America", "Combat Ships", "Air Disasters"];

for (let i = 0; i < myFavoriteMovies.length; i++) {
  console.log(`My No. ${i+1} favorite movie is ${myFavoriteMovies[i]}.`);
}



