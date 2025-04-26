
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">ФК Динамо</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Главная</Link>
          <Link to="/news" className="hover:underline">Новости</Link>
          <Link to="/players" className="hover:underline">Игроки</Link>
          <Link to="/contact" className="hover:underline">Контакты</Link>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-14 left-0 right-0 bg-primary p-4 md:hidden z-50">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:underline py-1" onClick={() => setIsOpen(false)}>Главная</Link>
              <Link to="/news" className="hover:underline py-1" onClick={() => setIsOpen(false)}>Новости</Link>
              <Link to="/players" className="hover:underline py-1" onClick={() => setIsOpen(false)}>Игроки</Link>
              <Link to="/contact" className="hover:underline py-1" onClick={() => setIsOpen(false)}>Контакты</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
