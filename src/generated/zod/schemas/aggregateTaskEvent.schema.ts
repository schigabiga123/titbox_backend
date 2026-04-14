import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventOrderByWithRelationInputObjectSchema as TaskEventOrderByWithRelationInputObjectSchema } from './objects/TaskEventOrderByWithRelationInput.schema';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './objects/TaskEventWhereInput.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './objects/TaskEventWhereUniqueInput.schema';
import { TaskEventCountAggregateInputObjectSchema as TaskEventCountAggregateInputObjectSchema } from './objects/TaskEventCountAggregateInput.schema';
import { TaskEventMinAggregateInputObjectSchema as TaskEventMinAggregateInputObjectSchema } from './objects/TaskEventMinAggregateInput.schema';
import { TaskEventMaxAggregateInputObjectSchema as TaskEventMaxAggregateInputObjectSchema } from './objects/TaskEventMaxAggregateInput.schema';

export const TaskEventAggregateSchema: z.ZodType<Prisma.TaskEventAggregateArgs> = z.object({ orderBy: z.union([TaskEventOrderByWithRelationInputObjectSchema, TaskEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventWhereInputObjectSchema.optional(), cursor: TaskEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TaskEventCountAggregateInputObjectSchema ]).optional(), _min: TaskEventMinAggregateInputObjectSchema.optional(), _max: TaskEventMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventAggregateArgs>;

export const TaskEventAggregateZodSchema = z.object({ orderBy: z.union([TaskEventOrderByWithRelationInputObjectSchema, TaskEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventWhereInputObjectSchema.optional(), cursor: TaskEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TaskEventCountAggregateInputObjectSchema ]).optional(), _min: TaskEventMinAggregateInputObjectSchema.optional(), _max: TaskEventMaxAggregateInputObjectSchema.optional() }).strict();