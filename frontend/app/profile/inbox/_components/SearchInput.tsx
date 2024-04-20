import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
const SearchInput = () => {
	const [input , setInput] = useState<string>('')

	const handelchane = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log(e.target.value);
		

	};
	return (
		
		<form className='flex items-center   h-8  border-2 border-slate-200 justify-aroun' >
			<button type='submit' className='    w-[4vw] flex justify-center items-center'>
				<IoSearchSharp className='w-6 h-6 ' />
			</button>
			<input type='text' placeholder='Search…' className=' input-bordered  w-[20vw]' onChange={(e)=>handelchane} />
		</form>
	);
};
export default SearchInput;
