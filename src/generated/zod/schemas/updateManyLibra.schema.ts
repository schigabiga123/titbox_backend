import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraUpdateManyMutationInputObjectSchema as LibraUpdateManyMutationInputObjectSchema } from './objects/LibraUpdateManyMutationInput.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './objects/LibraWhereInput.schema';

export const LibraUpdateManySchema: z.ZodType<Prisma.LibraUpdateManyArgs> = z.object({ data: LibraUpdateManyMutationInputObjectSchema, where: LibraWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LibraUpdateManyArgs>;

export const LibraUpdateManyZodSchema = z.object({ data: LibraUpdateManyMutationInputObjectSchema, where: LibraWhereInputObjectSchema.optional() }).strict();