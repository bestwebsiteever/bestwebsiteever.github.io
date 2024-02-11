document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');

submitBtn.addEventListener('click', function(event)  {
  event.preventDefault();
  let score = 0;
  const correctAnswers = ["TEAM CONRAD!!!", "Skye", "yes", "no", "YESSSS"];

correctAnswers.forEach((answer, index) => {
  const question = document.querySelector(`select[name= "question${index + 1}"]`);
  if (question && question.value === answer) {
      score++;

        }

     });

 resultDiv.innerHTML = `Your score is ${score} out of 10.`;

   });
});