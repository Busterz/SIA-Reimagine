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
    if(quiz.score > 2)
        {
            gameOverHtml += "<p>Congratulations! You may proceed to the next stage of the recruitment.</p>";
            gameOverHtml += "<a href='second-round.html' class='blue-orange-button'>Proceed</a>";
        }
    else
        {
            gameOverHtml += "<p>We are regretful not to have you in for this batch. Nonetheless, you could still try to re-apply in the next batch";
        }
    var element = document.getElementById("quiz-box");
    element.innerHTML = gameOverHtml;
}

function guessAns(id, guess)
{
    var button = document.getElementById(id);
    button.onclick = function()
    {
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
}

startApp();
