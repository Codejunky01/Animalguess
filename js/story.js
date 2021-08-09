const guess = prompt('What Is The Slow Moving Animal?');
const correct = ("<p>Good Job You Guessed The Correct Answer!</p>");
const incorrect = ("<p>Sorry That Is The Wrong Answer! The Answer Was Turtle!</p>");

if ( guess.toUpperCase() === 'TURTLE' ) {
	document.querySelector('main').innerHTML = correct;
} else {
	document.querySelector('main').innerHTML = incorrect;
}