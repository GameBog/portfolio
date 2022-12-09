const quizData = [
    {
        question: "Коя е столицата на България?",
        a: "София",
        b: "Бургас",
        c: "Варна",
        d: "Пловдив",
        correct: "a",
    },
    {
        question: "В кой континент се намира пустинята Сахара?",
        a: "Северна Америка",
        b: "Австралия",
        c: "Европа",
        d: "Африка",
        correct: "d",
    },
    {
        question: "Коя е най-голямата държава по площ в света?",
        a: "Канада",
        b: "Русия",
        c: "Китай",
        d: "Бразилия",
        correct: "b",
    },
    {
        question: "Колко златни топки има световноизвестния футболист Лионел Меси?",
        a: "4",
        b: "7",
        c: "6",
        d: "3",
        correct: "b",
    },
    {
        question: "Кой футболен отбор от България печели 11 поредни титли в първенството?",
        a: "Лудогорец",
        b: "Левски",
        c: "ЦСКА",
        d: "Берое",
        correct: "a",
    },
    {
        question: "Кой български автор пише 'История'?",
        a: "Пейо Яворов",
        b: "Алеко Константинов",
        c: "Никола Вапцаров",
        d: "Христо Ботев",
        correct: "c",
    },
    {
        question: "На кой английски клуб беше великият мениджър сър Алекс Фъргюсън?",
        a: "Тотнъм",
        b: "Манчестър Сити",
        c: "Нюкасъл",
        d: "Манчестър Юнайтед",
        correct: "d",
    },
    {
        question: "В кой филм участва актьорът Вин Дизел?",
        a: "Супермен",
        b: "Бързи и яростни",
        c: "Умирай трудно",
        d: "Спайдърмен",
        correct: "b",
    },
    {
        question: "В кой континент се намира езерото Ери?",
        a: "Азия",
        b: "Европа",
        c: "Северна Америка",
        d: "Южна Америка",
        correct: "c",
    },
    {
        question: "Къде е разположена катедралата Нотр Дам?",
        a: "Марсилия",
        b: "Лион",
        c: "Монпелие",
        d: "Париж",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
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
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2 style="text-align:center">Ти отговори на ${score}/${quizData.length} въпроса правилно</h2>
           <button class="button"onclick="location.reload()">Reload</button>
           `
       }
    }
})