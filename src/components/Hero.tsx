import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1553005746-5be00f07fef1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Фан-клуб волейбольной команды Динамо
          </h1>
          <p className="text-xl mb-8">
            Присоединяйтесь к сообществу преданных болельщиков легендарной команды. 
            Вместе мы создаем непередаваемую атмосферу поддержки на каждом матче!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="text-lg py-6 px-8 bg-primary hover:bg-primary/90">
              Календарь матчей
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 border-white text-white hover:bg-white/20">
              О клубе
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;