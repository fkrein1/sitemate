import { prisma } from '../../../database/prismaClient';
import { AppError } from '../../../errors/AppError';
import {
  CreateIssueSchema,
  DeleteIssueDTO,
  DeleteIssueSchema,
  ICreateIssueDTO,
  IUpdateIssueDTO,
  UpdateIssueSchema,
} from '../../dtos/IssueDTO';

export class IssueUseCase {
  async getAll() {
    return await prisma.issues.findMany();
  }

  async create({ title, description }: ICreateIssueDTO) {
    const parsed = CreateIssueSchema.safeParse({
      title,
      description,
    });
    if (!parsed.success) {
      throw new AppError(400, 'Invalid issue schema');
    }

    return await prisma.issues.create({
      data: {
        description,
        title,
      },
    });
  }

  async update({ title, description, id }: IUpdateIssueDTO) {
    const parsed = UpdateIssueSchema.safeParse({
      title,
      description,
      id,
    });
    if (!parsed.success) {
      throw new AppError(400, 'Invalid issue schema');
    }

    return await prisma.issues.update({
      where: {
        id,
      },
      data: {
        description,
        title,
      },
    });
  }

  async delete({ id }: DeleteIssueDTO) {
    const parsed = DeleteIssueSchema.safeParse({
      id,
    });
    if (!parsed.success) {
      throw new AppError(400, 'Invalid issue schema');
    }

    return await prisma.issues.delete({
      where: {
        id,
      },
    });
  }
}
