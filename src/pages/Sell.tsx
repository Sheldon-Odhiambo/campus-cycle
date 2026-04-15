import { useState } from 'react';
import React from 'react';
import { Tag, FileText, DollarSign, List, Image as ImageIcon, User, Mail, Phone } from 'lucide-react';

export default function Sell() {
  const [formData, setFormData] = useState({
    name: '',
    condition: 'New',
    description: '',
    price: '',
    category: 'Books',
    sellerName: '',
    email: '',
    phone: ''
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      id: Date.now().toString(),
      imageUrl: imagePreview || '/assets/gaming system .jpg',
      isFeatured: false
    };
    
    const existingItems = JSON.parse(localStorage.getItem('items') || '[]');
    localStorage.setItem('items', JSON.stringify([...existingItems, newItem]));
    
    alert('Item posted successfully!');
    setFormData({
      name: '',
      condition: 'New',
      description: '',
      price: '',
      category: 'Books',
      sellerName: '',
      email: '',
      phone: ''
    });
    setImagePreview(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-stone-900 mb-10">Post an Item</h2>
      <form className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 space-y-8" onSubmit={handleSubmit}>
        
        {/* Item Details */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <Tag className="w-4 h-4" /> Item Name
              </label>
              <input type="text" placeholder="e.g., Calculus Textbook" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <List className="w-4 h-4" /> Condition
              </label>
              <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500" value={formData.condition} onChange={(e) => setFormData({...formData, condition: e.target.value})}>
                <option>New</option>
                <option>Like New</option>
                <option>Used</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
              <FileText className="w-4 h-4" /> Description
            </label>
            <textarea placeholder="Describe your item..." rows={4} className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required></textarea>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <DollarSign className="w-4 h-4" /> Price (Ksh)
              </label>
              <input type="number" placeholder="0" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <List className="w-4 h-4" /> Category
              </label>
              <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                <option>Books</option>
                <option>Furniture</option>
                <option>Electronics</option>
                <option>Clothes</option>
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
              <ImageIcon className="w-4 h-4" /> Upload Image
            </label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full px-4 py-3 border border-stone-300 rounded-lg" />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="mt-4 h-40 w-full object-cover rounded-lg" />
            )}
          </div>
        </div>

        {/* Seller Info */}
        <div className="border-t border-stone-200 pt-8">
          <h3 className="text-lg font-bold text-stone-900 mb-6">Seller Contact Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <User className="w-4 h-4" /> Full Name
              </label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-3 border border-stone-300 rounded-lg" value={formData.sellerName} onChange={(e) => setFormData({...formData, sellerName: e.target.value})} required />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <Mail className="w-4 h-4" /> Email Address
              </label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 border border-stone-300 rounded-lg" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <Phone className="w-4 h-4" /> Phone Number
              </label>
              <input type="tel" placeholder="+254..." className="w-full px-4 py-3 border border-stone-300 rounded-lg" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Post Item</button>
      </form>
    </div>
  );
}
