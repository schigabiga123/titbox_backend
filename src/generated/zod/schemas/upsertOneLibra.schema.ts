import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraSelectObjectSchema as LibraSelectObjectSchema } from './objects/LibraSelect.schema';
import { LibraIncludeObjectSchema as LibraIncludeObjectSchema } from './objects/LibraInclude.schema';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './objects/LibraWhereUniqueInput.schema';
import { LibraCreateInputObjectSchema as LibraCreateInputObjectSchema } from './objects/LibraCreateInput.schema';
import { LibraUncheckedCreateInputObjectSchema as LibraUncheckedCreateInputObjectSchema } from './objects/LibraUncheckedCreateInput.schema';
import { LibraUpdateInputObjectSchema as LibraUpdateInputObjectSchema } from './objects/LibraUpdateInput.schema';
import { LibraUncheckedUpdateInputObjectSchema as LibraUncheckedUpdateInputObjectSchema } from './objects/LibraUncheckedUpdateInput.schema';

export const LibraUpsertOneSchema: z.ZodType<Prisma.LibraUpsertArgs> = z.object({ select: LibraSelectObjectSchema.optional(), include: LibraIncludeObjectSchema.optional(), where: LibraWhereUniqueInputObjectSchema, create: z.union([ LibraCreateInputObjectSchema, LibraUncheckedCreateInputObjectSchema ]), update: z.union([ LibraUpdateInputObjectSchema, LibraUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LibraUpsertArgs>;

export const LibraUpsertOneZodSchema = z.object({ select: LibraSelectObjectSchema.optional(), include: LibraIncludeObjectSchema.optional(), where: LibraWhereUniqueInputObjectSchema, create: z.union([ LibraCreateInputObjectSchema, LibraUncheckedCreateInputObjectSchema ]), update: z.union([ LibraUpdateInputObjectSchema, LibraUncheckedUpdateInputObjectSchema ]) }).strict();