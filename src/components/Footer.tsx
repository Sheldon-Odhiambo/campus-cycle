export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-12 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">CampusCycle</h3>
          <p className="text-blue-200 text-sm">
            Bridging the gap between affordability and accessibility for students at Africa Nazarene University.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/marketplace" className="hover:text-white">Marketplace</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <p className="text-sm text-blue-200">Nairobi, Kenya</p>
          <p className="text-sm text-blue-200">info@campuscycle.ac.ke</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-blue-800 text-center text-sm text-blue-300">
        <p>&copy; 2026 CampusCycle. All rights reserved.</p>
      </div>
    </footer>
  );
}
