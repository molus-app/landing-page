
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission to your backend
    console.log('Email submitted:', email);
    
    toast({
      title: "Thanks for signing up!",
      description: "We'll keep you updated on our latest developments.",
    });
    
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex border-2 border-black dark:border-white rounded-lg overflow-hidden">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="mail@mail"
          required
          className="flex-grow px-4 py-3 bg-white dark:bg-gray-800 font-indie text-xl focus:outline-none dark:text-white"
        />
        <button 
          type="submit" 
          className="px-4 bg-white dark:bg-gray-800 border-l-2 border-black dark:border-white font-indie text-xl hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          ▶
        </button>
      </div>
    </form>
  );
};

export default EmailSignup;
