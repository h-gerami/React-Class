export interface imgDataType {
  id: string;
  created_at: string;
  description?: string;
  alt_description: string;
  urls: imgDataUrlsType;
  likes: number;
  liked_by_user: boolean;
  user: userType;
}
interface imgDataUrlsType {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
interface profileImg {
  small: string;
  medium: string;
  large: string;
}
interface userType {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  portfolio_url: string;
  bio: string;
  profile_image: profileImg;
  instagram_username: string;
}
