import { Item } from '../types';
import { BadgeCheck, User, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ItemCard({ item }: { item: Item }) {
  const [showContact, setShowContact] = useState(false);

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
        <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
          {item.sellerType === 'student' ? (
            <BadgeCheck className="w-4 h-4 text-green-500" />
          ) : (
            <User className="w-4 h-4 text-gray-500" />
          )}
          {item.sellerName}
        </div>
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowContact(!showContact);
          }}
          className="w-full bg-blue-100 text-blue-800 py-2 rounded text-sm font-semibold hover:bg-blue-200"
        >
          {showContact ? 'Hide Contact' : 'Contact Seller'}
        </button>
        
        {showContact && (
          <div className="mt-4 p-3 bg-gray-50 rounded text-sm space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-4 h-4" /> {item.email}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" /> {item.phone}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
