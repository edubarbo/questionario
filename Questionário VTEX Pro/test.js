// Use the tier to determine the project recommendation
  if (tier === 3) {
    if (score <10) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 5</p>`;
    };

    if (score >= 11 && score <= 50) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 20</p>`;
    };

    if (score >= 51 && score <= 100) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Full Low - T2</p>`;
  } 

}
  else if (score < 10 && tier === 2) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 10</p>`;
  } 
  else if (score < 10 && tier === 1) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 30</p>`;
  } 
  else if (score >= 11 && score <= 50 && tier === 3) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 20</p>`;
  } 
  else if (score >= 11 && score <= 50 && tier === 2) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Essential Low - T2</p>`;
  } 
  else if (score >= 11 && score <= 50 && tier === 1) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Essential - T1</p>`;
  } 
  else if (score >= 51 && score <= 100 && tier === 3) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Full Low - T2</p>`;
  } 
  else if (score >= 51 && score <= 100 && tier === 2) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Full - T2</p>`;
  } 
  else if (score >= 51 && score <= 100 && tier === 1) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Full - T1 </p>`;
  }
}




}
  // Use the tier to determine the project recommendation
  if (score < 10 && tier === 3) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 5</p>`;
  } 
  else if (score < 10 && tier === 2) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 10</p>`;
  } 
  else if (score < 10 && tier === 1) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 30</p>`;
  } 
  else if (score >= 11 && score <= 50 && tier === 3) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 20</p>`;
  } 
  else if (score >= 11 && score <= 50 && tier === 2) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Essential Low - T2</p>`;
  } 
  else if (score >= 11 && score <= 50 && tier === 1) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Essential - T1</p>`;
  } 
  else if (score >= 51 && score <= 100 && tier === 3) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Full Low - T2</p>`;
  } 
  else if (score >= 51 && score <= 100 && tier === 2) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Full - T2</p>`;
  } 
  else if (score >= 51 && score <= 100 && tier === 1) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Full - T1 </p>`;
  }




  function showScore() {
if (tier === 3) {
    if (score <10) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 5</p>`;
    };

    if (score >= 11 && score <= 50) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 20</p>`;
    };

    if (score >= 51 && score <= 100) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Full Low - T2</p>`;
  } 
}
if (tier === 2) {
    if (score < 10) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Sessions - Pacote de 10</p>`;
  };

    if (score >= 11 && score <= 50) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Essential Low - T2</p>`;
  }; 

    if (score >= 51 && score <= 100 && tier === 2) {
    quiz.innerHTML = `<h2> O score do projeto é: ${score}</h2><p> O projeto indicado é: Guidance Full - T2</p>`;
  } 
}}