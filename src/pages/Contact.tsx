import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 text-stone-900">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/anu/800/600" 
              alt="Africa Nazarene University" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details Column */}
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <MapPin className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-stone-600">Africa Nazarene University</p>
                <p className="text-stone-600">Magadi Road, Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <Phone className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-stone-600">+254 700 000 000</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <Mail className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-stone-600">info@anu.ac.ke</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
