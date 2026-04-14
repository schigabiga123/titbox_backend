import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldOrderByWithRelationInputObjectSchema as TaskFieldOrderByWithRelationInputObjectSchema } from './objects/TaskFieldOrderByWithRelationInput.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './objects/TaskFieldWhereInput.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './objects/TaskFieldWhereUniqueInput.schema';
import { TaskFieldCountAggregateInputObjectSchema as TaskFieldCountAggregateInputObjectSchema } from './objects/TaskFieldCountAggregateInput.schema';

export const TaskFieldCountSchema: z.ZodType<Prisma.TaskFieldCountArgs> = z.object({ orderBy: z.union([TaskFieldOrderByWithRelationInputObjectSchema, TaskFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskFieldWhereInputObjectSchema.optional(), cursor: TaskFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TaskFieldCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskFieldCountArgs>;

export const TaskFieldCountZodSchema = z.object({ orderBy: z.union([TaskFieldOrderByWithRelationInputObjectSchema, TaskFieldOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskFieldWhereInputObjectSchema.optional(), cursor: TaskFieldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TaskFieldCountAggregateInputObjectSchema ]).optional() }).strict();