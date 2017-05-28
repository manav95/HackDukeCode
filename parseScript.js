/* A convenience function to reverse a string, and
 * one to set the content of an element.
 */

var keys = ["important", "critical", "test"];
var interrogatives = ["who", "when", "where", "what", "why", "which", "whose", "whom", "how"];
var input, reversed, count, orig, oldText, timeout;

//ending the examples - on another note, additionally,
//ignoring fillers - ummm, uh
//pause for a good amount of time -> new line
//italics for questions - interrogative pronouns

function reverse(s) {
  return s.split('').reverse().join('');
}

/*function parseQuestion(s) {
  for (var i = 0; i < interrogatives) {
    if (s.search(keys[i]) >= 0) {
      s = s.replace(RegExp(keys[i]))
    }
  }
}*/
function boldKey(s) {
  for (var i = 0; i < keys.length; i++) {
    if (s.search(keys[i]) >= 0) {
      s = s.replace(RegExp(keys[i], 'g'), keys[i].bold());
    }
  }
  return s;
}
function parseExample(s) {
  return s.split(new RegExp("for example", 'g'));
}

function set(el,text){
 while (el.firstChild) el.removeChild(el.firstChild);
  el.appendChild(document.createTextNode(text))}

/* setupUpdater will be called once, on page load.
 */

function setupUpdater(){
 console.log("IN HERE!");
 input = document.getElementsByTagName('span')[0];
  reversed = document.getElementById('reversed')
   , count = document.getElementById('charCount')
   , orig = document.getElementById('original') //EDIT FOR USE WITH SPEECH SCRIPT -Jay
   , oldText = input.value
   , timeout = null;

/* handleChange is called 50ms after the user stops
   typing. */
}
function handleChange(){
  //if (timeout) {
  //  clearTimeout(timeout);
  //}
  console.log("HEADIN TO THAT TIMEOUT");
  //timeout = setTimeout(handleChange, 50);
  //
  console.log("HANDLIN' THAT CHANGE");
  var newText = input.innerHTML; //formerly value
  if (newText == oldText) {
    return;
  } else {
    oldText = newText;
  }
  var p = parseExample(newText);
  var stringSum = "";
  for(i = 0; i < p.length; i++) {
      stringSum += p[i];
      if(i < p.length - 1) { //not the last thing
          stringSum += "<br /> Example:";
      }
  }
  //format for each macro we add - need to modify the html object
  $("#parsed").html(stringSum);
  $("#parsed").html(boldKey(stringSum));
  //sets the original before it
  set(count, 'You entered ' + newText.length + ' characters.');
  set(orig, newText);


/* eventHandler is called on keyboard and mouse events.
   If there is a pending timeout, it cancels it.
   It sets a timeout to call handleChange in 50ms. */
 function eventHandler() {
  if (timeout) {
    clearTimeout(timeout);
  }
  console.log("HEADIN TO THAT TIMEOUT");
  timeout = setTimeout(handleChange, 50);
 }

 //input.onclick = eventHandler;
  //input.onkeydown = input.onkeyup = input.onclick = eventHandler;
  input.onclick = eventHandler;
}
$("#interim_span").text('test').trigger('change');
$("#interim_span").on('change',function(){
     //Do calculation and change value of other span2,span3 here
     console.log("CHANGEY");
     setupUpdater();
});
document.getElementsByTagName('span')[0].focus();
