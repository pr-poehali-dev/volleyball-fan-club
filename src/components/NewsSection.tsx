import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Победа в финале Кубка России",
    date: "24 апреля 2025",
    description: "Волейбольный клуб «Динамо» одержал уверенную победу в финале Кубка России, обыграв принципиального соперника со счетом 3:1.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Новый тренер присоединился к команде",
    date: "18 апреля 2025",
    description: "Известный специалист Иван Петров стал новым помощником главного тренера волейбольного клуба «Динамо».",
    image: "https://images.unsplash.com/photo-1590227632180-80a3bf110871?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Начало продаж абонементов на новый сезон",
    date: "10 апреля 2025",
    description: "Стартовала продажа абонементов на домашние матчи клуба в новом сезоне. Приобрести абонемент можно на официальном сайте команды.",
    image: "https://images.unsplash.com/photo-1511886929837-354984c0aa25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Последние новости</h2>
          <Button variant="outline">Все новости</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary">Читать далее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;