import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventIncludeObjectSchema as TaskEventIncludeObjectSchema } from './objects/TaskEventInclude.schema';
import { TaskEventOrderByWithRelationInputObjectSchema as TaskEventOrderByWithRelationInputObjectSchema } from './objects/TaskEventOrderByWithRelationInput.schema';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './objects/TaskEventWhereInput.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './objects/TaskEventWhereUniqueInput.schema';
import { TaskEventScalarFieldEnumSchema } from './enums/TaskEventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskEventFindFirstSelectSchema: z.ZodType<Prisma.TaskEventSelect> = z.object({
    id: z.boolean().optional(),
    taskId: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    task: z.boolean().optional(),
    fields: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TaskEventSelect>;

export const TaskEventFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    taskId: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    task: z.boolean().optional(),
    fields: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TaskEventFindFirstSchema: z.ZodType<Prisma.TaskEventFindFirstArgs> = z.object({ select: TaskEventFindFirstSelectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), orderBy: z.union([TaskEventOrderByWithRelationInputObjectSchema, TaskEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventWhereInputObjectSchema.optional(), cursor: TaskEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskEventScalarFieldEnumSchema, TaskEventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventFindFirstArgs>;

export const TaskEventFindFirstZodSchema = z.object({ select: TaskEventFindFirstSelectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), orderBy: z.union([TaskEventOrderByWithRelationInputObjectSchema, TaskEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventWhereInputObjectSchema.optional(), cursor: TaskEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskEventScalarFieldEnumSchema, TaskEventScalarFieldEnumSchema.array()]).optional() }).strict();