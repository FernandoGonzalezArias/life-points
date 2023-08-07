let player1Points = 8000;
let player2Points = 8000;
let timerInterval;
let minutes = 45;
let seconds = 0;

function updatePoints(player, value) {
  if (player === 'player1') {
    player1Points += value;
    if (player1Points <= 0) {
      player1Points = 0;
    }
    document.getElementById('player1Points').textContent = player1Points;
    document.getElementById('player1AddPoints').value = '';
    document.getElementById('player1SubtractPoints').value = '';
  } else if (player === 'player2') {
    player2Points += value;
    if (player2Points <= 0) {
      player2Points = 0;
    }
    document.getElementById('player2Points').textContent = player2Points;
    document.getElementById('player2AddPoints').value = '';
    document.getElementById('player2SubtractPoints').value = '';
  }
}

function addPoints(player) {
  const inputValue = parseInt(document.getElementById(`${player}AddPoints`).value);
  if (!isNaN(inputValue)) {
    updatePoints(player, inputValue);
  }
}

function subtractPoints(player) {
  const inputValue = parseInt(document.getElementById(`${player}SubtractPoints`).value);
  if (!isNaN(inputValue)) {
    updatePoints(player, -inputValue);
  }
}

function restoreDefault(player) {
  if (player === 'player1') {
    player1Points = 8000;
    document.getElementById('player1Points').textContent = player1Points;
  } else if (player === 'player2') {
    player2Points = 8000;
    document.getElementById('player2Points').textContent = player2Points;
  }
}

function setTimerDuration() {
  const inputValue = parseInt(document.getElementById('timerDuration').value);
  if (!isNaN(inputValue)) {
    minutes = inputValue;
    seconds = 0;
    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timerDuration').value = '';
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timerInterval);
      alert("¡Tiempo finalizado!");
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTimer() {
  clearInterval(timerInterval);
  minutes = 45;
  seconds = 0;
  document.getElementById('timer').textContent = '45:00';
  document.getElementById('timerDuration').value = '';
}

function setStartingPoints(player) {
  const inputValue = parseInt(document.getElementById(`${player}StartingPoints`).value);
  if (!isNaN(inputValue)) {
    if (player === 'player1') {
      player1Points = inputValue;
      document.getElementById('player1Points').textContent = player1Points;
    } else if (player === 'player2') {
      player2Points = inputValue;
      document.getElementById('player2Points').textContent = player2Points;
    }
  }
}
