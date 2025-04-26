import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const players = [
  {
    id: 1,
    name: "Алексей Смирнов",
    position: "Диагональный",
    number: 10,
    image: "https://images.unsplash.com/photo-1618608967200-ded178479e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    stats: { attack: 95, block: 85, serve: 90 }
  },
  {
    id: 2,
    name: "Сергей Волков",
    position: "Центральный блокирующий",
    number: 7,
    image: "https://images.unsplash.com/photo-1543873669-a5695ecca5a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    stats: { attack: 80, block: 97, serve: 75 }
  },
  {
    id: 3,
    name: "Дмитрий Коновалов",
    position: "Связующий",
    number: 4,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    stats: { attack: 70, block: 80, serve: 92 }
  },
];

const TeamSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Наши герои</Badge>
          <h2 className="text-3xl font-bold mb-4">Состав команды</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с талантливыми спортсменами, которые под флагом «Динамо» 
            завоевывают медали и сердца болельщиков
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <Card key={player.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2 opacity-80"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge variant="secondary" className="mb-2">{player.position}</Badge>
                  <h3 className="text-2xl font-bold">{player.name}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                  {player.number}
                </div>
              </div>
              <CardHeader>
                <CardTitle>{player.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{player.stats.attack}</div>
                    <div className="text-sm text-gray-500">Атака</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{player.stats.block}</div>
                    <div className="text-sm text-gray-500">Блок</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{player.stats.serve}</div>
                    <div className="text-sm text-gray-500">Подача</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;