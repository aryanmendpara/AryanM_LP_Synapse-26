# Deep Learning Resources

Curated, high-trust sources for this workspace. Lesson knowledge is drawn from here, not from memory. Most links also appear in the Task 4 notebooks.

## Knowledge

**Foundations & backprop**
- [Video: 3Blue1Brown — *Neural Networks* (playlist, watch ch. 1–4)](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
  The best visual grounding for neurons, gradient descent, and backprop. Use for: first intuition on any "what is happening inside" question.
- [Video: StatQuest — *Perceptron* and *Neural Networks* series](https://www.youtube.com/watch?v=vhJaUWGqQC8)
  Slow, gentle, worked arithmetic. Use for: the perceptron rule and activation functions.
- [Article: "Learn to build a neural network from scratch" — Waad Al-Humaimidi (Medium)](https://medium.com/@waadlingaadil/learn-to-build-a-neural-network-from-scratch-yes-really-cac4ca457efc)
  End-to-end by-hand derivation of forward + backward on MNIST. Use for: the from-scratch MLP lessons.
- [Article: "Backpropagation through time isn't complicated (until it is)" — Mahek Sanghvi](https://medium.com/@maheksanghvi2006/backpropagation-through-time-isnt-complicated-until-it-is-4fb2ebf55d61)
  The RNN/BPTT article the 4B notebook links (written by the mentor). Use for: vanishing/exploding gradients.
- [Article: "Understanding LSTM Networks" — Christopher Olah](https://colah.github.io/posts/2015-08-Understanding-LSTMs/)
  The canonical LSTM explanation. Use for: why the gate design fixes long-range memory.

**Frameworks & practice**
- [Docs: Keras — Sequential / Layer / Optimizer APIs](https://keras.io/api/models/sequential/)
  The reference the 4A notebook points you to. Use for: exact method signatures (`compile`, `fit`, `evaluate`).
- [Docs: TensorFlow — Keras transfer learning guide](https://keras.io/guides/transfer_learning/) and [CS231n — Transfer Learning](https://cs231n.github.io/transfer-learning/)
  Use for: freezing, feature extraction, fine-tuning.
- [Interactive: TensorFlow Playground](https://playground.tensorflow.org/)
  Tinker with layers/activations/learning rate live. Use for: seeing what hidden layers buy you (the spiral demo).
- [Interactive: CNN Explainer (Polo Club, Georgia Tech)](https://poloclub.github.io/cnn-explainer/)
  Watch an image flow layer by layer. Use for: convolution intuition.
- [Paper: *Attention Is All You Need* (Vaswani et al., 2017)](https://arxiv.org/pdf/1706.03762)
  The transformer paper. Use for: the final research topic.
- [Course notes: CS231n — Convolutional Networks](http://cs231n.github.io/convolutional-networks/)
  Use for: the rigorous version of the CNN lesson.

## Wisdom (Communities)

- [r/learnmachinelearning](https://reddit.com/r/learnmachinelearning)
  Beginner-friendly, well-moderated. Use for: "why doesn't my net train?" sanity checks.
- [Kaggle Discussions](https://www.kaggle.com/discussions)
  Use for: notebooks, datasets, and competition-grade CNN/RNN practices.
- [fast.ai Forums](https://forums.fast.ai/)
  Use for: practitioner-level deep-learning questions and course cohorts.

## Gaps
- No local (offline / in-person) deep-learning study group identified yet.
