import React from 'react';

function Emergency({ darkMode }) {
  const helplines = [
    { name: "Hospital A", number: "22222521252" },
    { name: "Hospital A", number: "22222521252" },
    { name: "Hospital A", number: "22222521252" },
    { name: "Hospital A", number: "22222521252" },
    { name: "Hospital A", number: "22222521252" },
  ];

  return (
    <div className={` mt-20  flex justify-center items-center ${darkMode ? 'bg-slate-950' : 'bg-transparent'} h-max w-full lg:w-[80%]`}>
      <div className="flex flex-col items-start w-full lg:w-1/2 p-8">
        <div className={`lgtext-5xl text-3xl font-bold ${darkMode ? 'text-white' : 'text-proGreen'} mb-8 flex w-full`}>Emergency Helplines</div>
        {helplines.map((helpline, index) => (
          <div key={index} className={`flex justify-between w-full ${darkMode ? 'text-white' : 'text-gray-300'} text-2xl mb-4`}>
            <span className="font-bold">{helpline.name} :</span>
            <span>{helpline.number}</span>
          </div>
        ))}
      </div>
      <div className="hidden w-1/2 lg:flex justify-center items-center">
        <div className={`rounded-full w-96 h-96 ${darkMode ? 'bg-gradient-to-b from-proWhite to-proIndigo' : 'bg-gradient-to-b from-proWhite to-proGreen'}`}></div>
      </div>
    </div>
  );
}

export default Emergency;
