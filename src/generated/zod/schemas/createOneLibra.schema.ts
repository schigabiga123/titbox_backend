import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraSelectObjectSchema as LibraSelectObjectSchema } from './objects/LibraSelect.schema';
import { LibraIncludeObjectSchema as LibraIncludeObjectSchema } from './objects/LibraInclude.schema';
import { LibraCreateInputObjectSchema as LibraCreateInputObjectSchema } from './objects/LibraCreateInput.schema';
import { LibraUncheckedCreateInputObjectSchema as LibraUncheckedCreateInputObjectSchema } from './objects/LibraUncheckedCreateInput.schema';

export const LibraCreateOneSchema: z.ZodType<Prisma.LibraCreateArgs> = z.object({ select: LibraSelectObjectSchema.optional(), include: LibraIncludeObjectSchema.optional(), data: z.union([LibraCreateInputObjectSchema, LibraUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LibraCreateArgs>;

export const LibraCreateOneZodSchema = z.object({ select: LibraSelectObjectSchema.optional(), include: LibraIncludeObjectSchema.optional(), data: z.union([LibraCreateInputObjectSchema, LibraUncheckedCreateInputObjectSchema]) }).strict();