
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6">
          <Link to="/" className="text-primary hover:underline">← Назад на главную</Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Контакты</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-4">Свяжитесь с нами</h2>
            <div className="space-y-3">
              <p>
                <span className="font-medium">Адрес:</span><br />
                г. Москва, ул. Волейбольная, д. 10
              </p>
              <p>
                <span className="font-medium">Телефон:</span><br />
                +7 (495) 123-45-67
              </p>
              <p>
                <span className="font-medium">Email:</span><br />
                info@dinamo-fanclub.ru
              </p>
              {/* Исправлено: перенесено из тега p в отдельный div */}
              <div>
                <span className="font-medium">Социальные сети:</span><br />
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-primary hover:underline">ВКонтакте</a>
                  <a href="#" className="text-primary hover:underline">Telegram</a>
                  <a href="#" className="text-primary hover:underline">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Форма обратной связи</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Ваше имя</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Сообщение</label>
                <textarea 
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
