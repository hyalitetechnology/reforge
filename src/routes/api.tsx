import { API_URL,AUTH_API_URL } from '../utils';

export const apiRoutes = {
  
  /////--auth api routes--//////
  login: `${AUTH_API_URL}/signIn`,
  logout: `${AUTH_API_URL}/logout`,
  signup: `${AUTH_API_URL}/signup`,
  passwordReset:`${AUTH_API_URL}/passwordreset`,
  newPassword:`${AUTH_API_URL}/newpassword`,
  /////-- protected backend routes -- //////



  users: `${API_URL}/users`,
  reviews: `${API_URL}/unknown`,
};
