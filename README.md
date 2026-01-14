# 🧮 Calculator Web Application

A modern, responsive calculator web application with **Light & Dark Mode support**, built using **HTML, CSS, and JavaScript**.  
The project focuses on clean UI design, smooth user experience, and accurate calculations.

![status](https://img.shields.io/badge/status-active-brightgreen)
![platform-web](https://img.shields.io/badge/platform-web-lightgrey)
![tech-html](https://img.shields.io/badge/tech-HTML%2FCSS%2FJS-orange)

---

## ✨ Features

- Basic arithmetic: `+ - × ÷`
- Clear (C) & All Clear (AC)
- Keyboard + on-screen inputs
- Responsive UI (desktop & mobile)
- Theme tokens for easy customization
- Accessible colors + focus states
- Compact & easy to extend

---

## 🚀 Getting Started

### **Prerequisites**
- Any modern browser (Chrome / Firefox / Edge / Safari)
- *(Optional)* Node.js if using build tooling

### **Install / Run**

#### **Static deployment**
```sh
git clone https://github.com/vishwesh9835/Calculator.git
cd Calculator
open index.html
```


#### **If using a JS toolchain**
```sh
git clone https://github.com/vishwesh9835/Calculator.git
cd Calculator
npm install
npm start
npm run build   # production build
```

---

## 🎮 Usage

Keyboard Shortcuts:
| Key | Action |
|---|---|
| `0-9` | Enter numbers |
| `+ - * /` | Operators |
| `Enter` | Equals (`=`) |
| `Backspace` | Delete last |
| `Esc` | Clear all (AC) |

Example:
```
2 + 2 = 4
```

---

## 🎨 Theme & Design System

This project uses **token-based theming** for predictable styling.

### **Color Tokens**
| Token | Value | Purpose |
|---|---|---|
| `--color-primary` | `#1E88E5` | main UI actions |
| `--color-secondary` | `#FFC107` | accents |
| `--color-surface` | `#FFFFFF` | backgrounds |
| `--color-text` | `#212121` | main text |
| `--color-error` | `#E53935` | invalid input |
| `--color-success` | `#43A047` | eval outputs |

### **Typography Tokens**
- Family: `"Inter", system-ui, sans-serif`
- Base size: `16px`
- Weights: `400 / 600 / 700`
- Line Height: `1.4–1.6`

### **Spacing Tokens**
Base unit: `8px`  
Scale: `4 / 8 / 16 / 24 / 32`px

### **Accessibility**
- WCAG AA contrast targets
- Visible focus rings
- ARIA roles for controls
- Minimum touch target `44px`

---

## 🧱 Implementation (CSS Variables)

```css
:root {
  --color-primary: #1E88E5;
  --color-secondary: #FFC107;
  --color-surface: #FFFFFF;
  --color-surface-elevated: #F5F5F5;
  --color-text: #212121;
  --color-text-muted: #6B6B6B;
  --color-success: #43A047;
  --color-error: #E53935;

  --font-family-base: "Inter", system-ui, sans-serif;
  --font-size-base: 16px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;

  --radius-sm: 6px;
  --radius-md: 12px;
  --elevation-1: 0 1px 3px rgba(0,0,0,0.08);
}
```

---

## 🌗 Theme Variants (Dark / High-Contrast)

```css
:root[data-theme="dark"] {
  --color-surface: #121212;
  --color-surface-elevated: #1E1E1E;
  --color-text: #E6E6E6;
  --color-text-muted: #B0B0B0;
  --color-primary: #90CAF9;
}

:root[data-theme="high-contrast"] {
  --color-primary: #000;
  --color-surface: #FFF;
  --color-text: #000;
}
```

---

## 📦 Tech Stack

- **HTML** — structure
- **CSS** — theming + responsive design
- **JavaScript** — logic, state, keyboard support

---


## 📬 Contact

Maintainer: **@vishwesh9835**  
Project: `https://github.com/vishwesh9835/Calculator`

