import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Badge className="mb-2">О фан-клубе</Badge>
              <h2 className="text-3xl font-bold mb-4">Объединяя настоящих болельщиков «Динамо»</h2>
              <p className="text-gray-600 mb-6">
                Фан-клуб волейбольной команды «Динамо» — это сообщество преданных болельщиков, 
                объединенных любовью к команде и волейболу. Мы организуем совместные просмотры 
                матчей, выезды на игры, встречи с игроками и множество других мероприятий.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-600">лет истории</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-gray-600">участников</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-gray-600">мероприятий в год</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-gray-600">городов России</div>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">Узнать больше</Button>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Фанаты Динамо"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-48">
                  <div className="flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-center text-sm">Поддержка на каждом матче!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsSection />
      <TeamSection />
      
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Присоединяйтесь к нам прямо сейчас!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Станьте частью большой волейбольной семьи. 
            Вступайте в фан-клуб и переживайте яркие эмоции вместе с командой "Динамо"!
          </p>
          <Button className="text-lg py-6 px-8 bg-white text-primary hover:bg-gray-100">
            Стать членом фан-клуба
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;