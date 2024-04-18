import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
	return (
		<form className='flex items-center gap-2 h-8 w-[25vh]'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
			<button type='submit' className='btn btn-circle  text-white hover:bg-red-700 '>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;
