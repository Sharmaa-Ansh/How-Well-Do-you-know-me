var readlineSync=require('readline-sync')
const chalk= require('chalk')
var playerName = readlineSync.question(chalk.bgYellow('Welcome player what is your name? '))
const print = console.log
print('welcome '+ playerName)
var score = 0

function game(ques,ans){
  var useranswer = readlineSync.question(chalk.keyword('orange')(ques))
  if(useranswer.toUpperCase()===ans.toUpperCase()){
    print(chalk.green('You are corret'))
    print(chalk.bold('-*-*-*-*-*-*-*-*-*-'))
    score= score+1
  }
  else
  {
    print(chalk.red('You are wrong'))
    print(chalk.bold('-*-*-*-*-*-*-*-*-*-'))
  }
}

var quesBank =[ setOne= {
  question: 'Am I an android person or ios person ',
  answer: 'android',
 },

  setTwo={
     question: 'What is my fav colour ',
  answer: 'Black',
  }, 
  setThree={
     question: 'Do I have any Siblings ',
  answer: 'No',
  }, 
  setFour={
     question: 'How old am I ',
  answer: '20',
  }, 
  setFive={
     question: 'Where do I live ',
  answer: 'Delhi',
  }]

  for(var i=0;i<quesBank.length;i++){
    game(quesBank[i].question, quesBank[i].answer)
  }

  print(chalk.italic.cyan('Your final score is '+ score))