import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraSelectObjectSchema as LibraSelectObjectSchema } from './objects/LibraSelect.schema';
import { LibraIncludeObjectSchema as LibraIncludeObjectSchema } from './objects/LibraInclude.schema';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './objects/LibraWhereUniqueInput.schema';

export const LibraDeleteOneSchema: z.ZodType<Prisma.LibraDeleteArgs> = z.object({ select: LibraSelectObjectSchema.optional(), include: LibraIncludeObjectSchema.optional(), where: LibraWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LibraDeleteArgs>;

export const LibraDeleteOneZodSchema = z.object({ select: LibraSelectObjectSchema.optional(), include: LibraIncludeObjectSchema.optional(), where: LibraWhereUniqueInputObjectSchema }).strict();