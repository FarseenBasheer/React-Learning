import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState(() => {
    // Load tasks from localStorage on initial render
    const savedToDos = localStorage.getItem('toDos');
    return savedToDos ? JSON.parse(savedToDos) : [];
  });
  const [toDo, setToDo] = useState('');
  const [filter, setFilter] = useState('all');
  const [validationMessage, setValidationMessage] = useState('');
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const filteredToDos = toDos.filter((obj) => {
    if (filter === 'active') return !obj.status;
    if (filter === 'completed') return obj.status;
    return true; // 'all'
  });

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    setToDos(
      toDos.map((item) =>
        item.id === id ? { ...item, text: editText.trim() } : item
      )
    );
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDay} 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => {
            if (e.target.value.length <= 50) {
              setToDo(e.target.value);
              setValidationMessage('');
            }
          }}
          type="text"
          placeholder="🖊️ Add item (max 50 chars)..."
          maxLength="50"
        />
        <i
          onClick={() => {
            if (toDo.trim()) {
              setToDos([...toDos, { id: Date.now(), text: toDo.trim(), status: false }]);
              setToDo('');
              setValidationMessage(''); // Clear validation message
            } else {
              setValidationMessage('Task cannot be empty!');
            }
          }}
          className="fas fa-plus"
        ></i>
        <p className={`charCounter ${toDo.length === 50 ? 'maxReached' : ''}`}>
          {toDo.length}/50
        </p>
      </div>
      {validationMessage && (
        <p className="validationMessage">{validationMessage}</p>
      )}
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <div className="todos">
        {filteredToDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                type="checkbox"
                checked={obj.status}
                onChange={(e) => {
                  setToDos(
                    toDos.map((item) =>
                      item.id === obj.id ? { ...item, status: e.target.checked } : item
                    )
                  );
                }}
              />
              {editId === obj.id ? (
                <input
                  type="text"
                  className='editInput'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  maxLength="50"
                />
              ) : (
                <p style={{ textDecoration: obj.status ? 'line-through' : 'none' }}>
                  {obj.text}
                </p>
              )}
            </div>
            <div className="right">
              {editId === obj.id ? (
                <i
                  className="fas fa-save"
                  onClick={() => saveEdit(obj.id)}
                ></i>
              ) : (
                <i
                  className="fas fa-edit"
                  onClick={() => handleEdit(obj.id, obj.text)}
                ></i>
              )}
              <i
                className="fas fa-times removeIcon"
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this task?')) {
                    setToDos(toDos.filter((item) => item.id !== obj.id));
                  }
                }}
              ></i>
            </div>
          </div>
        ))}
      </div>
      <div className="clearCompleted">
        <button onClick={() => setToDos(toDos.filter((obj) => !obj.status))}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default App;