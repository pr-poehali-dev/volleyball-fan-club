import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-8 h-8"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4a2 2 0 0 1 2-2h4" />
          </svg>
          <span className="text-xl font-bold">ФК Динамо</span>
        </div>
        
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:underline">Главная</Link>
          <Link to="/" className="hover:underline">Новости</Link>
          <Link to="/" className="hover:underline">Состав</Link>
          <Link to="/" className="hover:underline">Галерея</Link>
          <Link to="/" className="hover:underline">Контакты</Link>
        </div>
        
        <Button className="bg-white text-primary hover:bg-gray-100">
          Вступить в клуб
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;