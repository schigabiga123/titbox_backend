import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistSelectObjectSchema as PortaChecklistSelectObjectSchema } from './objects/PortaChecklistSelect.schema';
import { PortaChecklistIncludeObjectSchema as PortaChecklistIncludeObjectSchema } from './objects/PortaChecklistInclude.schema';
import { PortaChecklistUpdateInputObjectSchema as PortaChecklistUpdateInputObjectSchema } from './objects/PortaChecklistUpdateInput.schema';
import { PortaChecklistUncheckedUpdateInputObjectSchema as PortaChecklistUncheckedUpdateInputObjectSchema } from './objects/PortaChecklistUncheckedUpdateInput.schema';
import { PortaChecklistWhereUniqueInputObjectSchema as PortaChecklistWhereUniqueInputObjectSchema } from './objects/PortaChecklistWhereUniqueInput.schema';

export const PortaChecklistUpdateOneSchema: z.ZodType<Prisma.PortaChecklistUpdateArgs> = z.object({ select: PortaChecklistSelectObjectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), data: z.union([PortaChecklistUpdateInputObjectSchema, PortaChecklistUncheckedUpdateInputObjectSchema]), where: PortaChecklistWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PortaChecklistUpdateArgs>;

export const PortaChecklistUpdateOneZodSchema = z.object({ select: PortaChecklistSelectObjectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), data: z.union([PortaChecklistUpdateInputObjectSchema, PortaChecklistUncheckedUpdateInputObjectSchema]), where: PortaChecklistWhereUniqueInputObjectSchema }).strict();