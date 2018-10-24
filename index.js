// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for(var i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty;
}

function johnLennonFacts() {
  var empty = [];
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  var counter = 0;
  while(facts.length > 0) {
    empty.push(facts[counter])
    counter++;
  }
}
