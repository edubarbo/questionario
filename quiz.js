const quizData = [
    {
        question: 'Qual é o tier do cliente?',
        choices: [
            'Tier 3',
            'Low Tier 2',
            'High Tier 2',
            'Tier 1'
        ],
        tier: ["3", "Low 2", "High 2", "1"],
        scores: [0, 0, 0, 0]
        
    },
    {
        question: 'Quantas lojas físicas irão entrar no projeto?',
        choices: [
            '1 à 5',
            '5 à 10',
            '+10'
        ],
        scores: [5, 10, 30]
    },
    {
        question: 'Vai ter regionalização?',
        choices: [
            'Sim',
            'Não'
        ],
        scores: [10, 0]
    },
    {
        question: 'Se houver regionalização, terão regiões com sobreposição de mais de um seller?',
        choices: [
            'Sim',
            'Não haverá regionalização/sobreposição'
        ],
        scores: [30, 0]
    },
    {
        question: 'Será o mesmo ERP das lojas físicas e ecommerce?',
        choices: [
            'Sim',
            'Não'
        ],
        scores: [0, 10]
    },
    {
        question: 'São lojas próprias ou franquias?',
        choices: [
            'Lojas próprias',
            'Franquias'
        ],
        scores: [0, 5]
    },
    {
        question: 'Qual versão da VTEX a loja usa hoje?',
        choices: [
            'CMS Legado',
            'VTEX IO',
            'FastStore'
        ],
        scores: [15, 0, 0]
    }
];

const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const choices = document.getElementById('choices');
const totalQuestions = quizData.length;
const progressBar = document.getElementById('progress');
const submit = document.createElement('button');
submit.textContent = 'Submit';
let currentQuestion = 0;
let score = 0;
let tier = 3;

function loadQuestion() {
  const q = quizData[currentQuestion];
  question.textContent = q.question;
  choices.innerHTML = '';
  q.choices.forEach((choice, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => {
  if (currentQuestion === 0) {
    // If this is the first question, update the tier based on the selected choice
    tier = q.tier[index];
  }
  score += q.scores[index];
  currentQuestion++;
  updateProgressBar(currentQuestion, totalQuestions); // Update progress bar when user answers question
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

    li.appendChild(button);
    choices.appendChild(li);
  });
}

  if (currentQuestion === 0) {
    // If this is the first question, set the tier based on the selected choice
    const selected = choices.querySelector('button.selected');
    if (selected) {
      const index = q.choices.indexOf(selected.textContent);
      tier = q.tier[index];
    }
  }

function updateProgressBar(currentQuestion, totalQuestions) {
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar !== null) {
    progressBar.style.width = `${(currentQuestion / totalQuestions) * 100}%`;
  }
}



function showScore() {
  if (tier === "3") {
    if (score <10) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Sessions - Pacote de 5</p>`;
    };

    if (score >= 11 && score <= 50) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Sessions - Pacote de 20</p>`;
    };

    if (score >= 51 && score <= 100) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Guidance Full Low - T2</p>`;
    } 
  } else if (tier === "Low 2") {
    if (score < 10) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Sessions - Pacote de 10</p>`;
    };

    if (score >= 11 && score <= 50) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Guidance Essential Low - T2</p>`;
    }; 

    if (score >= 51 && score <= 100) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Guidance Full - T2</p>`;
    } 

  } else if (tier === "High 2") {
    if (score < 10) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Sessions - Pacote de 20</p>`;
    };

    if (score >= 11 && score <= 50) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Guidance Essential - T2</p>`;
    }; 

    if (score >= 51 && score <= 100) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Guidance Essential - T1</p>`;
    } 
  } else if (tier === "1") {
    if (score < 10) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Sessions - Pacote de 5</p>`;
    };

    if (score >= 10 && score <= 50) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Guidance Essential - T1</p>`;
    }; 

    if (score >= 51 && score <= 100) {
      quiz.innerHTML = `<h2> O score do projeto é: ${score}/100</h2><p> O projeto indicado é: Guidance Full - T1</p>`;
    } 
  }
}


loadQuestion();
submit.addEventListener('click', () => {
    const selected = choices.querySelector('button.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
});

console.log(tier)

