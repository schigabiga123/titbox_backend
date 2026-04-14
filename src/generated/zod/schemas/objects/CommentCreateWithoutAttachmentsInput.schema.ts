import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutCommentsInputObjectSchema as TaskCreateNestedOneWithoutCommentsInputObjectSchema } from './TaskCreateNestedOneWithoutCommentsInput.schema';
import { CommentTaggedUserCreateNestedManyWithoutCommentInputObjectSchema as CommentTaggedUserCreateNestedManyWithoutCommentInputObjectSchema } from './CommentTaggedUserCreateNestedManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  submittedUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutCommentsInputObjectSchema),
  taggedUsers: z.lazy(() => CommentTaggedUserCreateNestedManyWithoutCommentInputObjectSchema).optional()
}).strict();
export const CommentCreateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.CommentCreateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateWithoutAttachmentsInput>;
export const CommentCreateWithoutAttachmentsInputObjectZodSchema = makeSchema();
