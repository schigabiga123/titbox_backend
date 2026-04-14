import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistSelectObjectSchema as PortaChecklistSelectObjectSchema } from './objects/PortaChecklistSelect.schema';
import { PortaChecklistIncludeObjectSchema as PortaChecklistIncludeObjectSchema } from './objects/PortaChecklistInclude.schema';
import { PortaChecklistWhereUniqueInputObjectSchema as PortaChecklistWhereUniqueInputObjectSchema } from './objects/PortaChecklistWhereUniqueInput.schema';
import { PortaChecklistCreateInputObjectSchema as PortaChecklistCreateInputObjectSchema } from './objects/PortaChecklistCreateInput.schema';
import { PortaChecklistUncheckedCreateInputObjectSchema as PortaChecklistUncheckedCreateInputObjectSchema } from './objects/PortaChecklistUncheckedCreateInput.schema';
import { PortaChecklistUpdateInputObjectSchema as PortaChecklistUpdateInputObjectSchema } from './objects/PortaChecklistUpdateInput.schema';
import { PortaChecklistUncheckedUpdateInputObjectSchema as PortaChecklistUncheckedUpdateInputObjectSchema } from './objects/PortaChecklistUncheckedUpdateInput.schema';

export const PortaChecklistUpsertOneSchema: z.ZodType<Prisma.PortaChecklistUpsertArgs> = z.object({ select: PortaChecklistSelectObjectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), where: PortaChecklistWhereUniqueInputObjectSchema, create: z.union([ PortaChecklistCreateInputObjectSchema, PortaChecklistUncheckedCreateInputObjectSchema ]), update: z.union([ PortaChecklistUpdateInputObjectSchema, PortaChecklistUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PortaChecklistUpsertArgs>;

export const PortaChecklistUpsertOneZodSchema = z.object({ select: PortaChecklistSelectObjectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), where: PortaChecklistWhereUniqueInputObjectSchema, create: z.union([ PortaChecklistCreateInputObjectSchema, PortaChecklistUncheckedCreateInputObjectSchema ]), update: z.union([ PortaChecklistUpdateInputObjectSchema, PortaChecklistUncheckedUpdateInputObjectSchema ]) }).strict();