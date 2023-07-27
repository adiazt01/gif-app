import { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <Fragment>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category, index) => (
        <GifGrid category={category} key={index} />
      ))}
    </Fragment>
  );
};
 