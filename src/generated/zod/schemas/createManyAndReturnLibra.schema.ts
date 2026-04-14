import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraSelectObjectSchema as LibraSelectObjectSchema } from './objects/LibraSelect.schema';
import { LibraCreateManyInputObjectSchema as LibraCreateManyInputObjectSchema } from './objects/LibraCreateManyInput.schema';

export const LibraCreateManyAndReturnSchema: z.ZodType<Prisma.LibraCreateManyAndReturnArgs> = z.object({ select: LibraSelectObjectSchema.optional(), data: z.union([ LibraCreateManyInputObjectSchema, z.array(LibraCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LibraCreateManyAndReturnArgs>;

export const LibraCreateManyAndReturnZodSchema = z.object({ select: LibraSelectObjectSchema.optional(), data: z.union([ LibraCreateManyInputObjectSchema, z.array(LibraCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();