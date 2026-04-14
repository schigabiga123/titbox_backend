import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema'

const makeSchema = () => z.object({
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional()
}).strict();
export const PortaChecklistIncludeObjectSchema: z.ZodType<Prisma.PortaChecklistInclude> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistInclude>;
export const PortaChecklistIncludeObjectZodSchema = makeSchema();
