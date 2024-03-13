import * as z from 'zod';

export const CreateIssueSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const UpdateIssueSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export const DeleteIssueSchema = z.object({
  id: z.string(),
});

export type ICreateIssueDTO = z.infer<typeof CreateIssueSchema>;
export type IUpdateIssueDTO = z.infer<typeof UpdateIssueSchema>;
export type DeleteIssueDTO = z.infer<typeof DeleteIssueSchema>;
