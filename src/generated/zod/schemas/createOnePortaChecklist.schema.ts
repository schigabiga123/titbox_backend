import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistSelectObjectSchema as PortaChecklistSelectObjectSchema } from './objects/PortaChecklistSelect.schema';
import { PortaChecklistIncludeObjectSchema as PortaChecklistIncludeObjectSchema } from './objects/PortaChecklistInclude.schema';
import { PortaChecklistCreateInputObjectSchema as PortaChecklistCreateInputObjectSchema } from './objects/PortaChecklistCreateInput.schema';
import { PortaChecklistUncheckedCreateInputObjectSchema as PortaChecklistUncheckedCreateInputObjectSchema } from './objects/PortaChecklistUncheckedCreateInput.schema';

export const PortaChecklistCreateOneSchema: z.ZodType<Prisma.PortaChecklistCreateArgs> = z.object({ select: PortaChecklistSelectObjectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), data: z.union([PortaChecklistCreateInputObjectSchema, PortaChecklistUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PortaChecklistCreateArgs>;

export const PortaChecklistCreateOneZodSchema = z.object({ select: PortaChecklistSelectObjectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), data: z.union([PortaChecklistCreateInputObjectSchema, PortaChecklistUncheckedCreateInputObjectSchema]) }).strict();