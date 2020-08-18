export default interface User {
  login: string;
  pic_url: string;
  public_favorites_count: number;
  followers: number;
  following: number;
  pro: boolean;
  account_details: AccountDetails;
}
export interface AccountDetails {
  email: string;
  private_favorites_count: number;
  active_theme_id: number;
  pro_expiration: string;
}
