import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistWhereInputObjectSchema as PortaChecklistWhereInputObjectSchema } from './objects/PortaChecklistWhereInput.schema';

export const PortaChecklistDeleteManySchema: z.ZodType<Prisma.PortaChecklistDeleteManyArgs> = z.object({ where: PortaChecklistWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PortaChecklistDeleteManyArgs>;

export const PortaChecklistDeleteManyZodSchema = z.object({ where: PortaChecklistWhereInputObjectSchema.optional() }).strict();