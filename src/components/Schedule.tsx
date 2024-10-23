import React, { useState } from 'react';

const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const schedule = [
  { time: '00:00 - 01:00', show: 'Clássicos Anos 80' },
  { time: '01:00 - 03:00', show: 'Clássicos Anos 90' },
  { time: '03:00 - 05:00', show: 'Música Portuguesa' },
  { time: '05:00 - 11:00', show: 'Noticiário Local + AZFM Música' },
  { time: '11:00 - 12:00', show: 'Noticiário Local + AZFM Música' },
  { time: '12:00 - 13:00', show: 'Discos Pedidos' },
  { time: '13:00 - 15:00', show: 'AZFM Música' },
  { time: '15:00 - 17:00', show: 'Noticiário Local + Loja da Música' },
  { time: '17:00 - 18:00', show: 'AZFM Música' },
  { time: '18:00 - 19:00', show: 'Noticiário Local' },
  { time: '19:00 - 24:00', show: 'Música Calma' },
];

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Programação</h2>
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {weekDays.map((day, index) => (
          <button
            key={day}
            onClick={() => setSelectedDay(index)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedDay === index
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {schedule.map(({ time, show }) => (
          <div
            key={time}
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-32 font-mono text-gray-600">{time}</div>
            <div className="flex-1 font-medium text-gray-800">{show}</div>
          </div>
        ))}
      </div>
    </div>
  );
}