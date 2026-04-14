import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraSelectObjectSchema as LibraSelectObjectSchema } from './objects/LibraSelect.schema';
import { LibraIncludeObjectSchema as LibraIncludeObjectSchema } from './objects/LibraInclude.schema';
import { LibraUpdateInputObjectSchema as LibraUpdateInputObjectSchema } from './objects/LibraUpdateInput.schema';
import { LibraUncheckedUpdateInputObjectSchema as LibraUncheckedUpdateInputObjectSchema } from './objects/LibraUncheckedUpdateInput.schema';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './objects/LibraWhereUniqueInput.schema';

export const LibraUpdateOneSchema: z.ZodType<Prisma.LibraUpdateArgs> = z.object({ select: LibraSelectObjectSchema.optional(), include: LibraIncludeObjectSchema.optional(), data: z.union([LibraUpdateInputObjectSchema, LibraUncheckedUpdateInputObjectSchema]), where: LibraWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LibraUpdateArgs>;

export const LibraUpdateOneZodSchema = z.object({ select: LibraSelectObjectSchema.optional(), include: LibraIncludeObjectSchema.optional(), data: z.union([LibraUpdateInputObjectSchema, LibraUncheckedUpdateInputObjectSchema]), where: LibraWhereUniqueInputObjectSchema }).strict();