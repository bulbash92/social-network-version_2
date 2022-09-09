import { instance } from '../api/api';

export const Auth = {
  async me() {
    try {
      const response = await instance.get(`auth/me`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async login(data: LoginParamsType) {
    try {
      return await instance.post(`auth/login`, data);
    } catch (error) {
      throw error;
    }
  },
  async logout() {
    try {
      return await instance.post(`auth/logout`, {});
    } catch (error) {
      throw error;
    }
  },
  captchaRequest() {
    return instance.get<{ url: string }>('security/get-captcha-url');
  },
};

export type LoginParamsType = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: boolean;
};
