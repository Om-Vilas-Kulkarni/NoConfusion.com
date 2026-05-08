import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Bot, ChevronRight } from 'lucide-react';
import { professions } from '../data/courses';
import { Link } from 'react-router-dom';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hi! I'm your NoConfusion Career Advisor. Let's find your ideal path not by asking what you want to be, but by understanding how you think! Ready?", options: ['Start Diagnosis', 'Not now'] }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(-1); 
  const [scores, setScores] = useState({
    'software-engineering': 0,
    'data-analytics': 0,
    'data-engineering': 0,
    'data-science': 0,
    'dsa': 0,
    'personal-finance': 0
  });
  
  const questions = [
    {
      q: "1. When you look at a high-tech car, what fascinates you more?",
      options: [
        { text: "The engine's performance and mechanical logic", scores: { 'data-engineering': 3, 'dsa': 3, 'software-engineering': 1 } },
        { text: "The sleek dashboard and interactive touchscreens", scores: { 'software-engineering': 4, 'data-analytics': 2 } }
      ]
    },
    {
      q: "2. If you had a free hour, would you rather organize a messy bookshelf or solve a riddle?",
      options: [
        { text: "Organize the bookshelf perfectly", scores: { 'data-engineering': 4, 'software-engineering': 2, 'personal-finance': 2 } },
        { text: "Solve a challenging riddle", scores: { 'dsa': 4, 'data-science': 3, 'data-analytics': 1 } }
      ]
    },
    {
      q: "3. Would you rather build a bridge that lasts 100 years or predict how much traffic it will have?",
      options: [
        { text: "Build the enduring bridge", scores: { 'software-engineering': 4, 'data-engineering': 3 } },
        { text: "Predict the future traffic patterns", scores: { 'data-science': 5, 'data-analytics': 3 } }
      ]
    },
    {
      q: "4. When you see a complex graph, what is your first thought?",
      options: [
        { text: "I wonder what the story behind these numbers is?", scores: { 'data-analytics': 5, 'data-science': 2 } },
        { text: "I wonder how they built such a cool visualization?", scores: { 'software-engineering': 3, 'data-engineering': 2 } }
      ]
    },
    {
      q: "5. Do you prefer finishing 10 small, satisfying tasks or solving one extremely difficult problem?",
      options: [
        { text: "10 small, satisfying tasks", scores: { 'software-engineering': 3, 'data-analytics': 3, 'personal-finance': 4 } },
        { text: "One extremely difficult brain-teaser", scores: { 'dsa': 5, 'data-science': 3 } }
      ]
    },
    {
      q: "6. Does the idea of 'making money work for you while you sleep' sound more exciting than 'building a robot'?",
      options: [
        { text: "Yes, wealth and investments fascinate me", scores: { 'personal-finance': 8 } },
        { text: "No, I'd rather build the robot or the AI", scores: { 'software-engineering': 3, 'data-science': 3, 'data-engineering': 2 } }
      ]
    },
    {
      q: "7. Do you like knowing 'a little about everything' or 'everything about one specific thing'?",
      options: [
        { text: "A little about everything (Generalist)", scores: { 'software-engineering': 4, 'data-analytics': 2 } },
        { text: "Everything about one thing (Specialist)", scores: { 'dsa': 5, 'data-science': 4, 'data-engineering': 3 } }
      ]
    },
    {
      q: "8. Would you rather work on a product used by millions or a secret system for experts?",
      options: [
        { text: "A product used by millions of people", scores: { 'software-engineering': 5, 'data-analytics': 2 } },
        { text: "A complex system for a few specialized experts", scores: { 'data-engineering': 4, 'dsa': 4, 'data-science': 3 } }
      ]
    },
    {
      q: "9. If you find a bug in a system, do you ask 'How do I fix it?' or 'Why did it happen?'",
      options: [
        { text: "How do I fix it quickly?", scores: { 'software-engineering': 4, 'personal-finance': 2 } },
        { text: "Why did this happen? Show me the data.", scores: { 'data-analytics': 4, 'data-science': 3, 'data-engineering': 2 } }
      ]
    },
    {
      q: "10. Finally, do you prefer a clear, structured budget or a fast-paced, changing environment?",
      options: [
        { text: "Clear structure and long-term planning", scores: { 'personal-finance': 5, 'data-engineering': 4 } },
        { text: "Fast-paced action and daily changes", scores: { 'software-engineering': 5, 'data-science': 3 } }
      ]
    }
  ];
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addMessage = (text, type, options = []) => {
    setMessages(prev => [...prev, { id: Date.now(), type, text, options }]);
  };

  const handleOptionClick = (optionText, optionScores = null) => {
    addMessage(optionText, 'user');
    
    let updatedScores = { ...scores };
    if (optionScores) {
      Object.keys(optionScores).forEach(key => {
        updatedScores[key] += optionScores[key];
      });
      setScores(updatedScores);
    }

    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const nextStep = step + 1;
      setStep(nextStep);
      
      if (optionText === 'Start Diagnosis' || optionText === 'Restart Diagnosis') {
        startQuiz();
      } else if (optionText === 'Not now') {
        addMessage("No problem! Feel free to explore the paths below manually whenever you're ready.", 'bot');
      } else if (nextStep < questions.length) {
        const nextQ = questions[nextStep];
        addMessage(nextQ.q, 'bot', nextQ.options.map(o => ({ text: o.text, scores: o.scores })));
      } else {
        calculateResult(updatedScores);
      }
    }, 600);
  };

  const startQuiz = () => {
    setStep(0);
    const initialScores = {
      'software-engineering': 0,
      'data-analytics': 0,
      'data-engineering': 0,
      'data-science': 0,
      'dsa': 0,
      'personal-finance': 0
    };
    setScores(initialScores);
    const firstQ = questions[0];
    addMessage(firstQ.q, 'bot', firstQ.options.map(o => ({ text: o.text, scores: o.scores })));
  };

  const calculateResult = (finalScores) => {
    let bestPathId = 'software-engineering';
    let maxScore = -1;
    
    Object.keys(finalScores).forEach(id => {
      if (finalScores[id] > maxScore) {
        maxScore = finalScores[id];
        bestPathId = id;
      }
    });

    const prof = professions.find(p => p.id === bestPathId);
    addMessage(`My diagnosis is complete! Based on your logical patterns and personality, you are naturally suited for:`, 'bot');
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      type: 'bot', 
      text: <><strong style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>{prof.title}</strong></>,
      result: prof 
    }]);
    addMessage(`This path aligns with your thinking because it rewards your natural interest in ${bestPathId.includes('data') ? 'analyzing and structuring information' : bestPathId.includes('software') ? 'building user-centric systems' : 'solving deep logical puzzles'}.`, 'bot');
    addMessage("Would you like to try the diagnosis again?", 'bot', [{ text: 'Restart Diagnosis' }]);
  };

  return (
    <>
      {!isOpen && (
        <div className="chatbot-tooltip animate-float">
          Unable to choose right path/ career? <strong>Click here</strong>
        </div>
      )}
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Career Advisor"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {isOpen && (
        <div className="chatbot-window glass-panel animate-fade-in">
          <div className="chatbot-header">
            <div className="bot-info">
              <div className="bot-avatar">
                <Bot size={20} color="white" />
              </div>
              <div>
                <h3>Career Advisor</h3>
                <span>Online</span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-wrapper ${msg.type}`}>
                <div className="message-bubble">
                  {msg.text}
                  {msg.result && (
                    <div className="result-card">
                      <Link to={`/profession/${msg.result.id}`} onClick={() => setIsOpen(false)} className="btn btn-primary">
                        Go to Path <ChevronRight size={16} />
                      </Link>
                    </div>
                  )}
                </div>
                {msg.options && (
                  <div className="options-container">
                    {msg.options.map((opt, i) => (
                      <button 
                        key={i} 
                        className="option-btn" 
                        onClick={() => typeof opt === 'string' ? handleOptionClick(opt) : handleOptionClick(opt.text, opt.scores)}
                      >
                        {typeof opt === 'string' ? opt : opt.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="message-wrapper bot">
                <div className="message-bubble typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
