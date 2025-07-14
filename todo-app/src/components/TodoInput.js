import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
        style={{
          flex: 1,
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 16px',
          borderRadius: '6px',
          backgroundColor: '#1E3A8A',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;