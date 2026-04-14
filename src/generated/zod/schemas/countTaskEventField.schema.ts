import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldOrderByWithRelationInputObjectSchema as TaskEventFieldOrderByWithRelationInputObjectSchema } from './objects/TaskEventFieldOrderByWithRelationInput.schema';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './objects/TaskEventFieldWhereInput.schema';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './objects/TaskEventFieldWhereUniqueInput.schema';
import { TaskEventFieldCountAggregateInputObjectSchema as TaskEventFieldCountAggregateInputObjectSchema } from './objects/TaskEventFieldCountAggregateInput.schema';

export const TaskEventFieldCountSchema: z.ZodType<Prisma.TaskEventFieldCountArgs> = z.object({ orderBy: z.union([TaskEventFieldOrderByWithRelationInputObjectSchema, TaskEventFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventFieldWhereInputObjectSchema.optional(), cursor: TaskEventFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TaskEventFieldCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldCountArgs>;

export const TaskEventFieldCountZodSchema = z.object({ orderBy: z.union([TaskEventFieldOrderByWithRelationInputObjectSchema, TaskEventFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskEventFieldWhereInputObjectSchema.optional(), cursor: TaskEventFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TaskEventFieldCountAggregateInputObjectSchema ]).optional() }).strict();