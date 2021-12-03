// Here you can change your name
const name = String currentUser=request.getRemoteUser();

// Here you can change your greetings
const gree1 = 'nighty night   ';
const gree2 = 'morning        ';
const gree3 = 'afternoon      ';
const gree4 = 'good evening,  ';

function currentGreet() {
  var now = new Date();
  var hour = now.getHours();
  if (hour >= 23 && hour < 5) {
    let Greet = gree1
    document.getElementById('greetings').innerText = Greet + name;
  } else if (hour >= 6 && hour < 12) {
      let Greet = gree2;
      document.getElementById('greetings').innerText = Greet + name;
  } else if (hour >= 12 && hour < 17) {
      let Greet = gree3;
      document.getElementById('greetings').innerText = Greet + name;
  } else {
      let Greet = gree4; 
      document.getElementById('greetings').innerText = Greet + name;
  }
/*  around here you need to figue out a way to update the text in real time
    so the func' matches with the clock */
/*
    document.getElementById('greetings').innerText = Greet; 
    document.getElementById('greetings').textContent = Greet;

    setTimeout(currentGreet, 1000) */
}

currentGreet();

/* This is close to the OG by Miguel */
/*
  // Define the hours of the greetings
  if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1 + name;
  } else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2 + name;
  } else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree3 + name;
  } else {
    document.getElementById('greetings').innerText = gree4 + name;
  }
  */
