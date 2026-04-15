import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PortaChecklistSelectObjectSchema as PortaChecklistSelectObjectSchema } from './PortaChecklistSelect.schema';
import { PortaChecklistIncludeObjectSchema as PortaChecklistIncludeObjectSchema } from './PortaChecklistInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PortaChecklistSelectObjectSchema).optional(),
  include: z.lazy(() => PortaChecklistIncludeObjectSchema).optional()
}).strict();
export const PortaChecklistArgsObjectSchema = makeSchema();
export const PortaChecklistArgsObjectZodSchema = makeSchema();
