# Notes

Working notes and preferences for this workspace.

## Preferences
- **Goal:** deep mastery (exams + career), not just finishing the task. Breadth scoped to the Task 4 notebook set.
- **Deliverables:** lessons should also help complete the actual Task 4 notebook answers and "doubt" prompts.
- Wants Python **syntax** taught explicitly alongside the concepts.
- Lessons must be **short** and quick to review later.
- **Per topic:** intuition first → math step by step → code lines explained + expected output → common mistakes → 5-bullet recap → 2–3 practice exercises (hints only) → a quiz of 8–10 questions with answers at the end.
- House style mirrors the Task 3 course (`Task 3/Unsupervised Learning Lessons/`) exactly; the two are one series.

## Context
- This workspace lives inside the Task 4 folder, so the coursework files sit beside it in the parent `..`:
  - notebooks `Task_4A.ipynb` (ANNs) and `Task_4B.ipynb` (CNN / RNN / GAN / Transformers).
  - datasets `adult.csv`, `mnist/mnist_train.csv` + `mnist/mnist_test.csv`, `cifar10/`.
- The notebooks are **fill-in-the-gaps templates**: many code cells have blanks and most are unsolved, so treat them as the exercise surface, not as prior work.
- The notebooks' `doubt …` prompts become **practice exercises**; the `BONUS` / `RESEARCH` prompts become deeper exercises or reading.
- Known notebook typos to teach around: "activation = softmax = log(e^x + 1)" conflates **softmax** and **softplus** (softplus is `log(1 + eˣ)`); the diagram's first-layer bias is `n×1`, not `m×1`.
- Datasets are local, but the notebooks reference Google-Drive paths (`/content/drive/MyDrive/...`) — re-point reads at the local files.

## Reusable components (`assets/`)
- `course.css` — shared Tufte stylesheet (copied from Task 3).
- `quiz.js` — click-a-choice MCQ widget with immediate feedback.
- `course-nav.js` — lesson switcher + prev/next pager (18 lessons registered).
