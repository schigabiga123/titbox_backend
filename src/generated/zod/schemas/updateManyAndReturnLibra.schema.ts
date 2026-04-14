import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraSelectObjectSchema as LibraSelectObjectSchema } from './objects/LibraSelect.schema';
import { LibraUpdateManyMutationInputObjectSchema as LibraUpdateManyMutationInputObjectSchema } from './objects/LibraUpdateManyMutationInput.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './objects/LibraWhereInput.schema';

export const LibraUpdateManyAndReturnSchema: z.ZodType<Prisma.LibraUpdateManyAndReturnArgs> = z.object({ select: LibraSelectObjectSchema.optional(), data: LibraUpdateManyMutationInputObjectSchema, where: LibraWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LibraUpdateManyAndReturnArgs>;

export const LibraUpdateManyAndReturnZodSchema = z.object({ select: LibraSelectObjectSchema.optional(), data: LibraUpdateManyMutationInputObjectSchema, where: LibraWhereInputObjectSchema.optional() }).strict();