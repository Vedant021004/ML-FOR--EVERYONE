# Neural Networks from Scratch (NumPy)

> A complete beginner-to-advanced guide to understanding Neural Networks, Backpropagation, and Gradient Descent using only Mathematics and NumPy.

---

# Learning Philosophy

The goal is **not** to memorize formulas.

The goal is to answer three questions for every concept:

1. **What is it?**
2. **Why do we need it?**
3. **How does it work mathematically?**

If you cannot answer these three questions, do not move forward.

---

# Learning Roadmap

```
Single Neuron
        ↓
Forward Propagation
        ↓
Loss Function
        ↓
Derivatives
        ↓
Chain Rule
        ↓
Backpropagation
        ↓
Gradient Descent
        ↓
Hidden Layer
        ↓
Multi Layer Neural Network
        ↓
Deep Neural Networks
```

---

# Chapter 1 — The Goal of a Neural Network

A Neural Network is simply a mathematical function that learns a relationship between inputs and outputs.

Example:

Hours Studied → Pass / Fail

House Size → Price

Image → Cat or Dog

It receives input, performs mathematical operations, and produces an output.

---

# Chapter 2 — Single Neuron

Architecture

```
Input
   │
   ▼
Linear Function
   │
   ▼
Activation Function
   │
   ▼
Prediction
```

---

Equation

```
z = xw + b
```

Where

x → Input

w → Weight

b → Bias

z → Weighted Sum

---

Prediction

```
ŷ = sigmoid(z)
```

---

# Why Weight?

Weight determines the importance of a feature.

Example

Hours Studied = Important

Favorite Color = Less Important

The network learns these importance values.

---

# Why Bias?

Without bias,

```
y = mx
```

The line always passes through the origin.

Bias shifts the decision boundary.

```
y = mx + b
```

---

# Why Sigmoid?

The weighted sum can be any number.

```
-100

0

500
```

But probabilities must be between

```
0

and

1
```

Sigmoid converts any real number into a probability.

```
σ(z)=1/(1+e^-z)
```

---

# Forward Propagation

Data moves from Input to Prediction.

Flow

```
Input

↓

Multiply by Weight

↓

Add Bias

↓

Sigmoid

↓

Prediction
```

NumPy

```python
z = np.dot(x, w) + b

prediction = sigmoid(z)
```

---

# Loss Function

Prediction

```
0.75
```

Actual

```
1
```

Difference

```
0.25
```

Loss measures how wrong the prediction is.

Mean Squared Error

```
L = (y-ŷ)^2
```

Smaller Loss = Better Model

---

# Learning

Forward Propagation only makes predictions.

It does NOT learn.

To learn, the network must answer

> Which weight caused the mistake?

---

# Chain Rule

Relationship

```
Weight

↓

Z

↓

Prediction

↓

Loss
```

Weight does NOT directly affect the loss.

It affects

```
Weight

↓

Z

↓

Prediction

↓

Loss
```

Therefore

```
dL/dw

=

dL/dŷ

×

dŷ/dz

×

dz/dw
```

---

# Meaning of Every Derivative

### dL/dŷ

How much does Loss change if Prediction changes?

---

### dŷ/dz

How much does Prediction change if Z changes?

---

### dz/dw

How much does Z change if Weight changes?

---

Multiply all three to obtain

```
dL/dw
```

---

# Backpropagation

Backpropagation computes gradients.

It starts from the Loss.

Flow

```
Loss

↑

Prediction

↑

Z

↑

Weight
```

It computes local derivatives one step at a time.

It does NOT update weights.

---

# Gradient Descent

Gradient Descent updates the weights.

Formula

```
w = w - learning_rate × gradient
```

If Gradient is positive

↓

Decrease Weight

If Gradient is negative

↓

Increase Weight

---

# NumPy Implementation

```python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

x = np.array([[2]])
y = np.array([[1]])

w = np.array([[0.5]])
b = np.array([[0.1]])

# Forward
z = np.dot(x, w) + b
prediction = sigmoid(z)
loss = (y - prediction) ** 2

# Backpropagation
dL_dprediction = -2 * (y - prediction)
dprediction_dz = prediction * (1 - prediction)
dz_dw = x

dL_dw = dL_dprediction * dprediction_dz * dz_dw

# Gradient Descent
learning_rate = 0.1
w = w - learning_rate * dL_dw
```

---

# Complete Flow

```
Input
      │
      ▼
Weighted Sum
      │
      ▼
Activation
      │
      ▼
Prediction
      │
      ▼
Loss
      │
      ▼
Backpropagation
      │
      ▼
Gradient
      │
      ▼
Gradient Descent
      │
      ▼
Updated Weight
```

---

# Key Difference

Forward Propagation

```
Prediction
```

Backpropagation

```
Gradient Calculation
```

Gradient Descent

```
Weight Update
```

---

# Things to Remember

A Neural Network is just repeated Linear Algebra.

Backpropagation is just repeated Chain Rule.

Gradient Descent only updates weights.

Weights represent importance.

Bias shifts the decision boundary.

Activation introduces non-linearity.

Loss measures mistakes.

Gradient measures sensitivity.

Learning Rate controls update size.

---

# Master Prompt

Whenever you explain Machine Learning, Deep Learning, Neural Networks, CNNs, RNNs, Transformers, LLMs, Backpropagation, Gradient Descent, Optimizers, PyTorch, TensorFlow, or any mathematical concept:

- Teach exactly like Andrew Ng.
- Never skip mathematical steps.
- Begin with intuition before formulas.
- Explain **What**, **Why**, and **How** for every concept.
- Use simple real-world analogies before equations.
- Introduce one concept at a time.
- Derive formulas instead of asking me to memorize them.
- Show the complete flow of data through the model.
- Explain every variable in every equation.
- Use fixed numerical examples before general formulas.
- Show both the mathematical derivation and the equivalent NumPy code.
- Explain what each line of code is doing mathematically.
- Build concepts incrementally: one neuron → multiple neurons → hidden layer → deep network.
- Explain backpropagation using the chain rule step by step.
- Treat every derivative as answering the question, "How does this quantity change when that quantity changes?"
- Assume I am learning from first principles, and don't assume prior calculus knowledge.
- Never jump over intermediate reasoning. If a formula appears, derive it.
- End every lesson with a summary and a preview of the next concept.
