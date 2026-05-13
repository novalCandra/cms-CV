export default function StyleAuth(){
    return (
        <>
              <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap');
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(1deg); }
          66% { transform: translateY(4px) rotate(-1deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(99,102,241,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(99,102,241,0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .anim-slide-up { animation: slideUp 0.5s ease forwards; }
        .anim-fade-in { animation: fadeIn 0.6s ease forwards; }
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
        .serif { font-family: 'Instrument Serif', serif; }
        .loading-shimmer {
          background: linear-gradient(90deg, #4f46e5 25%, #7c3aed 50%, #4f46e5 75%);
          background-size: 200% auto;
          animation: shimmer 1.5s linear infinite;
        }
        .input-glow-focus {
          box-shadow: 0 0 0 3px rgba(99,102,241,0.15), 0 1px 2px rgba(0,0,0,0.05);
        }
        .spin { animation: spin 0.8s linear infinite; }
      `}</style>
        </>
    )
}