# CIFAR-10 Kaggle Ready Dataset (Pro)

Structured CIFAR-10 dataset for CNN training.

## Features
- Train / Validation / Test split
- PNG images (32x32 RGB)
- CSV labels
- Preview image
- SHA256 checksums

## Classes
airplane, automobile, bird, cat, deer, dog, frog, horse, ship, truck

## Usage

### PyTorch
from torchvision.datasets import ImageFolder
dataset = ImageFolder("train")

### TensorFlow
tf.keras.preprocessing.image_dataset_from_directory("train")
