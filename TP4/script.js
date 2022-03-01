const quizData = [{
        question: " Quelle est la distance entre la terre et le soleil  ?",
        a: "300 millions de km",
        b: "150 millions de km",
        c: "700 millions de km",
        d: "500 millions de km",
        correct: "b",
    },
    {
        question: "Que signifie CSS",
        a: "common social statement",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Que signifie HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "En année Javasript a été déployer?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "aucune parmis ces reponses",
        correct: "b",
    },
    {
        question: "En Qui a decouvert l'amérique?",
        a: "Moussa Ndiaye",
        b: "Ibra Fall",
        c: "Samba Diop",
        d: "Christophe colomb",
        correct: "d",
    },

    {
        question: "Quel est le pourcentage qu'occupe les océans sur terre ?",
        a: "90%",
        b: "71%",
        c: "50%",
        d: "30%",
        correct: "b",
    },

    {
        question: "Qui est à l'origine du mouvement l'ittéraire le Surréalisme?",
        a: "Albert Camus",
        b: " Paul eluard",
        c: "Andrés breton",
        d: "Louis Arragon",
        correct: "c",
    },

    {
        question: "Quel poete a écrit le lac?",
        a: " Victor Hugo",
        b: "Alphonse de lamartine",
        c: "jean luc",
        d: "Léopold Sédar Senghor",
        correct: "b",
    },





];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>Vous avez repondu ${score}/${quizData.length} questions correctement</h2>

           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})