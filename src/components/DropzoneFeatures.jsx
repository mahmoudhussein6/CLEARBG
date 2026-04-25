import React from 'react';

const DropzoneFeatures = () => {
  const features = [
    { title: 'Fast Processing', desc: 'Background removal in under 5 seconds' },
    { title: 'Edge Computing', desc: 'Your images never leave your browser' },
    { title: 'High Definition', desc: 'Export crystal clear transparent PNGs' }
  ];

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
      {features.map((feat, i) => (
        <div key={i} className="p-6 glass-morphism text-center">
          <h3 className="font-semibold mb-2 text-white">{feat.title}</h3>
          <p className="text-sm text-slate-400">{feat.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DropzoneFeatures;
