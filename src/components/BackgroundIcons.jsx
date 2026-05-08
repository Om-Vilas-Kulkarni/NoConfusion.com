import { Cloud, Code, Database, Cpu, Server, Terminal, Globe, Layers } from 'lucide-react';

const BackgroundIcons = () => {
  const icons = [
    { Icon: Cloud, size: 40, top: '10%', left: '15%', delay: '0s', duration: '18s' },
    { Icon: Code, size: 30, top: '25%', left: '80%', delay: '2s', duration: '22s' },
    { Icon: Database, size: 35, top: '60%', left: '10%', delay: '4s', duration: '20s' },
    { Icon: Cpu, size: 45, top: '80%', left: '70%', delay: '1s', duration: '25s' },
    { Icon: Server, size: 30, top: '15%', left: '60%', delay: '5s', duration: '19s' },
    { Icon: Terminal, size: 25, top: '45%', left: '20%', delay: '3s', duration: '21s' },
    { Icon: Globe, size: 35, top: '70%', left: '40%', delay: '0s', duration: '24s' },
    { Icon: Layers, size: 40, top: '35%', left: '90%', delay: '6s', duration: '23s' },
  ];

  return (
    <div className="floating-icons">
      {icons.map((item, index) => (
        <div 
          key={index} 
          className="floating-icon" 
          style={{ 
            top: item.top, 
            left: item.left, 
            animationDelay: item.delay,
            animationDuration: item.duration
          }}
        >
          <item.Icon size={item.size} />
        </div>
      ))}
    </div>
  );
};

export default BackgroundIcons;
