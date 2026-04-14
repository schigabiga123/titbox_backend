import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventOrderByWithRelationInputObjectSchema as TaskEventOrderByWithRelationInputObjectSchema } from './objects/TaskEventOrderByWithRelationInput.schema';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './objects/TaskEventWhereInput.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './objects/TaskEventWhereUniqueInput.schema';
import { TaskEventCountAggregateInputObjectSchema as TaskEventCountAggregateInputObjectSchema } from './objects/TaskEventCountAggregateInput.schema';

export const TaskEventCountSchema: z.ZodType<Prisma.TaskEventCountArgs> = z.object({ orderBy: z.union([TaskEventOrderByWithRelationInputObjectSchema, TaskEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventWhereInputObjectSchema.optional(), cursor: TaskEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TaskEventCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventCountArgs>;

export const TaskEventCountZodSchema = z.object({ orderBy: z.union([TaskEventOrderByWithRelationInputObjectSchema, TaskEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventWhereInputObjectSchema.optional(), cursor: TaskEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TaskEventCountAggregateInputObjectSchema ]).optional() }).strict();