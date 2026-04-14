import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string().optional(),
  taskFieldId: z.string().optional()
}).strict();
export const LibraWhereUniqueInputObjectSchema: z.ZodType<Prisma.LibraWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraWhereUniqueInput>;
export const LibraWhereUniqueInputObjectZodSchema = makeSchema();
