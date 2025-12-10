import { useRef } from 'react'

function AddColorForm( {onNewColor}) {

const titleRef = useRef();
const colorRef = useRef();

    const submit = (e) => {
      e.preventDefault();
      onNewColor(
        titleRef.current.value,
        colorRef.current.value
      );
      titleRef.current.value = "";
      colorRef.current.value = "#000000";
      titleRef.current.focus();
    }

  return (
    <form className='flex-center' onSubmit={submit}>
        <input className=' w-[30%] border-2 border-golden rounded-[5px] py-1 px-2 capitalize bg-black text-white text-[1rem] font-base h-[40px] max-sm:w-1/2 ' ref={titleRef}
        type="text"
        placeholder="color title..."
        required />
        <input className='mx-3 border-2 border-golden rounded-[5px] cursor-pointer h-[40px]' ref={colorRef} type="color" required />
        <button className='custom__button'>ADD</button>
    </form>
  )
}

export default AddColorForm