/* course-nav.js — injects a lesson switcher + prev/next pager into every lesson.
   Add this once per lesson page (in ./lessons/):
     <script src="../assets/course-nav.js" defer></script>
   To add a lesson, append one entry to the array below. */
(function () {
  var lessons = [
    { n: 1,  file: "0001-artificial-neuron-perceptron.html",  title: "The artificial neuron & perceptron" },
    { n: 2,  file: "0002-learning-rules-activations.html",    title: "Learning rules & activation functions" },
    { n: 3,  file: "0003-xor-linear-separability.html",       title: "The XOR wall" },
    { n: 4,  file: "0004-one-neuron-backprop-addition.html",  title: "Backprop: one neuron learns addition" },
    { n: 5,  file: "0005-nn-from-scratch-mnist.html",         title: "A full network from scratch (MNIST)" },
    { n: 6,  file: "0006-debugging-training.html",            title: "Debugging training" },
    { n: 7,  file: "0007-keras-building-blocks-adult.html",   title: "Keras building blocks (adult income)" },
    { n: 8,  file: "0008-judging-a-model-honestly.html",      title: "Judging a model honestly" },
    { n: 9,  file: "0009-tensors-autodiff.html",              title: "Tensors & automatic differentiation" },
    { n: 10, file: "0010-what-hidden-layers-learn.html",      title: "What hidden layers learn" },
    { n: 11, file: "0011-convolution-and-cnn.html",           title: "Convolution & the CNN" },
    { n: 12, file: "0012-training-cnn-overfitting.html",      title: "Training a CNN & overfitting" },
    { n: 13, file: "0013-transfer-learning.html",             title: "Transfer learning" },
    { n: 14, file: "0014-rnn-from-scratch-bptt.html",         title: "RNNs from scratch & BPTT" },
    { n: 15, file: "0015-keras-rnn-imdb.html",                title: "RNNs in Keras (IMDB sentiment)" },
    { n: 16, file: "0016-why-rnns-fail-lstm.html",            title: "Why RNNs fail: LSTM & GRU" },
    { n: 17, file: "0017-gans.html",                          title: "Generative adversarial networks" },
    { n: 18, file: "0018-transformers-attention.html",        title: "Transformers & attention" }
  ];
  var here = location.pathname.split("/").pop();

  var nav = document.createElement("nav");
  nav.className = "course-nav";
  var html = '<a class="home" href="../index.html">Home</a>';
  lessons.forEach(function (l) {
    var cls = l.file === here ? "active" : "";
    html += '<a class="' + cls + '" href="' + l.file + '" title="' + l.n + '. ' + l.title + '">' + l.n + "</a>";
  });
  nav.innerHTML = html;
  document.body.insertBefore(nav, document.body.firstChild);

  var idx = lessons.findIndex(function (l) { return l.file === here; });
  var prev = lessons[idx - 1];
  var next = lessons[idx + 1];
  if (idx >= 0) {
    var pager = document.createElement("nav");
    pager.className = "lesson-pager";
    pager.innerHTML =
      (prev ? '<a href="' + prev.file + '">← ' + prev.n + ". " + prev.title + "</a>"
            : '<a href="../index.html">← Course home</a>') +
      '<a class="home" href="../index.html">All lessons</a>' +
      (next ? '<a href="' + next.file + '">' + next.n + ". " + next.title + " →</a>"
            : '<a href="../index.html">Course home →</a>');
    document.body.appendChild(pager);
  }
})();
