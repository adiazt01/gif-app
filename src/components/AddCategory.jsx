import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length <= 1) return;
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onInputChange}
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
      />
    </form>
  );
};
