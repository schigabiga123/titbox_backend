import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventArgsObjectSchema as TaskEventArgsObjectSchema } from './TaskEventArgs.schema';
import { AttachmentFindManySchema as AttachmentFindManySchema } from '../findManyAttachment.schema';
import { TaskEventFieldCountOutputTypeArgsObjectSchema as TaskEventFieldCountOutputTypeArgsObjectSchema } from './TaskEventFieldCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  taskEventId: z.boolean().optional(),
  name: z.boolean().optional(),
  data: z.boolean().optional(),
  type: z.boolean().optional(),
  taskEvent: z.union([z.boolean(), z.lazy(() => TaskEventArgsObjectSchema)]).optional(),
  attachments: z.union([z.boolean(), z.lazy(() => AttachmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TaskEventFieldCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TaskEventFieldSelectObjectSchema: z.ZodType<Prisma.TaskEventFieldSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldSelect>;
export const TaskEventFieldSelectObjectZodSchema = makeSchema();
