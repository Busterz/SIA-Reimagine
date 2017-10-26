alert("Running app 1");//Debugging

//Initialize a new set of data
var questions = [
    new Question("Question 1", ["A", "B", "C", "D"], "A"),
    new Question("Question 2", ["A", "B", "C", "D"], "A"),
    new Question("Question 3", ["A", "B", "C", "D"], "A"),
    new Question("Question 4", ["A", "B", "C", "D"], "A")
];

//Intialize a new quiz
var quiz = new Quiz(questions);

function showScores()
{
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz-box");
    element.innerHTML = gameOverHtml;
}

function guessAns(id, guess)
{
    var button = document.getElementById(id);
    button.onclick = function()
    {
        alert("button clicked");//Debugging
        quiz.guess(guess);
        startApp();
    }
}

function showProgress()
{
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function startApp()
{
    if(quiz.isEnded())
        {
            alert('here!');//Debugging
            showScores();
        }
    else
        {
            //Push the Question
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().question;

            //showChoices();
            var choices = quiz.getQuestionIndex().choices;
            for (var i = 0; i < choices.length; i++)
                {
                    var element = document.getElementById("choice"+i);
                    element.innerHTML = choices[i];
                    guessAns("btn" + i, choices[i]);
                }
            showProgress();//Update the current Question Number
        }
    alert("Running app 2");//Debugging
}

startApp();
