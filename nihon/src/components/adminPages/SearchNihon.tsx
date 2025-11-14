import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-full  bg-white shadow-sm">
      <CiSearch className="text-gray-400 w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder="Buscar por nome do produto"
        className="w-full text-gray-500 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}
