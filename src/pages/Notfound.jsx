// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-6 relative overflow-hidden">
      
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-[-50px] left-[-50px]" />
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-[-50px] right-[-50px]" />

      <div className="relative z-10 max-w-xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl text-center">
        
        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          404
        </h1>

        <div className="flex justify-center mt-4 mb-6">
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
            <Search size={40} className="text-cyan-300" />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-3">
          Halaman Tidak Ditemukan
        </h2>

        <p className="text-slate-300 leading-relaxed mb-8">
          Maaf, halaman yang kamu cari tidak tersedia atau mungkin sudah dipindahkan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold transition-all duration-300 hover:scale-105"
          >
            <Home size={18} />
            Kembali ke Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 font-medium transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Halaman Sebelumnya
          </button>
        </div>
      </div>
    </div>
  );
}