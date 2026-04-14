import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentArgsObjectSchema as CommentArgsObjectSchema } from './CommentArgs.schema';
import { TaskFieldArgsObjectSchema as TaskFieldArgsObjectSchema } from './TaskFieldArgs.schema';
import { TaskEventFieldArgsObjectSchema as TaskEventFieldArgsObjectSchema } from './TaskEventFieldArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  type: z.boolean().optional(),
  commentId: z.boolean().optional(),
  taskFieldId: z.boolean().optional(),
  taskEventFieldId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  comment: z.union([z.boolean(), z.lazy(() => CommentArgsObjectSchema)]).optional(),
  taskField: z.union([z.boolean(), z.lazy(() => TaskFieldArgsObjectSchema)]).optional(),
  taskEventField: z.union([z.boolean(), z.lazy(() => TaskEventFieldArgsObjectSchema)]).optional()
}).strict();
export const AttachmentSelectObjectSchema: z.ZodType<Prisma.AttachmentSelect> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentSelect>;
export const AttachmentSelectObjectZodSchema = makeSchema();
