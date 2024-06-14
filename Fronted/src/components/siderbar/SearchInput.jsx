import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) {
      return;
    }
    if(search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const converstaion = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(converstaion) {
      setSelectedConversation(converstaion);
      setSearch('');
    } else {
      toast.error("No Such user found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;

// STARTER CODE
// import { IoSearchSharp } from "react-icons/io5";

// function SearchInput() {
//   return (
//     <form className='flex items-center gap-2'>
//       <input type="text" placeholder='Search...' className='input input-bordered rounded-full'/>
//       <button className='btn btn-circle bg-sky-500 text-white'><IoSearchSharp className='w-6 h-6 outline-none'/></button>
//     </form>
//   )
// }

// export default SearchInput;
