/* Issues arenot bugs */ 
/* keep them in if you wish to do some */
/* tinkering later on in life. */

/*
function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  var session = "";

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
  
  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("time").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();
*/

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
  
  let time = hh + ":" + mm + ":" + ss;

  document.getElementById("time").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();

