import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './objects/LibraWhereInput.schema';

export const LibraDeleteManySchema: z.ZodType<Prisma.LibraDeleteManyArgs> = z.object({ where: LibraWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LibraDeleteManyArgs>;

export const LibraDeleteManyZodSchema = z.object({ where: LibraWhereInputObjectSchema.optional() }).strict();