import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6">
      <div className="flex  items-center space-x-4">
        <Logo />
        <SearchBar />
      </div>
      <Navigation />
    </header>
  );
}
