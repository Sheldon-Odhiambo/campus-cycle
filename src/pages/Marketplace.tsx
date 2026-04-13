import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { sampleItems } from '../data/sampleItems';
import ItemCard from '../components/ItemCard';

export default function Marketplace() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search')?.toLowerCase() || '';
  const [conditionFilter, setConditionFilter] = useState('');

  const filteredItems = sampleItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
                          item.description.toLowerCase().includes(searchTerm);
    const matchesCondition = conditionFilter === '' || item.condition === conditionFilter;
    return matchesSearch && matchesCondition;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold">Marketplace {searchTerm && `for "${searchTerm}"`}</h2>
        <select 
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={conditionFilter}
          onChange={(e) => setConditionFilter(e.target.value)}
        >
          <option value="">All Conditions</option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Used">Used</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <ItemCard item={item} />
          </Link>
        ))}
      </div>
      {filteredItems.length === 0 && <p className="text-center text-gray-500">No items found.</p>}
    </div>
  );
}
