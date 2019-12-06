var quiz = [
    {question: "1. What is Newton's First Law of Motion?",
    answer1: "\"The acceleration produced by net force is directly proportional to the net force and in the same direction, but inversely proportional to mass.\"",
    answer2: "\"Every object continues in a state of rest or a uniform speed in a straight line unless acted on by a net force.\"",
    answer3: "\"Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object.\"",
    answer4: "None of the above"},
    {question: "2. What is Newton's Second Law of Motion?",
    answer1: "\"The acceleration produced by net force is directly proportional to the net force and in the same direction, but inversely proportional to mass.\"",
    answer2: "\"Every object continues in a state of rest or a uniform speed in a straight line unless acted on by a net force.\"",
    answer3: "\"Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object.\"",
    answer4: "None of the above"},
    {question: "3. What is Newton's Third Law of Motion?",
    answer1: "\"The acceleration produced by net force is directly proportional to the net force and in the same direction, but inversely proportional to mass.\"",
    answer2: "\"Every object continues in a state of rest or a uniform speed in a straight line unless acted on by a net force.\"",
    answer3: "\"Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object.\"",
    answer4: "None of the above"},
    {question: "4. What is the acceleration of an object when the mass of an object is equal to the net force applied to it?",
    answer1: "1 m/s^2",
    answer2: "2 m/s^2",
    answer3: "3 m/s^2",
    answer4: "0 m/s^2",},
    {question: "5. What will happen to the acceleration if you double the mass of the object and apply the same amount of force to it?",
    answer1: "acceleration will be a third",
    answer2: "acceleration will halve",
    answer3: "acceleration will triple",
    answer4: "acceleration will double",}
]

function appendQuiz(quiz) {
  quiz.forEach(function(question) {
    $('.quiz').append(`<p>${question.question}</p>`);
    $('.quiz').append(`<div class="radio"><input type="radio">a) ${question.answer1}</div>`);
    $('.quiz').append(`<div class="radio"><input type="radio">b) ${question.answer2}</div>`);
    $('.quiz').append(`<div class="radio"><input type="radio">c) ${question.answer3}</div>`);
    $('.quiz').append(`<div class="radio"><input type="radio">d) ${question.answer4}</div>`);
  })
  $('.quiz').append(`<br>`)
  $('.quiz').append(`<input type="button" onclick="seeAnswers(correct)" value="See Correct Answers" class="see-correct-answers">`)
}

var correct = [
  {correctAnswer: "1. \"Every object continues in a state of rest or a uniform speed in a straight line unless acted on by a net force.\""},
  {correctAnswer: "2. \"The acceleration produced by net force is directly proportional to the net force and in the same direction, but inversely proportional to mass.\""},
  {correctAnswer: "3. \"Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object.\""},
  {correctAnswer: "4. 0 m/s^2"},
  {correctAnswer: "5. acceleration will halve"}]

function seeAnswers(correct) {
  correct.forEach(function(answers) {
    $('.quiz').append(`<div><p>${answers.correctAnswer}</p></div>`)
  })
}
