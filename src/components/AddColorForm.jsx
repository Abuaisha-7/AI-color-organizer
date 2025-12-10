import { useRef } from 'react'

function AddColorForm() {

const titleRef = useRef();
const colorRef = useRef();

    const submit = () => {

    }

  return (
    <form className='flex-center section__padding ' onSubmit={submit}>
        <input className='w-[40%] border-2 border-golden rounded-[5px] py-1 px-2 capitalize bg-black text-white text-[1rem] font-base h-[40px] ' ref={titleRef}
        type="text"
        placeholder="color title..."
        required />
        <input className='mx-3 border-2 border-golden rounded-[5px] cursor-pointer h-[40px]' ref={colorRef} type="color" required />
        <button className='custom__button'>ADD</button>
    </form>
  )
}

export default AddColorForm