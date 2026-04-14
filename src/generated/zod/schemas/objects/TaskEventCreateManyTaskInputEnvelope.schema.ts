import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventCreateManyTaskInputObjectSchema as TaskEventCreateManyTaskInputObjectSchema } from './TaskEventCreateManyTaskInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaskEventCreateManyTaskInputObjectSchema), z.lazy(() => TaskEventCreateManyTaskInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaskEventCreateManyTaskInputEnvelopeObjectSchema: z.ZodType<Prisma.TaskEventCreateManyTaskInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCreateManyTaskInputEnvelope>;
export const TaskEventCreateManyTaskInputEnvelopeObjectZodSchema = makeSchema();
