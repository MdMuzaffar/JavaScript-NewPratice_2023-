const questions = [{
        question: 'What is the capital of France?',
        a: 'London',
        b: 'Rome',
        c: 'Berlin',
        d: 'paris',
        answer: 'Paris',
    },
    {
        question: 'What is the name of the largest ocean in the world?',
        a: 'Pacific Ocean',
        b: 'Indian Ocean',
        c: 'Arctic Ocean',
        d: 'Atlantic Ocean',
        answer: 'Pacific Ocean',
    },
    {
        question: 'What is the name of the tallest mountain in the world?',
        a: 'K2',
        b: 'Mount Everest',
        c: 'Denali',
        d: 'Aconcagua',
        answer: 'Mount Everest',
    },
];

const questionEL = document.querySelector('.question');
const ans1 = document.querySelector('#option1');
const ans2 = document.querySelector('#option2');
const ans3 = document.querySelector('#option3');
const ans4 = document.querySelector('#option4');
const submitEl = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')
    // const anserEl = document.querySelectorAll('.answer');


let questionNumber = 0;
let score = 0;
const quizAnswers = () => {

    const questionData = questions[questionNumber];

    questionEL.innerHTML = questionData.question;
    ans1.innerText = questionData.a;
    ans2.innerText = questionData.b;
    ans3.innerText = questionData.c;
    ans4.innerText = questionData.d;



    // console.log(questionData.a);
}

quizAnswers();

const getcheckedAnswer = () => {
    let ans;

    answers.forEach((ansEl) => {
        if (ansEl.checked) {
            ans = ansEl.id;
        }
    });
    return ans;

};
const deselectAll = (ansEl) => {
    answers.forEach(ansEl => ansEl.checked = false);
}

submitEl.addEventListener('click', () => {
    const checkedAnswer = getcheckedAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === questions[questionNumber].answer) {
        score++;
    }

    questionNumber++;

    deselectAll();

    if (questionNumber < questions.length) {
        quizAnswers();
    }


})


// ------------------------for loop -------------------------------------------
const count = 10;

for (let i = 0; i < 100; i++) {
    console.log(i)
}

// --------------------------for in loop ------------------------------------

let marks = {
    Ahmed: 45,
    Ahmed1: 48,
    Ahmed2: 50,
    Ahmed3: 50,
}

for (let j in marks) {
    console.log("marks of " + j + " are " + marks[j])
}

// --------------------------for of loop ------------------------------------



// --------------------------while loop ------------------------------------

let n = prompt("enter the number of n")
n = Number.parseInt(n)

let i = 0;
while (i < n) {
    console.log(i);
    i++;
}

// --------------------------do while loop ------------------------------------

// let n1 = prompt("enter the number of n1")
// n1 = Number.parseInt(n1)

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < n)

// --------------------------forEach ------------------------------------


let alpha = ["a", "b", "c"]

alpha.forEach(function(value, index) {
    document.write(index + ":" + value);
});