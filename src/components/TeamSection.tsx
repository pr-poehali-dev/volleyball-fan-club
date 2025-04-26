
const players = [
  {
    id: 1,
    name: "Алексей Петров",
    position: "Доигровщик"
  },
  {
    id: 2,
    name: "Иван Соколов",
    position: "Блокирующий"
  },
  {
    id: 3,
    name: "Сергей Волков",
    position: "Диагональный"
  }
];

const TeamSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {players.map((player) => (
        <div key={player.id} className="bg-white p-4 rounded shadow text-center">
          <div className="bg-gray-200 h-32 mb-3 flex items-center justify-center text-gray-400">
            Фото игрока
          </div>
          <h3 className="font-semibold text-lg">{player.name}</h3>
          <p className="text-primary">{player.position}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
