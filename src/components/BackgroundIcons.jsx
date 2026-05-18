import React from 'react';
import { Cloud, Code, Database, Cpu, Server, Terminal, Globe, Layers } from 'lucide-react';

const BackgroundIcons = () => {
  const icons = [
    { Icon: Cloud, size: 40, top: '10%', left: '15%', delay: '0s' },
    { Icon: Code, size: 30, top: '25%', left: '80%', delay: '1s' },
    { Icon: Database, size: 35, top: '60%', left: '10%', delay: '2s' },
    { Icon: Cpu, size: 45, top: '80%', left: '70%', delay: '0.5s' },
    { Icon: Server, size: 30, top: '15%', left: '60%', delay: '1.5s' },
    { Icon: Terminal, size: 25, top: '45%', left: '20%', delay: '2.5s' },
    { Icon: Globe, size: 35, top: '70%', left: '40%', delay: '0.2s' },
    { Icon: Layers, size: 40, top: '35%', left: '90%', delay: '1.2s' },
  ];

  return (
    <div className="floating-icons" style={{ position: 'fixed', width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>
      {icons.map((item, index) => (
        <div 
          key={index} 
          className="floating-icon-wrapper" 
          style={{ 
            top: item.top, 
            left: item.left, 
            animationDelay: item.delay,
            position: 'absolute',
          }}
        >
          <div className="floating-icon-inner">
            <item.Icon size={item.size} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundIcons;
