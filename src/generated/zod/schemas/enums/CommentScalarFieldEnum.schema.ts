import * as z from 'zod';

export const CommentScalarFieldEnumSchema = z.enum(['id', 'taskId', 'text', 'submittedUserId', 'createdAt'])

export type CommentScalarFieldEnum = z.infer<typeof CommentScalarFieldEnumSchema>;