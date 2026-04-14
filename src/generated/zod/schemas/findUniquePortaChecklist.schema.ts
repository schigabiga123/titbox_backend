import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistSelectObjectSchema as PortaChecklistSelectObjectSchema } from './objects/PortaChecklistSelect.schema';
import { PortaChecklistIncludeObjectSchema as PortaChecklistIncludeObjectSchema } from './objects/PortaChecklistInclude.schema';
import { PortaChecklistWhereUniqueInputObjectSchema as PortaChecklistWhereUniqueInputObjectSchema } from './objects/PortaChecklistWhereUniqueInput.schema';

export const PortaChecklistFindUniqueSchema: z.ZodType<Prisma.PortaChecklistFindUniqueArgs> = z.object({ select: PortaChecklistSelectObjectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), where: PortaChecklistWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PortaChecklistFindUniqueArgs>;

export const PortaChecklistFindUniqueZodSchema = z.object({ select: PortaChecklistSelectObjectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), where: PortaChecklistWhereUniqueInputObjectSchema }).strict();