
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">О фан-клубе</h2>
          <p className="text-center max-w-3xl mx-auto">
            Фан-клуб волейбольной команды «Динамо» — это сообщество преданных болельщиков, 
            объединенных любовью к команде и волейболу. Мы вместе посещаем матчи, 
            поддерживаем игроков и создаем неповторимую атмосферу на трибунах.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="bg-gray-100 p-3 rounded text-center">
                <div className="text-2xl font-bold text-primary">2007</div>
                <div className="text-sm">год основания</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <div className="text-2xl font-bold text-primary">3000+</div>
                <div className="text-sm">участников</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm">выездных матчей</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm">городов России</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsSection />
      <TeamSection />
      
      <section className="py-8 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Присоединяйтесь к нам!</h2>
          <p className="mb-6">
            Станьте частью нашей большой волейбольной семьи.
          </p>
          <button className="bg-white text-primary px-6 py-2 rounded font-bold">
            Вступить в фан-клуб
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
