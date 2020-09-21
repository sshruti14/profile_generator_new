const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// r1.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   r1.close();
// });

const questions = [
  `What is your name?`,
  `What's an activity you like doing? `,
  `What do you listen to while doing that?`,
  `Which meal is your favourite ?`,
  `What's your favourite thing to eat for that meal ?`,
  `Which sport is your absolute favourite ?`,
  `What is your superpower?`
];


let answers = [];


const questNext = () =>{
r1.question(questions.shift(), answer => {
  answers.push(answer);
  if(questions.length === 0){
    r1.close();
  }else{
    questNext();
  }
})
}

questNext();

r1.on('close', ()=>{
  answers = {
		name: answers[0],
		activity: answers[1],
		hobby: answers[2],
		food: answers[3],
		ingredient: answers[4],
		sport: answers[5],
		superpower: answers[6]
    }
    
    let paragraph = `
${answers.name} likes ${answers.activity}. ${answers.name}'s hobby is ${answers.hobby}.${answers.name} eats ${answers.food} food, because ${answers.name} likes ${answers.ingredient} very much.
${answers.name}'s favourite sport is ${answers.sport}.In the past, ${answers.name} wished to have ${answers.superpower}.
`;

  console.log(paragraph);

} );

