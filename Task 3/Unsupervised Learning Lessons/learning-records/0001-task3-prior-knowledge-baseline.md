# Task 3 baseline: prior knowledge disclosed

Venus has already worked through most of the Task 3 notebook: data cleaning (missing-value handling, removing negative/zero values and cancelled invoices), customer-level aggregation, `StandardScaler`, PCA with `n_components=0.9`, explained-variance plotting, K-Means (2D/3D + elbow), and Agglomerative with a silhouette score. `Task3Research.docx` (association rules + spectral clustering) is already drafted at a solid explanatory level.

Why this matters: it sets a high floor for *exposure* but a lower floor for *explained understanding*. The remaining gaps are conceptual — the notebook's blank "Answer:" cells (explain PCA, agglomerative in own words, silhouette + two other metrics, DBSCAN completion, K-Means vs Agglomerative reflection). Lessons should start at concepts + justification, not at "what is a cluster".

## Evidence
- Notebook `SynapseLP_Task3.ipynb`: completed preprocessing/PCA/clustering cells.
- Correct-ish notebook answers on imputation-vs-dropping and explained variance.
- Blank/short answers on the deeper "explain" prompts.

## Implications
- Do not re-teach what a cluster or a dataframe is.
- Target the conceptual "why / when / how to justify" layer, and Python syntax from a blank cell.
- Each lesson can double as content for a blank notebook cell.
