import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraCreateManyInputObjectSchema as LibraCreateManyInputObjectSchema } from './objects/LibraCreateManyInput.schema';

export const LibraCreateManySchema: z.ZodType<Prisma.LibraCreateManyArgs> = z.object({ data: z.union([ LibraCreateManyInputObjectSchema, z.array(LibraCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LibraCreateManyArgs>;

export const LibraCreateManyZodSchema = z.object({ data: z.union([ LibraCreateManyInputObjectSchema, z.array(LibraCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();