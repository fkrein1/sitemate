import { Request, Response } from 'express';

import { IssueUseCase } from './IssueUseCase';

export class IssueController {
  async getAll(_req: Request, res: Response) {
    const issueUseCase = new IssueUseCase();
    const issues = await issueUseCase.getAll();
    res.status(200).json(issues);
  }

  async create(req: Request, res: Response) {
    const { description, title } = req.body;
    const issueUseCase = new IssueUseCase();
    await issueUseCase.create({ description, title });
    res.status(201).json({ message: 'Issue was successfully created' });
  }

  async update(req: Request, res: Response) {
    const { description, title, id } = req.body;
    const issueUseCase = new IssueUseCase();
    await issueUseCase.update({ description, title, id });
    res.status(200).json({ message: 'Issue was successfully updated' });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const issueUseCase = new IssueUseCase();
    await issueUseCase.delete({ id });
    res.status(200).json({ message: 'Issue was successfully deleted' });
  }
}
