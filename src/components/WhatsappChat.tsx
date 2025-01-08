import React from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = React.useState(false);
  const phoneNumber = "91123456789"; // Replace with your actual WhatsApp number

  const handleChat = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Chat with us</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-600 mb-4">Have questions? Chat with our real estate experts!</p>
          <button
            onClick={handleChat}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Start WhatsApp Chat
          </button>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}