import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema';
import { TaskFieldArgsObjectSchema as TaskFieldArgsObjectSchema } from './TaskFieldArgs.schema'

const makeSchema = () => z.object({
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  taskField: z.union([z.boolean(), z.lazy(() => TaskFieldArgsObjectSchema)]).optional()
}).strict();
export const LibraIncludeObjectSchema: z.ZodType<Prisma.LibraInclude> = makeSchema() as unknown as z.ZodType<Prisma.LibraInclude>;
export const LibraIncludeObjectZodSchema = makeSchema();
