import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 12px',
            marginBottom: '8px',
            background: '#f1f5f9',
            borderRadius: '6px',
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#888' : '#111',
            fontSize: '16px'
          }}
        >
          <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{
              background: '#EF4444',
              border: 'none',
              borderRadius: '50%',
              color: '#fff',
              width: '28px',
              height: '28px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            title="Delete"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;