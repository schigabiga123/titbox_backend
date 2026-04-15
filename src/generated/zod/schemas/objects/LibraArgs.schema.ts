import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraSelectObjectSchema as LibraSelectObjectSchema } from './LibraSelect.schema';
import { LibraIncludeObjectSchema as LibraIncludeObjectSchema } from './LibraInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LibraSelectObjectSchema).optional(),
  include: z.lazy(() => LibraIncludeObjectSchema).optional()
}).strict();
export const LibraArgsObjectSchema = makeSchema();
export const LibraArgsObjectZodSchema = makeSchema();
