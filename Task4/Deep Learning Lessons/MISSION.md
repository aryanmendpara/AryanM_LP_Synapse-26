# Mission: Deep Learning (the Task 4 set)

## Why
Venus is working through the Synapse **Task 4** deep-learning assignment (notebooks `Task_4A` and `Task_4B`) and wants to genuinely *master* deep learning — the neuron, backprop by hand, a full network from scratch, then Keras, CNNs, RNNs, GANs and attention — so it holds up in exams and future ML work, while finishing both notebooks correctly along the way.

## Success looks like
- Explain each idea (neuron, backprop, convolution, recurrence, attention) from memory, in plain words, without notes.
- Derive the gradients by hand: `dL/dZ₃ = A₃ − target` for softmax + cross-entropy, the MSE update for one linear neuron, and the BPTT sum for an RNN.
- Write the code from a blank cell: the perceptron, a from-scratch MLP on MNIST, and Keras `Sequential` models for Dense / Conv / RNN layers.
- Choose hyperparameters (activation, optimizer, loss, learning rate, `max_len`, filter counts) and justify the choice.
- Complete the blank "Answer:" and "doubt" prompts in both Task 4 notebooks with confidence.

## Constraints
- Breadth is scoped to the **Task 4 notebook set**; **depth** is the priority.
- Sessions are short — lessons must be quick to complete and quick to review later.
- Python syntax is taught explicitly alongside the concepts.

## Out of scope (for now)
- Classical / supervised ML (covered in Tasks 1–3).
- Maths beyond what backprop actually needs (measure theory, proofs of convergence).
- Production concerns: deployment, MLOps, distributed training.
