import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldIncludeObjectSchema as TaskEventFieldIncludeObjectSchema } from './objects/TaskEventFieldInclude.schema';
import { TaskEventFieldOrderByWithRelationInputObjectSchema as TaskEventFieldOrderByWithRelationInputObjectSchema } from './objects/TaskEventFieldOrderByWithRelationInput.schema';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './objects/TaskEventFieldWhereInput.schema';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './objects/TaskEventFieldWhereUniqueInput.schema';
import { TaskEventFieldScalarFieldEnumSchema } from './enums/TaskEventFieldScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskEventFieldFindFirstSelectSchema: z.ZodType<Prisma.TaskEventFieldSelect> = z.object({
    id: z.boolean().optional(),
    taskEventId: z.boolean().optional(),
    name: z.boolean().optional(),
    data: z.boolean().optional(),
    type: z.boolean().optional(),
    taskEvent: z.boolean().optional(),
    attachments: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldSelect>;

export const TaskEventFieldFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    taskEventId: z.boolean().optional(),
    name: z.boolean().optional(),
    data: z.boolean().optional(),
    type: z.boolean().optional(),
    taskEvent: z.boolean().optional(),
    attachments: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TaskEventFieldFindFirstSchema: z.ZodType<Prisma.TaskEventFieldFindFirstArgs> = z.object({ select: TaskEventFieldFindFirstSelectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), orderBy: z.union([TaskEventFieldOrderByWithRelationInputObjectSchema, TaskEventFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventFieldWhereInputObjectSchema.optional(), cursor: TaskEventFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskEventFieldScalarFieldEnumSchema, TaskEventFieldScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldFindFirstArgs>;

export const TaskEventFieldFindFirstZodSchema = z.object({ select: TaskEventFieldFindFirstSelectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), orderBy: z.union([TaskEventFieldOrderByWithRelationInputObjectSchema, TaskEventFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventFieldWhereInputObjectSchema.optional(), cursor: TaskEventFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskEventFieldScalarFieldEnumSchema, TaskEventFieldScalarFieldEnumSchema.array()]).optional() }).strict();