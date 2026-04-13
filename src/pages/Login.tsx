import { useState } from 'react';
import React from 'react';
import { Chrome, Apple } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', terms: false, userType: '', name: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!isLogin && !formData.userType) newErrors.userType = 'Please select your user type';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!isLogin && !formData.terms) newErrors.terms = 'You must accept terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (isLogin) {
        // Sign In logic
        const storedUser = localStorage.getItem(formData.email);
        if (storedUser) {
          const user = JSON.parse(storedUser);
          if (user.password === formData.password && user.firstName === formData.firstName && user.lastName === formData.lastName) {
            alert('Login successful!');
            console.log('Logged in as:', user);
            navigate('/');
          } else {
            alert('Invalid credentials');
          }
        } else {
          alert('User not found');
        }
      } else {
        // Sign Up logic
        const userToStore = {
          ...formData,
          fullName: `${formData.firstName} ${formData.lastName}`
        };
        localStorage.setItem(formData.email, JSON.stringify(userToStore));
        alert('Account created successfully!');
        setIsLogin(true);
        setFormData({ firstName: '', lastName: '', email: '', password: '', terms: false, userType: '', name: '' });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 p-4">
      <div className="bg-white shadow-2xl flex w-full max-w-4xl overflow-hidden">
        {/* Artistic Side */}
        <div className="hidden md:flex w-1/2 bg-blue-900 p-12 flex-col justify-center text-white relative">
          <img 
            src="https://picsum.photos/seed/abstract/800/1200" 
            alt="Abstract art" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">{isLogin ? 'Welcome Back' : 'Create your Account'}</h2>
            <p className="text-stone-300">{isLogin ? 'Log in to continue.' : 'Share your items and get deals!'}</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 p-12">
          <h2 className="text-3xl font-bold mb-8">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="First name" className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-stone-300'}`} value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
            <input type="text" placeholder="Last name" className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-stone-300'}`} value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
            {!isLogin && (
              <>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="userType" value="student" checked={formData.userType === 'student'} onChange={(e) => setFormData({...formData, userType: e.target.value})} /> Student
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="userType" value="community" checked={formData.userType === 'community'} onChange={(e) => setFormData({...formData, userType: e.target.value})} /> Community Member
                  </label>
                </div>
                {errors.userType && <p className="text-red-500 text-xs">{errors.userType}</p>}
              </>
            )}
            <input type="email" placeholder="Email address" className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-stone-300'}`} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            <input type="password" placeholder="Password" className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-stone-300'}`} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            {!isLogin && (
              <>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={formData.terms} onChange={(e) => setFormData({...formData, terms: e.target.checked})} /> Accept Terms & Conditions
                </label>
                {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
              </>
            )}
            <button className="w-full bg-blue-900 text-white py-3 font-semibold hover:bg-blue-800">
              {isLogin ? 'Sign In' : 'Join us →'}
            </button>
          </form>
          <div className="my-6 text-center text-stone-500 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLogin(!isLogin)} className="text-blue-900 font-bold ml-1">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
          <div className="space-y-3">
            <button onClick={() => console.log('Google Auth')} className="w-full border border-stone-300 py-3 font-medium hover:bg-blue-50 flex items-center justify-center gap-2">
              <Chrome className="w-5 h-5" /> Sign in with Google
            </button>
            <button onClick={() => console.log('Apple Auth')} className="w-full border border-stone-300 py-3 font-medium hover:bg-blue-50 flex items-center justify-center gap-2">
              <Apple className="w-5 h-5" /> Sign in with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
