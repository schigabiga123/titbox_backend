import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentArgsObjectSchema as CommentArgsObjectSchema } from './CommentArgs.schema';
import { TaskFieldArgsObjectSchema as TaskFieldArgsObjectSchema } from './TaskFieldArgs.schema';
import { TaskEventFieldArgsObjectSchema as TaskEventFieldArgsObjectSchema } from './TaskEventFieldArgs.schema'

const makeSchema = () => z.object({
  comment: z.union([z.boolean(), z.lazy(() => CommentArgsObjectSchema)]).optional(),
  taskField: z.union([z.boolean(), z.lazy(() => TaskFieldArgsObjectSchema)]).optional(),
  taskEventField: z.union([z.boolean(), z.lazy(() => TaskEventFieldArgsObjectSchema)]).optional()
}).strict();
export const AttachmentIncludeObjectSchema: z.ZodType<Prisma.AttachmentInclude> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentInclude>;
export const AttachmentIncludeObjectZodSchema = makeSchema();
