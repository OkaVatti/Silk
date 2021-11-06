// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' Parker';

// Here you can change your greetings
const gree1 = 'Nighty Night   ';
const gree2 = 'morning        ';
const gree3 = 'Afternoon      ';
const gree4 = 'Good evening,  ';
const gree5 = 'Hi             ';
const gree6 = 'Hey            ';

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
