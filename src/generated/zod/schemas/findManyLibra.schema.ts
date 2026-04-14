import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraIncludeObjectSchema as LibraIncludeObjectSchema } from './objects/LibraInclude.schema';
import { LibraOrderByWithRelationInputObjectSchema as LibraOrderByWithRelationInputObjectSchema } from './objects/LibraOrderByWithRelationInput.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './objects/LibraWhereInput.schema';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './objects/LibraWhereUniqueInput.schema';
import { LibraScalarFieldEnumSchema } from './enums/LibraScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LibraFindManySelectSchema: z.ZodType<Prisma.LibraSelect> = z.object({
    id: z.boolean().optional(),
    projectId: z.boolean().optional(),
    taskId: z.boolean().optional(),
    szfCode: z.boolean().optional(),
    plateNumber: z.boolean().optional(),
    assignedUserId: z.boolean().optional(),
    amount: z.boolean().optional(),
    manuallyLibra: z.boolean().optional(),
    manuallyLibraComment: z.boolean().optional(),
    taskFieldId: z.boolean().optional(),
    task: z.boolean().optional(),
    taskField: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LibraSelect>;

export const LibraFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    projectId: z.boolean().optional(),
    taskId: z.boolean().optional(),
    szfCode: z.boolean().optional(),
    plateNumber: z.boolean().optional(),
    assignedUserId: z.boolean().optional(),
    amount: z.boolean().optional(),
    manuallyLibra: z.boolean().optional(),
    manuallyLibraComment: z.boolean().optional(),
    taskFieldId: z.boolean().optional(),
    task: z.boolean().optional(),
    taskField: z.boolean().optional()
  }).strict();

export const LibraFindManySchema: z.ZodType<Prisma.LibraFindManyArgs> = z.object({ select: LibraFindManySelectSchema.optional(), include: LibraIncludeObjectSchema.optional(), orderBy: z.union([LibraOrderByWithRelationInputObjectSchema, LibraOrderByWithRelationInputObjectSchema.array()]).optional(), where: LibraWhereInputObjectSchema.optional(), cursor: LibraWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LibraScalarFieldEnumSchema, LibraScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LibraFindManyArgs>;

export const LibraFindManyZodSchema = z.object({ select: LibraFindManySelectSchema.optional(), include: LibraIncludeObjectSchema.optional(), orderBy: z.union([LibraOrderByWithRelationInputObjectSchema, LibraOrderByWithRelationInputObjectSchema.array()]).optional(), where: LibraWhereInputObjectSchema.optional(), cursor: LibraWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LibraScalarFieldEnumSchema, LibraScalarFieldEnumSchema.array()]).optional() }).strict();