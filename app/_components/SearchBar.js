import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        placeholder="Search models, datasets, users..."
        className="w-96 border border-gray-300 rounded-md  pl-6 py-1 focus:outline  focus:outline-sky-500"
        type="text"
      />
      <CiSearch className="absolute left-1 top-2" />
    </div>
  );
}
