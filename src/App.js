import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{
      backgroundColor: '#1E3A8A', // deep blue
      minHeight: '100vh',
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        padding: '1.5rem'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#1E3A8A' }}>My To-Do List</h1>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
