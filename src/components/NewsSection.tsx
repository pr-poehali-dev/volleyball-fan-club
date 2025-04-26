
const newsItems = [
  {
    id: 1,
    title: "Победа в чемпионате",
    date: "25 апреля 2025",
    summary: "Команда одержала уверенную победу в финальном матче чемпионата России."
  },
  {
    id: 2,
    title: "Новый игрок в команде",
    date: "20 апреля 2025",
    summary: "К команде присоединился перспективный связующий из молодежной сборной."
  },
  {
    id: 3,
    title: "Расписание игр на май",
    date: "15 апреля 2025",
    summary: "Опубликовано расписание домашних игр команды на май 2025 года."
  }
];

const NewsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {newsItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-500 text-sm mb-2">{item.date}</p>
          <p>{item.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
