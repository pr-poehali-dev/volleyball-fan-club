
const players = [
  {
    id: 1,
    name: "Алексей Смирнов",
    position: "Диагональный",
    number: 10,
  },
  {
    id: 2,
    name: "Сергей Волков",
    position: "Блокирующий",
    number: 7,
  },
  {
    id: 3,
    name: "Дмитрий Петров",
    position: "Связующий",
    number: 4,
  },
  {
    id: 4,
    name: "Иван Соколов",
    position: "Либеро",
    number: 2,
  },
];

const TeamSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Наши игроки</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {players.map((player) => (
            <div key={player.id} className="text-center p-4 border rounded">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                {player.number}
              </div>
              <h3 className="font-bold">{player.name}</h3>
              <p className="text-gray-600">{player.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
