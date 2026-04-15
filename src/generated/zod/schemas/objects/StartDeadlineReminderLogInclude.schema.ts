import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional()
}).strict();
export const StartDeadlineReminderLogIncludeObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogInclude>;
export const StartDeadlineReminderLogIncludeObjectZodSchema = makeSchema();
