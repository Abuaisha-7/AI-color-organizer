import { useRef, useState } from 'react'
import { getColorNameFromAPI } from '../api/openai';

function AddColorForm( {onNewColor}) {
  const [loading, setLoading] = useState(false);

const titleRef = useRef();
const colorRef = useRef();

    const submit = async (e) => {
      e.preventDefault();
      setLoading(true)

      let title =  titleRef.current.value;
      let color =  colorRef.current.value;

      if (!title.trim()) {
        title = await getColorNameFromAPI(color)
      }

      onNewColor(title,color);

      titleRef.current.value = "";
      colorRef.current.value = "#000000";
      titleRef.current.focus();
      setLoading(false);
    }

  return (
    <form className='flex-center' onSubmit={submit}>
        <input className=' w-[30%] border-2 border-golden rounded-[5px] py-1 px-2 capitalize bg-black text-white text-[1rem] font-base h-[40px] max-sm:w-1/2 ' ref={titleRef}
        type="text"
        placeholder="color title (optional)"
        disabled={loading} />
        <input 
        className='mx-3 border-2 border-golden rounded-[5px] cursor-pointer h-[40px]' 
        ref={colorRef} 
        type="color" 
        required 
        disabled={loading}
        />
        <button className='custom__button' disabled={loading}>
          {loading ? 'Generating...' : 'Add'}
        </button>
    </form>
  )
}

export default AddColorForm