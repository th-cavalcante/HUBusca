// /src/utils/api.ts
import axios, { AxiosResponse } from 'axios';

export interface User {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  // Adicione mais propriedades conforme necessário
}

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const searchUser = async (username: string): Promise<User> => {
  const response: AxiosResponse<User> = await githubApi.get(`/users/${username}`);
  return response.data;
};
