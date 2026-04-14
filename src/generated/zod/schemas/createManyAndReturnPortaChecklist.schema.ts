import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistSelectObjectSchema as PortaChecklistSelectObjectSchema } from './objects/PortaChecklistSelect.schema';
import { PortaChecklistCreateManyInputObjectSchema as PortaChecklistCreateManyInputObjectSchema } from './objects/PortaChecklistCreateManyInput.schema';

export const PortaChecklistCreateManyAndReturnSchema: z.ZodType<Prisma.PortaChecklistCreateManyAndReturnArgs> = z.object({ select: PortaChecklistSelectObjectSchema.optional(), data: z.union([ PortaChecklistCreateManyInputObjectSchema, z.array(PortaChecklistCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PortaChecklistCreateManyAndReturnArgs>;

export const PortaChecklistCreateManyAndReturnZodSchema = z.object({ select: PortaChecklistSelectObjectSchema.optional(), data: z.union([ PortaChecklistCreateManyInputObjectSchema, z.array(PortaChecklistCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();