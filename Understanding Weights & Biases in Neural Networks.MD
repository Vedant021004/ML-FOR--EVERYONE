# Understanding Weights & Biases in Neural Networks

A beginner-friendly guide to understanding one of the most confusing concepts in neural networks—**weights** and **biases**.

This repository is based on concepts from **Andrew Ng's Deep Learning Specialization**, with explanations written in simple language for students who are learning neural networks for the first time.

---

## Why This Repository?

Many beginners can write code like:

```python
z = np.dot(w, x) + b
```

but often struggle to answer questions like:

- Why does a neuron have multiple weights?
- Why are weights different for every neuron?
- Why does every neuron have its own bias?
- Why does the second layer have more or fewer weights?
- How do TensorFlow and PyTorch create these values?

This repository answers these questions using intuitive examples instead of jumping directly into mathematical notation.

---

# Neural Network Architecture

```
            Input Layer
         ┌──────────────┐
         │ Temperature  │
         │     Time     │
         └──────┬───────┘
                │
     ┌──────────┼──────────┐
     │          │          │
     ▼          ▼          ▼
   Neuron1   Neuron2   Neuron3
     │          │          │
     └──────────┼──────────┘
                ▼
          Output Neuron
```

---

# What is a Neuron?

A neuron receives inputs, multiplies them by weights, adds a bias, and then applies an activation function.

Mathematically,

\[
z = w_1x_1 + w_2x_2 + \cdots + w_nx_n + b
\]

\[
a = g(z)
\]

where

- **x** → Inputs
- **w** → Weights
- **b** → Bias
- **g()** → Activation Function

---

# Understanding Inputs

Suppose

```python
x = [200, 17]
```

where

```
x₁ = Temperature = 200

x₂ = Time = 17
```

The neuron receives **2 inputs**.

---

# What are Weights?

Suppose

```python
w = [1, 2]
```

This means

```
Temperature → Weight = 1

Time → Weight = 2
```

The neuron computes

```
200 × 1

17 × 2
```

Every input has exactly **one corresponding weight**.

---

# Why Does a Neuron Have Two Weights?

Because it receives **two inputs**.

```
Temperature ─── Weight₁ ──┐
                          │
                          ▼
                        Neuron
                          ▲
                          │
Time ───────── Weight₂ ───┘
```

### General Rule

> **Number of Weights = Number of Inputs**

Examples

| Inputs | Weights |
|---------|----------|
| 2 | 2 |
| 5 | 5 |
| 128 | 128 |

---

# Why Are Weights Different for Every Neuron?

Imagine three coffee experts evaluating the same coffee.

Each expert receives

```
Temperature = 200

Time = 17
```

Expert 1

```
Temperature → 1

Time → 2
```

Expert 2

```
Temperature → -3

Time → 4
```

Expert 3

```
Temperature → 5

Time → -6
```

All experts receive the **same information**, but each gives it different importance.

Neurons work exactly the same way.

---

## What Happens If All Neurons Have the Same Weights?

Suppose every neuron has

```
[1, 2]
```

Then every neuron produces the same output.

```
Neuron 1 → 0.95

Neuron 2 → 0.95

Neuron 3 → 0.95
```

Having multiple neurons would become useless.

Different weights allow different neurons to learn different patterns.

---

# What is Bias?

Bias is an additional trainable value added after the weighted sum.

```
Output = (Weights × Inputs) + Bias
```

Think of it as a bonus or adjustment.

Example

Teacher 1

```
Marks + 5
```

Teacher 2

```
Marks -10
```

Teacher 3

```
Marks +20
```

The bonus is similar to the bias.

---

# Why Does Every Neuron Have Its Own Bias?

Each neuron learns a different feature.

Therefore every neuron needs its own adjustment.

Example

```
Neuron 1

Bias = -1

Neuron 2

Bias = 1

Neuron 3

Bias = 2
```

If all neurons had the same bias, they would lose flexibility and learn similar behaviours.

---

# First Layer vs Second Layer

## First Layer

Input

```
[200, 17]
```

Each neuron receives **2 inputs**.

Therefore

```
Neuron 1 → 2 weights

Neuron 2 → 2 weights

Neuron 3 → 2 weights
```

Outputs become

```
a₁₁

a₁₂

a₁₃
```

---

## Second Layer

The second layer no longer receives

```
200

17
```

Instead it receives

```
a₁₁

a₁₂

a₁₃
```

Now there are **3 inputs**.

Therefore the output neuron requires **3 weights**.

```
[-7, 8, 9]
```

---

# General Rule

Always ask one question:

> **How many values are entering this neuron?**

The answer is exactly the number of weights.

```
2 Inputs → 2 Weights

5 Inputs → 5 Weights

100 Inputs → 100 Weights
```

---

# Where Do Weights and Biases Come From?

Andrew Ng uses simple numbers like

```python
[1, 2]

[-3, 4]

[5, -6]
```

only to explain the mathematics.

In real neural networks,

- TensorFlow initializes weights randomly.
- PyTorch initializes weights randomly.
- During training, **Backpropagation** updates both weights and biases automatically.

No one manually chooses them.

---

# Learning Flow

```
Inputs
    │
    ▼
Multiply by Weights
    │
    ▼
Add Bias
    │
    ▼
Activation Function
    │
    ▼
Output
```

---

# Key Takeaways

- Every input has one corresponding weight.
- Number of weights equals the number of inputs.
- Different neurons have different weights because they learn different patterns.
- Bias shifts the neuron's activation.
- Every neuron has its own bias.
- Weights and biases are trainable parameters.
- TensorFlow and PyTorch learn these values automatically during training.

---

## Repository Goal

This repository is designed for students who want to build an intuitive understanding of neural networks before diving into TensorFlow, PyTorch, or deep learning frameworks.

If this guide helped you understand neural networks better, consider giving the repository a ⭐.
