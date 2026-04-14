import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldOrderByWithRelationInputObjectSchema as TaskFieldOrderByWithRelationInputObjectSchema } from './objects/TaskFieldOrderByWithRelationInput.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './objects/TaskFieldWhereInput.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './objects/TaskFieldWhereUniqueInput.schema';
import { TaskFieldCountAggregateInputObjectSchema as TaskFieldCountAggregateInputObjectSchema } from './objects/TaskFieldCountAggregateInput.schema';
import { TaskFieldMinAggregateInputObjectSchema as TaskFieldMinAggregateInputObjectSchema } from './objects/TaskFieldMinAggregateInput.schema';
import { TaskFieldMaxAggregateInputObjectSchema as TaskFieldMaxAggregateInputObjectSchema } from './objects/TaskFieldMaxAggregateInput.schema';

export const TaskFieldAggregateSchema: z.ZodType<Prisma.TaskFieldAggregateArgs> = z.object({ orderBy: z.union([TaskFieldOrderByWithRelationInputObjectSchema, TaskFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskFieldWhereInputObjectSchema.optional(), cursor: TaskFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TaskFieldCountAggregateInputObjectSchema ]).optional(), _min: TaskFieldMinAggregateInputObjectSchema.optional(), _max: TaskFieldMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskFieldAggregateArgs>;

export const TaskFieldAggregateZodSchema = z.object({ orderBy: z.union([TaskFieldOrderByWithRelationInputObjectSchema, TaskFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskFieldWhereInputObjectSchema.optional(), cursor: TaskFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TaskFieldCountAggregateInputObjectSchema ]).optional(), _min: TaskFieldMinAggregateInputObjectSchema.optional(), _max: TaskFieldMaxAggregateInputObjectSchema.optional() }).strict();