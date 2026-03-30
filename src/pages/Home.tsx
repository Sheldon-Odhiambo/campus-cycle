import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sampleItems } from '../data/sampleItems';
import ItemCard from '../components/ItemCard';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/marketplace?search=${searchTerm}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="text-center py-16 bg-blue-50 mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Buy & Sell Smarter on Campus</h1>
        <p className="text-xl text-gray-600 mb-8">The trusted marketplace for students and community members.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input 
            type="text" 
            placeholder="Search items at Africa Nazarene University..." 
            className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-80"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleItems.filter(item => item.isFeatured).slice(0, 4).map(item => (
            <div key={item.id}>
              <ItemCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
