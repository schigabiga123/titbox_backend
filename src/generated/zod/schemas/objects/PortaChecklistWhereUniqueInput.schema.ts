import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string().optional()
}).strict();
export const PortaChecklistWhereUniqueInputObjectSchema: z.ZodType<Prisma.PortaChecklistWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistWhereUniqueInput>;
export const PortaChecklistWhereUniqueInputObjectZodSchema = makeSchema();
