
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const players = [
  {
    id: 1,
    name: "Алексей Петров",
    position: "Доигровщик",
    number: 7,
    age: 28,
    height: 198
  },
  {
    id: 2,
    name: "Иван Соколов",
    position: "Блокирующий",
    number: 12,
    age: 25,
    height: 204
  },
  {
    id: 3,
    name: "Сергей Волков",
    position: "Диагональный",
    number: 10,
    age: 27,
    height: 200
  },
  {
    id: 4,
    name: "Дмитрий Ковалев",
    position: "Связующий",
    number: 5,
    age: 29,
    height: 192
  },
  {
    id: 5,
    name: "Артем Сидоров",
    position: "Либеро",
    number: 2,
    age: 24,
    height: 185
  },
  {
    id: 6,
    name: "Максим Орлов",
    position: "Блокирующий",
    number: 8,
    age: 26,
    height: 203
  }
];

const Players = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6">
          <Link to="/" className="text-primary hover:underline">← Назад на главную</Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Игроки команды</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <div key={player.id} className="bg-white p-4 rounded shadow">
              <div className="bg-gray-200 h-40 mb-4 flex items-center justify-center text-gray-400">
                Фото игрока
              </div>
              <h2 className="text-xl font-semibold">{player.name}</h2>
              <p className="text-primary font-medium">{player.position}</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Номер:</span> {player.number}
                </div>
                <div>
                  <span className="text-gray-500">Возраст:</span> {player.age}
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500">Рост:</span> {player.height} см
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Players;
