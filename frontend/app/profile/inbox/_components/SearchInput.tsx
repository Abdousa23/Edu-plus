
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
const SearchInput = () => {
	const [input , setInput] = useState<string>('')

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(e.target.value);
		

	};
	return (
		
		<form className='flex items-center w-[90%] mx-auto max-md:hidden   h-10 my-3  border-2 border-slate-200 justify-aroun' onSubmit={handleSubmit} >
			<button type='submit' className='    w-[4vw] flex justify-center items-center'>
				<IoSearchSharp className='w-6 h-6 ' />
			</button>
			<input type='text' placeholder='Search…' className='outline-none input-bordered  w-[20vw]' onChange={(e)=>{setInput(e.target.value)}} />
		</form>
	);
};
export default SearchInput;
