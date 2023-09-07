export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  user_id: string | number;
}
