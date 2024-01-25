import { useState } from 'react';
import './List.css';


function List() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([
    { id: 1, text: 'zakupy' },
    { id: 2, text: 'prad', checked: true },
  ]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), text: inputValue },
      ]);
      setInputValue('');
    } else {
      alert('Nie zostawiaj pustych pól!');
    }
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleChecked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      <div id="myDIV" className="header">
        <h2>Lista zakupów</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem} className="addBtn">
          Dodaj
        </button>
      </div>

      <ul id="myUl">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.checked ? 'checked' : ''}
            onClick={() => handleToggleChecked(item.id)}
          >
            {item.text}
            <span className="close" onClick={() => handleRemoveItem(item.id)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
