import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldIncludeObjectSchema as TaskFieldIncludeObjectSchema } from './objects/TaskFieldInclude.schema';
import { TaskFieldOrderByWithRelationInputObjectSchema as TaskFieldOrderByWithRelationInputObjectSchema } from './objects/TaskFieldOrderByWithRelationInput.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './objects/TaskFieldWhereInput.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './objects/TaskFieldWhereUniqueInput.schema';
import { TaskFieldScalarFieldEnumSchema } from './enums/TaskFieldScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskFieldFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TaskFieldSelect> = z.object({
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

export const TaskFieldFindFirstOrThrowSelectZodSchema = z.object({
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

export const TaskFieldFindFirstOrThrowSchema: z.ZodType<Prisma.TaskFieldFindFirstOrThrowArgs> = z.object({ select: TaskFieldFindFirstOrThrowSelectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), orderBy: z.union([TaskFieldOrderByWithRelationInputObjectSchema, TaskFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskFieldWhereInputObjectSchema.optional(), cursor: TaskFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskFieldScalarFieldEnumSchema, TaskFieldScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskFieldFindFirstOrThrowArgs>;

export const TaskFieldFindFirstOrThrowZodSchema = z.object({ select: TaskFieldFindFirstOrThrowSelectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), orderBy: z.union([TaskFieldOrderByWithRelationInputObjectSchema, TaskFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskFieldWhereInputObjectSchema.optional(), cursor: TaskFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskFieldScalarFieldEnumSchema, TaskFieldScalarFieldEnumSchema.array()]).optional() }).strict();