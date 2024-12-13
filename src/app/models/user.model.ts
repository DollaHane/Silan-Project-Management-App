export interface User {
  id: string
  name: string;
  email: string;
  emailVerified: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}