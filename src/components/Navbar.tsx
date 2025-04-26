
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-xl">Фан-клуб "Динамо"</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Главная</Link>
          <Link to="/news" className="hover:underline">Новости</Link>
          <Link to="/players" className="hover:underline">Игроки</Link>
          <Link to="/contact" className="hover:underline">Контакты</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
