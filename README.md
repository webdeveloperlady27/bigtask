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


