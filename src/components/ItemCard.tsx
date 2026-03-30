import { Item } from '../types';
import { BadgeCheck, User } from 'lucide-react';

export default function ItemCard({ item }: { item: Item }) {
  return (
    <div className="bg-white shadow-md overflow-hidden border border-gray-200">
      <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-blue-600 font-bold">Ksh {item.price.toLocaleString()}</span>
          <span className="text-xs text-gray-500">{item.condition}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          {item.sellerType === 'student' ? (
            <BadgeCheck className="w-4 h-4 text-green-500" />
          ) : (
            <User className="w-4 h-4 text-gray-500" />
          )}
          {item.sellerName}
        </div>
      </div>
    </div>
  );
}
