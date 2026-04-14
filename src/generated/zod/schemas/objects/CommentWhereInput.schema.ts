import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TaskScalarRelationFilterObjectSchema as TaskScalarRelationFilterObjectSchema } from './TaskScalarRelationFilter.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { CommentTaggedUserListRelationFilterObjectSchema as CommentTaggedUserListRelationFilterObjectSchema } from './CommentTaggedUserListRelationFilter.schema';
import { AttachmentListRelationFilterObjectSchema as AttachmentListRelationFilterObjectSchema } from './AttachmentListRelationFilter.schema'

const commentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CommentWhereInputObjectSchema), z.lazy(() => CommentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CommentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CommentWhereInputObjectSchema), z.lazy(() => CommentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  submittedUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  task: z.union([z.lazy(() => TaskScalarRelationFilterObjectSchema), z.lazy(() => TaskWhereInputObjectSchema)]).optional(),
  taggedUsers: z.lazy(() => CommentTaggedUserListRelationFilterObjectSchema).optional(),
  attachments: z.lazy(() => AttachmentListRelationFilterObjectSchema).optional()
}).strict();
export const CommentWhereInputObjectSchema: z.ZodType<Prisma.CommentWhereInput> = commentwhereinputSchema as unknown as z.ZodType<Prisma.CommentWhereInput>;
export const CommentWhereInputObjectZodSchema = commentwhereinputSchema;
