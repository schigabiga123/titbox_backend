import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateManyProjectInputObjectSchema as TaskCreateManyProjectInputObjectSchema } from './TaskCreateManyProjectInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaskCreateManyProjectInputObjectSchema), z.lazy(() => TaskCreateManyProjectInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaskCreateManyProjectInputEnvelopeObjectSchema: z.ZodType<Prisma.TaskCreateManyProjectInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateManyProjectInputEnvelope>;
export const TaskCreateManyProjectInputEnvelopeObjectZodSchema = makeSchema();
