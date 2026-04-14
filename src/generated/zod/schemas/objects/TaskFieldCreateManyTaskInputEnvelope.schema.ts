import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldCreateManyTaskInputObjectSchema as TaskFieldCreateManyTaskInputObjectSchema } from './TaskFieldCreateManyTaskInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaskFieldCreateManyTaskInputObjectSchema), z.lazy(() => TaskFieldCreateManyTaskInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaskFieldCreateManyTaskInputEnvelopeObjectSchema: z.ZodType<Prisma.TaskFieldCreateManyTaskInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCreateManyTaskInputEnvelope>;
export const TaskFieldCreateManyTaskInputEnvelopeObjectZodSchema = makeSchema();
