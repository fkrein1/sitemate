import { api } from '../lib/axios';

export type Issue = {
  description: string;
  title: string;
  id: string;
};

export type IssueCreate = {
  description: string;
  title: string;
};

export const issueServices = {
  async getAll() {
    const { data } = await api.get('/issue');
    return data as Issue[];
  },

  async delete(id: string) {
    const { data } = await api.delete(`/issue/${id}`);
    return data as { message: string };
  },

  async update(issue: Issue) {
    const { data } = await api.put('/issue', issue);
    return data as { message: string };
  },

  async create({ description, title }: IssueCreate) {
    const { data } = await api.post('/issue', { description, title });
    return data as { message: string };
  },
};
