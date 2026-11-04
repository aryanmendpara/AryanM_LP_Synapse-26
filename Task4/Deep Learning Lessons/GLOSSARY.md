# Deep Learning Glossary

The canonical language for this workspace. Lessons use these terms exactly. Builds as understanding deepens — a term appears once the concept can be used correctly.

## The neuron

**Neuron** (unit, node):
The atomic computation of a network: combine inputs with weights and a bias, then squash the result with an activation function. A layer is just many of these run in parallel.
_Avoid_: cell, perceptron (a perceptron is one specific neuron).

**Weight**:
A learnable number multiplying one input before it is summed. Training changes weights; they are what the network "learns".
_Avoid_: parameter (a parameter is any learnable number — weights *and* biases).

**Bias**:
A learnable number added after the weighted sum, independent of the inputs. It shifts the neuron's decision threshold, so the boundary need not pass through the origin.
_Avoid_: intercept being called a weight.

**Weighted sum / pre-activation** (z):
`z = w·x + b`, the raw score before any activation. The `Z` matrices in the from-scratch notebook are this quantity, layer by layer.
_Avoid_: output (the output is post-activation).

**Activation function**:
The non-linear function applied to the weighted sum to produce the neuron's output. Without it, stacked layers collapse into one linear layer.
_Avoid_: transfer function.

**Step function**:
The perceptron's activation: `1` if `z ≥ 0`, else `0`. Flat everywhere except one jump, so it has no usable gradient — which is why later networks use smooth activations.

## Learning

**Perceptron**:
A single neuron with a step activation. It learns a linearly separable rule (OR, AND) and cannot learn one that is not (XOR).

**Perceptron Learning Rule**:
`w ← w + η·(y − ŷ)·x` and `b ← b + η·(y − ŷ)`. Nudge weights toward examples the neuron gets wrong; leave them alone when it is right.
_Avoid_: "Hebbian" for this rule — Hebbian updates on correlation (`η·x·y`), not on error.

**Error term** (`y − ŷ`):
The difference between the true label and the prediction. Zero when correct (no update), `+1` when it should have fired, `−1` when it should not have.

**Learning rate** (η):
How large each update step is. Too small → training crawls; too large → the weights oscillate or explode.

**Epoch**:
One full pass over the training data.

**Decision boundary**:
The surface where the neuron's weighted sum is zero — a line in 2-D, a hyperplane in general. Points on one side fire, points on the other do not.

**Linearly separable**:
A dataset is linearly separable if one straight line (hyperplane) splits its classes. OR and AND are; XOR is not; in this workspace, "linearly separable" always means "one neuron can do it".
