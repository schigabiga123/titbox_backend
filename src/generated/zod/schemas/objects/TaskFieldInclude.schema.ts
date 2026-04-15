import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema';
import { AttachmentFindManySchema as AttachmentFindManySchema } from '../findManyAttachment.schema';
import { LibraArgsObjectSchema as LibraArgsObjectSchema } from './LibraArgs.schema';
import { TaskFieldCountOutputTypeArgsObjectSchema as TaskFieldCountOutputTypeArgsObjectSchema } from './TaskFieldCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  attachments: z.union([z.boolean(), z.lazy(() => AttachmentFindManySchema)]).optional(),
  libra: z.union([z.boolean(), z.lazy(() => LibraArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TaskFieldCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TaskFieldIncludeObjectSchema: z.ZodType<Prisma.TaskFieldInclude> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldInclude>;
export const TaskFieldIncludeObjectZodSchema = makeSchema();
