import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistSelectObjectSchema as PortaChecklistSelectObjectSchema } from './objects/PortaChecklistSelect.schema';
import { PortaChecklistUpdateManyMutationInputObjectSchema as PortaChecklistUpdateManyMutationInputObjectSchema } from './objects/PortaChecklistUpdateManyMutationInput.schema';
import { PortaChecklistWhereInputObjectSchema as PortaChecklistWhereInputObjectSchema } from './objects/PortaChecklistWhereInput.schema';

export const PortaChecklistUpdateManyAndReturnSchema: z.ZodType<Prisma.PortaChecklistUpdateManyAndReturnArgs> = z.object({ select: PortaChecklistSelectObjectSchema.optional(), data: PortaChecklistUpdateManyMutationInputObjectSchema, where: PortaChecklistWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PortaChecklistUpdateManyAndReturnArgs>;

export const PortaChecklistUpdateManyAndReturnZodSchema = z.object({ select: PortaChecklistSelectObjectSchema.optional(), data: PortaChecklistUpdateManyMutationInputObjectSchema, where: PortaChecklistWhereInputObjectSchema.optional() }).strict();