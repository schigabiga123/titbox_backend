import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserCreateNestedManyWithoutCommentInputObjectSchema as CommentTaggedUserCreateNestedManyWithoutCommentInputObjectSchema } from './CommentTaggedUserCreateNestedManyWithoutCommentInput.schema';
import { AttachmentCreateNestedManyWithoutCommentInputObjectSchema as AttachmentCreateNestedManyWithoutCommentInputObjectSchema } from './AttachmentCreateNestedManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  submittedUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  taggedUsers: z.lazy(() => CommentTaggedUserCreateNestedManyWithoutCommentInputObjectSchema).optional(),
  attachments: z.lazy(() => AttachmentCreateNestedManyWithoutCommentInputObjectSchema).optional()
}).strict();
export const CommentCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.CommentCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateWithoutTaskInput>;
export const CommentCreateWithoutTaskInputObjectZodSchema = makeSchema();
