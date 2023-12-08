// /src/utils/api.ts

import axios, { AxiosResponse } from 'axios';

export interface User {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  followers: number;
  repos_url: string;
}

export interface Repo {
  name: string;
  language: string;
  description: string;
  created_at: string;
  pushed_at: string;
}

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const searchUser = async (username: string): Promise<User> => {
  const response: AxiosResponse<User> = await githubApi.get(`/users/${username}`);
  return response.data;

  

  
};

export const getUserRepos = async (repos_url: string): Promise<Repo[]> => {
  const response: AxiosResponse<Repo[]> = await githubApi.get(repos_url);
  return response.data;
};
