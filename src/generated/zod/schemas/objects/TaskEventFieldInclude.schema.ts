import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventArgsObjectSchema as TaskEventArgsObjectSchema } from './TaskEventArgs.schema';
import { AttachmentFindManySchema as AttachmentFindManySchema } from '../findManyAttachment.schema';
import { TaskEventFieldCountOutputTypeArgsObjectSchema as TaskEventFieldCountOutputTypeArgsObjectSchema } from './TaskEventFieldCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  taskEvent: z.union([z.boolean(), z.lazy(() => TaskEventArgsObjectSchema)]).optional(),
  attachments: z.union([z.boolean(), z.lazy(() => AttachmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TaskEventFieldCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TaskEventFieldIncludeObjectSchema: z.ZodType<Prisma.TaskEventFieldInclude> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldInclude>;
export const TaskEventFieldIncludeObjectZodSchema = makeSchema();
