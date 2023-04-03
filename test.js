let readline = require('readline');

let randomNumber = Math.round(Math.random() * 10);
let lives = 5;


// c'est l'interface
var terminal = readline.createInterface(
{
  input : process.stdin,
  output : process.stdout
});

terminal.setPrompt('devine un nombre (de 1 à 10): ');
terminal.prompt();


terminal.on('line', function(answer)
{
    // valeur aleatoir 
  var answerNum = parseInt(answer);



  //structure conditionnel
  if (answerNum > randomNumber)
  {
    console.log('trop grand!');
    console.log('tu as '+lives+' vie restantes');
  }

  else if (answerNum < randomNumber)
  {
    console.log('trop petit!');
    console.log('tu as '+lives+' restantes');
  }

  else if (answerNum === randomNumber)
  {
    console.log('G A G N E R');
    console.log('tu as perdu'+ (6-lives) + ' vie');
    process.exit(0);
  }

  else
  {
    console.log("Nombre inconnu");
    console.log('tu as '+lives+'  vie');
  }

  lives--;
  if (lives == 0)
  {
    console.log('G A M E  O V E R ! ! !');
    process.exit(0);
  }

  terminal.prompt();
});




//close
terminal.on('fermer', function()
{
  console.log('fermer')
  process.exit(1);
});