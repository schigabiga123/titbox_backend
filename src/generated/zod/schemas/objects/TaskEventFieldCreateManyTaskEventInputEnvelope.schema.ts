import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldCreateManyTaskEventInputObjectSchema as TaskEventFieldCreateManyTaskEventInputObjectSchema } from './TaskEventFieldCreateManyTaskEventInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaskEventFieldCreateManyTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldCreateManyTaskEventInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaskEventFieldCreateManyTaskEventInputEnvelopeObjectSchema: z.ZodType<Prisma.TaskEventFieldCreateManyTaskEventInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCreateManyTaskEventInputEnvelope>;
export const TaskEventFieldCreateManyTaskEventInputEnvelopeObjectZodSchema = makeSchema();
