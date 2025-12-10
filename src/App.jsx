import { useState } from 'react'
import AddColorForm from './components/AddColorForm'
import { v4 } from "uuid";
import ColorList from './components/ColorList';


function App() {
  const [colors, setColors] = useState([]);

  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]);
  };

  const rateColor = (id, rating) => {
    setColors(
      colors.map((color) =>
        color.id !== id ? color : { ...color, rating }
      )
    );
  };

  const removeColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };


  return (
    <div className='flex flex-col  section__padding'>
      <AddColorForm onNewColor={addColor}/>
      <ColorList
        colors={colors}
        onRate={rateColor}
        onRemove={removeColor}
      
      />
    </div>
  )
}

export default App
