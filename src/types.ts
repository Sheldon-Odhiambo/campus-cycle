export type UserType = 'student' | 'general';

export interface User {
  id: string;
  name: string;
  email: string;
  userType: UserType;
  isVerifiedStudent: boolean;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Books' | 'Furniture' | 'Electronics' | 'Clothes' | 'Accessories' | 'Sports' | 'Appliances';
  condition: 'New' | 'Used' | 'Like New';
  sellerType: UserType;
  sellerName: string;
  email: string;
  phone: string;
  imageUrl: string;
  isFeatured: boolean;
}
