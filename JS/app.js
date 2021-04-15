// ' use strict';

let username = prompt('What is your name?');
console.log('the user\'s name is ' + username)


alert('Hi ' + username + '! Welcome to my Guessing Game!')
alert( 'Let\'s see how well you can guess info about me!')


let points = 0;
let city = prompt('Does Raven live in Nashville or Memphis?')
    if (city.toLowerCase() === 'nashville') {
    alert(' Correct! Country Music City!')
    points++;
    alert('Total points: ' + points)
    } else {
        alert('That is incorrect, unfortunately.')
        alert('Total points: ' + points)
    }
let school = prompt('Did she graduate from the University of Memphis?')
    if (school.toLowerCase() === 'yes') {
    alert(' Correct! Go Tigers!')
    points++;
    alert('Total points: ' + points)
    } else {
        alert('That is incorrect, unfortunately.')
    }
let job = prompt('Did she work for a radio station?')
    if (job.toLowerCase() === 'no') {
    alert(' Correct!')
    points++;
    alert('Total points: ' + points)
    } else {
        alert('That is incorrect, I worked in TV News.')
        alert('Total points: ' + points)
    }
let tech = prompt('What year did she start Pivot Tech ?')
    if (tech.toLowerCase() === '2020') {
    alert(' Correct!')
    points++;
    alert('Total points: ' + points)
    } else {
        alert('That is incorrect, unfortunately.')
        alert('Total points: ' + points)
    }
let news = prompt('Did she work for Good Morning America?')
    if (news.toLowerCase() === 'no') {
    alert(' Correct!!')
    points++;
    alert('Total points: ' + points)
    } else {
        alert('That is incorrect, unfortunately.')
        alert('Total points: ' + points)
    }


const answer = 3;
let number = prompt('How many years have I worked at my current job? Please enter a number between 1-3.');
    if (number < 3) {
        alert('That is incorrect.')
        alert('Total points: ' + points)
    } else {
        alert('That is Correct!')
        points++;
        alert('Total points: ' + points)
    }
    

let answer2 = prompt(' Which of these places have I visted before: Mexico, Aruba, Ghana, Barbados, Santorini or Morrocco?');
let places = ['Mexico, Aruba, Morrocco, Ghana, Barbados, Santorini'];
let rightAnswer = 'Mexico';
let i = 0;

while (i < 6) {
if (answer2.toUpperCase() !== rightAnswer) {
    alert( 'Correct!');
    points++;
    alert('You scored ' + points + 'points total!');
} else {
    alert('That is incorrect');
    alert( `You have ${5-i} attempts left`);
    answer2 = prompt('Which of these places have I visted before: Mexico, Aruba, Ghana, Barbados, Santorini or Morrocco?')
}
    i++
}

    alert('You scored ' + points + 'points total!');




// for (i = 0; i < 4; i++);
// if(places.toUpperCase() = 'Mexico') {
// alert( 'That is correct!')
// points++;
// alert('Total points: ' + points)
// } else {
//     alert ('Nope. Never been.')
//     alert('Total points: ' + points)
// }

    
  

