import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistSelectObjectSchema as PortaChecklistSelectObjectSchema } from './objects/PortaChecklistSelect.schema';
import { PortaChecklistIncludeObjectSchema as PortaChecklistIncludeObjectSchema } from './objects/PortaChecklistInclude.schema';
import { PortaChecklistWhereUniqueInputObjectSchema as PortaChecklistWhereUniqueInputObjectSchema } from './objects/PortaChecklistWhereUniqueInput.schema';

export const PortaChecklistFindUniqueOrThrowSchema: z.ZodType<Prisma.PortaChecklistFindUniqueOrThrowArgs> = z.object({ select: PortaChecklistSelectObjectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), where: PortaChecklistWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PortaChecklistFindUniqueOrThrowArgs>;

export const PortaChecklistFindUniqueOrThrowZodSchema = z.object({ select: PortaChecklistSelectObjectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), where: PortaChecklistWhereUniqueInputObjectSchema }).strict();