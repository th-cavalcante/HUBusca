import axios, { AxiosResponse } from 'axios';

const GITHUB_ACCESS_TOKEN = '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';


const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
  },
});

export interface User {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  followers: number;
  repos_url: string;
  repositories?: Repo[];
}

export interface Repo {
  name: string;
  language: string;
  id: number;
  description: string;
  created_at: string;
  pushed_at: string;
  url: string;
}

export const searchUser = async (username: string): Promise<User> => {
  const userResponse: AxiosResponse<User> = await githubApi.get(`/users/${username}`);
  const reposResponse: AxiosResponse<Repo[]> = await githubApi.get(userResponse.data.repos_url);

  const user: User = userResponse.data;
  user.repositories = reposResponse.data;

  return user;
};

export const getUserRepos = async (repos_url: string): Promise<Repo[]> => {
  const response: AxiosResponse<Repo[]> = await githubApi.get(repos_url);
  return response.data;
};
