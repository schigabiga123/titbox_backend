import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventIncludeObjectSchema as TaskEventIncludeObjectSchema } from './objects/TaskEventInclude.schema';
import { TaskEventOrderByWithRelationInputObjectSchema as TaskEventOrderByWithRelationInputObjectSchema } from './objects/TaskEventOrderByWithRelationInput.schema';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './objects/TaskEventWhereInput.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './objects/TaskEventWhereUniqueInput.schema';
import { TaskEventScalarFieldEnumSchema } from './enums/TaskEventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskEventFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TaskEventSelect> = z.object({
    id: z.boolean().optional(),
    taskId: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    task: z.boolean().optional(),
    fields: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TaskEventSelect>;

export const TaskEventFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    taskId: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    task: z.boolean().optional(),
    fields: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TaskEventFindFirstOrThrowSchema: z.ZodType<Prisma.TaskEventFindFirstOrThrowArgs> = z.object({ select: TaskEventFindFirstOrThrowSelectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), orderBy: z.union([TaskEventOrderByWithRelationInputObjectSchema, TaskEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventWhereInputObjectSchema.optional(), cursor: TaskEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskEventScalarFieldEnumSchema, TaskEventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventFindFirstOrThrowArgs>;

export const TaskEventFindFirstOrThrowZodSchema = z.object({ select: TaskEventFindFirstOrThrowSelectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), orderBy: z.union([TaskEventOrderByWithRelationInputObjectSchema, TaskEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventWhereInputObjectSchema.optional(), cursor: TaskEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskEventScalarFieldEnumSchema, TaskEventScalarFieldEnumSchema.array()]).optional() }).strict();