import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AttachmentWhereUniqueInputObjectSchema: z.ZodType<Prisma.AttachmentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentWhereUniqueInput>;
export const AttachmentWhereUniqueInputObjectZodSchema = makeSchema();
