export interface Session {
  id: string;
  userId: string;
  name: string;
  email: string;
  token: string;
  expiration: Date;
}