import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistCreateManyInputObjectSchema as PortaChecklistCreateManyInputObjectSchema } from './objects/PortaChecklistCreateManyInput.schema';

export const PortaChecklistCreateManySchema: z.ZodType<Prisma.PortaChecklistCreateManyArgs> = z.object({ data: z.union([ PortaChecklistCreateManyInputObjectSchema, z.array(PortaChecklistCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PortaChecklistCreateManyArgs>;

export const PortaChecklistCreateManyZodSchema = z.object({ data: z.union([ PortaChecklistCreateManyInputObjectSchema, z.array(PortaChecklistCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();