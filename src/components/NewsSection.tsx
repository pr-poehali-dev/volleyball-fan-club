
const newsItems = [
  {
    id: 1,
    title: "Победа в чемпионате",
    date: "25 апреля 2025",
    content: "Команда одержала уверенную победу в финальном матче чемпионата России."
  },
  {
    id: 2,
    title: "Новый игрок в команде",
    date: "20 апреля 2025",
    content: "К команде присоединился перспективный связующий из молодежной сборной."
  },
  {
    id: 3,
    title: "Расписание игр на май",
    date: "15 апреля 2025",
    content: "Опубликовано расписание домашних игр команды на май 2025 года."
  }
];

const NewsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Последние новости</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.date}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
