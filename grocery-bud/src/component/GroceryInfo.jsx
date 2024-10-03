import { useState, useEffect } from "react";
import style from "../component/GroceryInfo.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GroceryInfo = () => {
  const [inputText, setInputText] = useState("");
  const [textList, setTextList] = useState([]);

  // Fetch stored items from local storage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem("groceryItems");
    if (storedItems) {
      setTextList(JSON.parse(storedItems)); // Parse and set the items in state
    }
  }, []); // Empty dependency array means this will run only once when the component mounts

  // Update local storage whenever the textList changes
  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(textList));
  }, [textList]); // This effect runs every time `textList` changes

  // Function to handle adding new item
  const handleClick = () => {
    if (inputText.trim() !== "") {
      setTextList([...textList, inputText]);
      setInputText("");

      // Display a success toast notification
      toast.success("Item added!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // Display a warning toast if input is empty
      toast.warn("Please enter an item", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // Function to handle deleting an item
  const handleDelete = (index) => {
    setTextList(textList.filter((currentItem, i) => i !== index));

    // Display a toast notification when item is deleted
    toast.error("Item deleted!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className={style.container}>
      <h1 className={style.h1Text}>Grocery-Bud</h1>
      <input
        className={style.inputText}
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        id="text"
        value={inputText}
      />
      <button className={style.btnClick} onClick={handleClick}>
        Add Item
      </button>

      <div className={style.items}>
        {textList.map((text, index) => (
          <div className={style.listItem} key={index}>
            <input
              className={style.checkbox}
              type="checkbox"
              id={`checkbox-${index}`}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className={style["checkbox-label"]}
            >
              {text}
            </label>
            <button
              className={style.delete}
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Place this container at the end */}
      <ToastContainer />
    </div>
  );
};

export default GroceryInfo;
