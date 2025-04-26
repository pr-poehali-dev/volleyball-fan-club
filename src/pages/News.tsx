
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Победа в чемпионате",
    date: "25 апреля 2025",
    content: "Команда одержала уверенную победу в финальном матче чемпионата России. Наши волейболисты показали отличную игру, не оставив сопернику шансов. Особенно отличились нападающие, набрав большое количество очков."
  },
  {
    id: 2,
    title: "Новый игрок в команде",
    date: "20 апреля 2025",
    content: "К команде присоединился перспективный связующий из молодежной сборной. Руководство клуба возлагает большие надежды на него и считает, что этот трансфер усилит команду перед важными играми."
  },
  {
    id: 3,
    title: "Расписание игр на май",
    date: "15 апреля 2025",
    content: "Опубликовано расписание домашних игр команды на май 2025 года. Болельщиков ждут интересные матчи с сильнейшими командами чемпионата. Не пропустите!"
  },
  {
    id: 4,
    title: "Тренировочные сборы",
    date: "10 апреля 2025",
    content: "Команда отправляется на тренировочные сборы в подготовке к решающим матчам сезона. Тренеры подготовили специальную программу для поддержания формы игроков."
  },
  {
    id: 5,
    title: "Встреча с болельщиками",
    date: "5 апреля 2025",
    content: "В следующую субботу состоится встреча игроков с болельщиками. Вы сможете получить автографы любимых волейболистов и сделать фото на память."
  }
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6">
          <Link to="/" className="text-primary hover:underline">← Назад на главную</Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Новости клуба</h1>
        
        <div className="space-y-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-500 text-sm mb-3">{item.date}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
