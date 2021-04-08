' use strict';

let username = prompt('What is your name?');
console.log('the user\'s name is ' + username)

alert('Hi ' + username + '!')

const techie = prompt('Do you work in the tech industry?');
switch (techie) {
case 'yes' : 
    console.log ( 'the user said ' + techie + ' to working in the tech industry')
    alert('That is awesome ' + username + '!')
case 'no' :
    console.log ( 'the user does not work in the tech field')
    alert('You definitely should ' + username + '!')
}

let phone = prompt('Do you own an iPhone?')
switch (phone) {
    case 'yes' :
            console.log ('the user said' + phone + ' to having an iPhone.')
            alert('Great! Androids suck.' )
            break;
    case 'no' : 
            console.log ('the user said' + phone + ' to having an iPhone.') 
            alert( 'Do better ' + username)
        }

let social = prompt('Do you have a Facebook account?')
switch (social) {
    case 'yes' :
                console.log ('the user said' + social + ' to having Facebook.')
                alert('I mean, who doesn\'t?' )
                break;
    case 'no' : 
                console.log ('the user said' + social + ' to having Facebook.') 
                alert( 'Wow, ' + username + ' you are a unicorn!')
                }
let hours = prompt('Do you spend more than 2 hours a day on social media?')
switch (hours) {
    case 'yes' :
                console.log ('the user said' + hours + ' to spending more than 2 hours a day on social media.')
                alert('No judgement here, friend.' )
                break;
    case 'no' : 
                console.log ('the user said' + hours + ' to spending more than 2 hours a day on social media.') 
                alert( 'Wow, you must have a life. Unlike me.')
                }
// let techie = true;
// let techieTwo = false;

// function techie {
//     alert('That is awesome!')
// }

// function techieTwo {
//     alert("Too bad, you should!")
// }
