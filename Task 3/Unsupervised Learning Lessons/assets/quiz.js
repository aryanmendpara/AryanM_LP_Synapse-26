/* quiz.js — reusable multiple-choice widget with immediate feedback.
   Markup:
     <div class="quiz" data-explain="why the answer is right">
       <p class="quiz-q">Question?</p>
       <button class="quiz-opt" data-correct="false">Option</button>
       <button class="quiz-opt" data-correct="true">Option</button>
       ...
       <p class="quiz-feedback" hidden></p>
     </div>
   One click per quiz; the correct option is always revealed. */
document.querySelectorAll("[data-quiz], .quiz").forEach(function (quiz) {
  var opts = quiz.querySelectorAll(".quiz-opt");
  var fb = quiz.querySelector(".quiz-feedback");
  var done = false;
  opts.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (done) return;
      done = true;
      var correct = btn.dataset.correct === "true";
      if (correct) {
        btn.classList.add("is-correct");
      } else {
        btn.classList.add("is-wrong");
        opts.forEach(function (o) {
          if (o.dataset.correct === "true") o.classList.add("is-correct");
        });
      }
      if (fb) {
        fb.hidden = false;
        fb.textContent =
          (correct ? "Correct. " : "Not quite. ") + (quiz.dataset.explain || "");
      }
    });
  });
});
