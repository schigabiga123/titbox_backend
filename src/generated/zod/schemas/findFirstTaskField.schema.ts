import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldIncludeObjectSchema as TaskFieldIncludeObjectSchema } from './objects/TaskFieldInclude.schema';
import { TaskFieldOrderByWithRelationInputObjectSchema as TaskFieldOrderByWithRelationInputObjectSchema } from './objects/TaskFieldOrderByWithRelationInput.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './objects/TaskFieldWhereInput.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './objects/TaskFieldWhereUniqueInput.schema';
import { TaskFieldScalarFieldEnumSchema } from './enums/TaskFieldScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskFieldFindFirstSelectSchema: z.ZodType<Prisma.TaskFieldSelect> = z.object({
    id: z.boolean().optional(),
    taskId: z.boolean().optional(),
    pocketId: z.boolean().optional(),
    name: z.boolean().optional(),
    data: z.boolean().optional(),
    type: z.boolean().optional(),
    task: z.boolean().optional(),
    attachments: z.boolean().optional(),
    libra: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TaskFieldSelect>;

export const TaskFieldFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    taskId: z.boolean().optional(),
    pocketId: z.boolean().optional(),
    name: z.boolean().optional(),
    data: z.boolean().optional(),
    type: z.boolean().optional(),
    task: z.boolean().optional(),
    attachments: z.boolean().optional(),
    libra: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TaskFieldFindFirstSchema: z.ZodType<Prisma.TaskFieldFindFirstArgs> = z.object({ select: TaskFieldFindFirstSelectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), orderBy: z.union([TaskFieldOrderByWithRelationInputObjectSchema, TaskFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskFieldWhereInputObjectSchema.optional(), cursor: TaskFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskFieldScalarFieldEnumSchema, TaskFieldScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskFieldFindFirstArgs>;

export const TaskFieldFindFirstZodSchema = z.object({ select: TaskFieldFindFirstSelectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), orderBy: z.union([TaskFieldOrderByWithRelationInputObjectSchema, TaskFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskFieldWhereInputObjectSchema.optional(), cursor: TaskFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskFieldScalarFieldEnumSchema, TaskFieldScalarFieldEnumSchema.array()]).optional() }).strict();