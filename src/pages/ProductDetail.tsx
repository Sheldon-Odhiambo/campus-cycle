import { useParams, Link } from 'react-router-dom';
import { sampleItems } from '../data/sampleItems';
import { Tag, FileText, DollarSign, List, User, Mail, Phone, ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const item = sampleItems.find((i) => i.id === id);

  if (!item) {
    return <div className="text-center py-20">Item not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/marketplace" className="flex items-center gap-2 text-blue-600 mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Marketplace
      </Link>
      <div className="grid md:grid-cols-2 gap-12">
        <img src={item.imageUrl} alt={item.name} className="w-full h-96 object-cover rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-stone-900">{item.name}</h1>
          <p className="text-2xl font-bold text-blue-600">Ksh {item.price.toLocaleString()}</p>
          <div className="flex gap-4 text-sm">
            <span className="bg-stone-100 px-3 py-1 rounded-full">{item.category}</span>
            <span className="bg-stone-100 px-3 py-1 rounded-full">{item.condition}</span>
          </div>
          <p className="text-stone-600 leading-relaxed">{item.description}</p>
          
          <div className="border-t border-stone-200 pt-6 space-y-4">
            <h3 className="text-lg font-bold">Seller Contact Info</h3>
            <div className="flex items-center gap-3 text-stone-700">
              <User className="w-5 h-5" /> {item.sellerName} ({item.sellerType})
            </div>
            <div className="flex items-center gap-3 text-stone-700">
              <Mail className="w-5 h-5" /> {item.email}
            </div>
            <div className="flex items-center gap-3 text-stone-700">
              <Phone className="w-5 h-5" /> {item.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
