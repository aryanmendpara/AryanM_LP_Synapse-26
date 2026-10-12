/* course-nav.js — injects a lesson switcher + prev/next pager into every lesson.
   Add this once per lesson page (in ./lessons/):
     <script src="../assets/course-nav.js" defer></script>
   To add a lesson, append one entry to the array below. */
(function () {
  var lessons = [
    { n: 1, file: "0001-pca-explained-variance.html", title: "PCA & explained variance" },
    { n: 2, file: "0002-kmeans-elbow-method.html",      title: "K-Means & the elbow method" },
    { n: 3, file: "0003-hierarchical-clustering.html",  title: "Hierarchical clustering" },
    { n: 4, file: "0004-cluster-evaluation.html",       title: "Evaluating clusters" },
    { n: 5, file: "0005-dbscan.html",                   title: "DBSCAN" },
    { n: 6, file: "0006-association-rules.html",        title: "Association rules" },
    { n: 7, file: "0007-spectral-clustering.html",      title: "Spectral clustering" }
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
            : '<a href="../reference/unsupervised-map.html">Reference map →</a>');
    document.body.appendChild(pager);
  }
})();
