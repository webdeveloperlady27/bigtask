# 📝 To-Do List App (React Class Components)

A simple and elegant To-Do List built with **React class components**.  
Users can add, cross out, and delete tasks easily.

---

## 🚀 Features
- ✏️ Add new tasks
- ✅ Cross out completed tasks (click on them)
- 🗑️ Delete all tasks at once
- 💾 Controlled input field
- 🖼️ Custom icon for each task
---

## 🧩 Technologies Used
- **React** (Class Components)
- **JavaScript (ES6)**
- **CSS3**
- **HTML5**

---

## 🗂️ Project Structure
📁 src
┣ 📜 App.js
┣ 📜 ToDoList.js
┣ 🖼️ icon.png
┗ 📜 index.js


---

## ⚙️ How to Run the Project

### 1️⃣ Clone the repository
git clone https://github.com/yourusername/todo-list-class.git
### 2️⃣ Install dependencies
npm install
### 3️⃣ Run the app
npm start

The app will open automatically at http://localhost:3000
---

## 💡 Usage

Type your task into the input field

Click ADD to add it to the list

Click a task to mark it as completed

Click DELETE to clear all tasks

---

## 🧠 Code Overview

Main Component: ToDoList.js

state: stores userInput and toDoList

onChangeEvent(e): updates input value

addItem(input): adds task to the list

crossedWord(event): toggles a CSS class to cross out tasks

deleteItem(): clears all tasks

render(): renders the form, list, and buttons

---

## 🎨 Styling

Add a ToDoList.css file for basic styles:

.container {
  text-align: center;
  margin: 10px;
}

input {
  padding: 10px;
  width: 60%;
  font-size: 16px;
}

.add, .delete {
  margin: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

.crossed {
  text-decoration: line-through;
  color: gray;
}

---

## 🧑‍💻 Author

Viktoriia Adasynska
🇨🇦 Sussex, New Brunswick
📧 vilyamina@gmail.com

---

## 📜 License

This project is licensed under the MIT License.

### MIT License

Copyright (c) 2025 Viktoriia Adasynska

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



