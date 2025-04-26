
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Страница не найдена</p>
        <p className="mb-8 text-center max-w-md">
          Извините, страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Link to="/">
          <button className="bg-primary text-white px-6 py-2 rounded font-medium">
            Вернуться на главную
          </button>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
