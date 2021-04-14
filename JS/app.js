// ' use strict';

let username = prompt('What is your name?');
console.log('the user\'s name is ' + username)

alert('Hi ' + username + '! Welcome to my Guessing Game!')
alert( 'Let\'s see how well you can guess info about me!')

let city = prompt('Does Raven live in Nashville or Memphis?')
    if (city.toLowerCase() === 'nashville') {
    alert(' Correct! Country Music City!')
    } else {
        alert('That is incorrect, unfortunately.')
    }
let school = prompt('Did she graduate from the University of Memphis?')
    if (school.toLowerCase() === 'yes') {
    alert(' Correct! Go Tigers!')
    } else {
        alert('That is incorrect, unfortunately.')
    }
let job = prompt('Did she work for a radio station?')
    if (job.toLowerCase() === 'no') {
    alert(' Correct!')
    } else {
        alert('That is incorrect, I worked in TV News.')
    }
let tech = prompt('What year did she start Pivot Tech ?')
    if (tech.toLowerCase() === '2020') {
    alert(' Correct!')
    } else {
        alert('That is incorrect, unfortunately.')
    }
let news = prompt('Did she work for Good Morning America?')
    if (news.toLowerCase() === 'no') {
    alert(' Correct!!')
    } else {
        alert('That is incorrect, unfortunately.')
    }
        
