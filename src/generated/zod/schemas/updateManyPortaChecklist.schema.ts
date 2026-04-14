import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistUpdateManyMutationInputObjectSchema as PortaChecklistUpdateManyMutationInputObjectSchema } from './objects/PortaChecklistUpdateManyMutationInput.schema';
import { PortaChecklistWhereInputObjectSchema as PortaChecklistWhereInputObjectSchema } from './objects/PortaChecklistWhereInput.schema';

export const PortaChecklistUpdateManySchema: z.ZodType<Prisma.PortaChecklistUpdateManyArgs> = z.object({ data: PortaChecklistUpdateManyMutationInputObjectSchema, where: PortaChecklistWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PortaChecklistUpdateManyArgs>;

export const PortaChecklistUpdateManyZodSchema = z.object({ data: PortaChecklistUpdateManyMutationInputObjectSchema, where: PortaChecklistWhereInputObjectSchema.optional() }).strict();