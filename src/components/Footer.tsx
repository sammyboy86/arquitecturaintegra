export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 text-white border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-black text-integra-olive uppercase tracking-tighter">INTEGRA</h2>
          <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Integra. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-integra-olive transition-colors">Contact</a>
            <a href="#" className="hover:text-integra-olive transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-integra-olive transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
