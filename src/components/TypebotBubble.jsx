import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import '../styles/TypebotBubble.css';

export default function TypebotBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const toggleBubble = () => {
    if (!hasOpened) setHasOpened(true);
    setIsOpen(!isOpen);
  };

  return (
    <div className="typebot-bubble-root">
      {/* Floating Chat Popup Window */}
      <div className={`typebot-chat-window ${isOpen ? 'open' : ''}`}>
        <div className="typebot-chat-header">
          <div className="typebot-header-info">
            <span className="online-indicator"></span>
            <div>
              <h4 className="typebot-chat-title">Asesor Anchus</h4>
              <p className="typebot-chat-status">En línea - Atención mayorista</p>
            </div>
          </div>
          <button 
            className="typebot-close-btn"
            onClick={toggleBubble}
            aria-label="Cerrar chat"
          >
            <X size={18} />
          </button>
        </div>

        <div className="typebot-chat-body">
          {/* Lazy load iframe ONLY when user clicks bubble to prevent blocking initial page load */}
          {hasOpened && (
            <iframe
              src="https://tbv.orbitalnest.net/anchus-lead-bot-tq12r26"
              style={{ border: 'none', width: '100%', height: '100%' }}
              title="Anchus Lead Bot"
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>

      {/* Floating Circular Bubble Button */}
      <button 
        className={`typebot-bubble-trigger ${isOpen ? 'active' : ''}`}
        onClick={toggleBubble}
        aria-label="Abrir chat de asistencia"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
        {!isOpen && <span className="bubble-notification-badge">1</span>}
      </button>
    </div>
  );
}
