import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistIncludeObjectSchema as PortaChecklistIncludeObjectSchema } from './objects/PortaChecklistInclude.schema';
import { PortaChecklistOrderByWithRelationInputObjectSchema as PortaChecklistOrderByWithRelationInputObjectSchema } from './objects/PortaChecklistOrderByWithRelationInput.schema';
import { PortaChecklistWhereInputObjectSchema as PortaChecklistWhereInputObjectSchema } from './objects/PortaChecklistWhereInput.schema';
import { PortaChecklistWhereUniqueInputObjectSchema as PortaChecklistWhereUniqueInputObjectSchema } from './objects/PortaChecklistWhereUniqueInput.schema';
import { PortaChecklistScalarFieldEnumSchema } from './enums/PortaChecklistScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PortaChecklistFindManySelectSchema: z.ZodType<Prisma.PortaChecklistSelect> = z.object({
    id: z.boolean().optional(),
    taskId: z.boolean().optional(),
    isUserChecked: z.boolean().optional(),
    isTruckChecked: z.boolean().optional(),
    isTrailerChecked: z.boolean().optional(),
    isTraktorChecked: z.boolean().optional(),
    isBioChecked: z.boolean().optional(),
    isSzondaChecked: z.boolean().optional(),
    isStarted: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    task: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PortaChecklistSelect>;

export const PortaChecklistFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    taskId: z.boolean().optional(),
    isUserChecked: z.boolean().optional(),
    isTruckChecked: z.boolean().optional(),
    isTrailerChecked: z.boolean().optional(),
    isTraktorChecked: z.boolean().optional(),
    isBioChecked: z.boolean().optional(),
    isSzondaChecked: z.boolean().optional(),
    isStarted: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    task: z.boolean().optional()
  }).strict();

export const PortaChecklistFindManySchema: z.ZodType<Prisma.PortaChecklistFindManyArgs> = z.object({ select: PortaChecklistFindManySelectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), orderBy: z.union([PortaChecklistOrderByWithRelationInputObjectSchema, PortaChecklistOrderByWithRelationInputObjectSchema.array()]).optional(), where: PortaChecklistWhereInputObjectSchema.optional(), cursor: PortaChecklistWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PortaChecklistScalarFieldEnumSchema, PortaChecklistScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PortaChecklistFindManyArgs>;

export const PortaChecklistFindManyZodSchema = z.object({ select: PortaChecklistFindManySelectSchema.optional(), include: PortaChecklistIncludeObjectSchema.optional(), orderBy: z.union([PortaChecklistOrderByWithRelationInputObjectSchema, PortaChecklistOrderByWithRelationInputObjectSchema.array()]).optional(), where: PortaChecklistWhereInputObjectSchema.optional(), cursor: PortaChecklistWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PortaChecklistScalarFieldEnumSchema, PortaChecklistScalarFieldEnumSchema.array()]).optional() }).strict();