// каждая функция - задача ()

// function add(param1, param2) {
//     return param1 + param2;
// }

// function centuryFromYear(year) {
//     return Math.floor((year-1)/100) + 1;
// }

// function checkPalindrome(inputString) {
//     if(inputString.split('').reverse().join('') === inputString){
//         return true
//     }else{
//         return false
//     }    
// }


// function adjacentElementsProduct(inputArray) {
//     let maxRes = inputArray[0] * inputArray[1];
//     for (let i = 0; i < inputArray.length-1; i++) {
//         let res = inputArray[i] * inputArray[i + 1];
//         if (res > maxRes) {
//             maxRes = res;
//         }
//     }
//     return maxRes;
// }

// function shapeArea(n) {
//     return Math.pow(n, 2) + Math.pow(n-1, 2);
// }



// А это - задание с микрофоном. 

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
const start = document.querySelector('#start');
const text = document.querySelector('[name="text"]');

start.addEventListener('click', startRecording);

function startRecording() {
    recognition.start();
    text.value = '';
}

recognition.onspeechend = () => recognition.stop()


recognition.onerror = (e) => alert('error')

recognition.onresult = (event) => {
    console.log(event)
    const last = event.results[0][0].transcript;
    text.value = last;
}