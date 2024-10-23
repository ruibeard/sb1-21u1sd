import React from 'react';
import { Radio } from 'lucide-react';
import AudioPlayer from './components/AudioPlayer';
import Schedule from './components/Schedule';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-8">
            <Radio size={48} className="text-red-500" />
            <h1 className="text-4xl font-bold">AZ FM</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            A sua rádio portuguesa com a melhor música, notícias locais e programação variada 24 horas por dia.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Schedule />
          <ContactForm />
        </div>
      </main>

      {/* Audio Player */}
      <AudioPlayer />
    </div>
  );
}

export default App;