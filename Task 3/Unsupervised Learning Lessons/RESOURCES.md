# Unsupervised Learning Resources

Trusted sources for the Task 3 set (PCA, clustering, association rules, spectral clustering). Lessons draw knowledge from here, not from guesses.

## Knowledge

- [Book: _An Introduction to Statistical Learning_ (ISLR), 2nd ed. — free PDF](https://www.statlearning.com/)
  The gentlest rigorous textbook. Use for: intuition + maths behind PCA, K-Means, hierarchical clustering, and the bias/variance framing. Chapters 10 (unsupervised) and 12.
- [Book: _The Elements of Statistical Learning_ (ESL) — free PDF](https://hastie.su.domains/ElemStatLearn/)
  The harder, definitive reference by the same authors. Use for: the spectral-clustering / graph-Laplacian derivation and PCA via SVD, when ISLR isn't enough.
- [Docs: scikit-learn — Unsupervised learning user guide](https://scikit-learn.org/stable/unsupervised_learning.html)
  The primary API reference. Use for: exact parameter names, default values, and the algorithm-choosing flowchart (2.3.1).
- [Docs: scikit-learn — Clustering](https://scikit-learn.org/stable/modules/clustering.html)
  Comparison of K-Means, Agglomerative, DBSCAN + which handles which cluster shape. Use for: picking an algorithm for a dataset.
- [Docs: scikit-learn — PCA (`sklearn.decomposition.PCA`)](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html)
  Use for: `n_components`, `explained_variance_ratio_`, `fit` / `transform` syntax.
- [Docs: scipy — `dendrogram`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.dendrogram.html)
  Use for: plotting the hierarchical-clustering tree.
- [Docs: mlxtend — frequent patterns (`apriori`, `association_rules`)](https://rasbt.github.io/mlxtend/user_guide/frequent_patterns/apriori/)
  Use for: the association-rules pipeline in Python (TransactionEncoder → apriori → association_rules).
- [Video: StatQuest — "PCA, Step-by-Step"](https://www.youtube.com/watch?v=FgakZw6K1QQ)
  Best intuition-first walkthrough of PCA. Use for: understanding what components/variance mean before the maths.
- [Video: StatQuest channel](https://www.youtube.com/c/joshstarmer)
  Use for: K-Means, hierarchical clustering, and other stats concepts, each in a short, plain-language video.
- [Paper: Agrawal & Srikant, "Fast Algorithms for Mining Association Rules" (1994)](https://www.vldb.org/conf/1994/P487.PDF)
  The original Apriori paper. Use for: the Apriori property and why candidate pruning works.
- [Article: Analytics Vidhya — "Comprehensive Guide to K-means Clustering"](https://www.analyticsvidhya.com/blog/2019/08/comprehensive-guide-k-means-clustering/)
  Cited by the task itself. Use for: elbow method, worked K-Means example.
- [Article: Analytics Vidhya — "How DBSCAN Clustering Works"](https://www.analyticsvidhya.com/blog/2020/09/how-dbscan-clustering-works/)
  Cited by the task. Use for: `eps` / `min_samples`, core/border/noise points.

## Wisdom (Communities)

- [r/learnmachinelearning](https://reddit.com/r/learnmachinelearning)
  Beginner-friendly, moderated. Use for: "is my understanding of X right?" sanity checks.
- [Cross Validated (stats.stackexchange.com)](https://stats.stackexchange.com/)
  High-reputation Q&A for statistics/ML theory. Use for: why-question deep dives (e.g. "why normalize before PCA?").
- [scikit-learn GitHub Discussions](https://github.com/scikit-learn/scikit-learn/discussions)
  Maintainers answer. Use for: API-specific behaviour questions.
- Local: Synapse mentor / class cohort
  Use for: what the grader expects on Task 3 specifically.

## Gaps
- No single high-trust source yet for **association-rule metric interpretation** beyond the original paper. Find one before the association-rules lesson.
- Wisdom communities: confirm with Venus whether she wants to join any.
