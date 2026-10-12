# Unsupervised Learning Glossary

The canonical language for this workspace. Terms are added only once demonstrated — the glossary records compressed knowledge, it is not a dictionary to read from.

## Data preparation

**Standardization (z-score scaling)**:
Rescaling each feature to mean 0 and standard deviation 1, so every feature contributes equally to a variance-based method.
_Avoid_: Normalization (that usually means rescaling to [0, 1] — a different thing).

**Imputation**:
Replacing a missing value with a sensible estimate (e.g. the column's median) rather than deleting the whole row.
_Avoid_: Filling in.

## Dimensionality reduction

**Principal Component (PC)**:
A new axis produced by PCA that is a linear combination of the original features and points along a direction of maximum remaining variance; PCs are mutually orthogonal.
_Avoid_: "Factor", "eigenfeature".

**Explained Variance Ratio**:
The fraction of the dataset's total variance captured by one principal component. Cumulatively, it tells you how much information a reduced set of PCs retains.
_Avoid_: "Importance", "weight".

**PCA (Principal Component Analysis)**:
An unsupervised linear method that rotates the feature space onto its principal components, letting you keep the first few and drop the rest with minimal information loss.
_Avoid_: "Feature selection" (PCA builds *new* features; selection keeps originals).
