import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [newCategory, setNewCategory] = useState("");

  const onChangeCategory = (event) => {
    setNewCategory(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const cleanValue = newCategory.trim();
    if (cleanValue.length <= 1) return;
    onNewCategory(cleanValue);
    setNewCategory("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={newCategory}
        onChange={onChangeCategory}
      />
    </form>
  );
};
