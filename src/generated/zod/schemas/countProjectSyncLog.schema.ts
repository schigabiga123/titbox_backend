import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogOrderByWithRelationInputObjectSchema as ProjectSyncLogOrderByWithRelationInputObjectSchema } from './objects/ProjectSyncLogOrderByWithRelationInput.schema';
import { ProjectSyncLogWhereInputObjectSchema as ProjectSyncLogWhereInputObjectSchema } from './objects/ProjectSyncLogWhereInput.schema';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './objects/ProjectSyncLogWhereUniqueInput.schema';
import { ProjectSyncLogCountAggregateInputObjectSchema as ProjectSyncLogCountAggregateInputObjectSchema } from './objects/ProjectSyncLogCountAggregateInput.schema';

export const ProjectSyncLogCountSchema: z.ZodType<Prisma.ProjectSyncLogCountArgs> = z.object({ orderBy: z.union([ProjectSyncLogOrderByWithRelationInputObjectSchema, ProjectSyncLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectSyncLogWhereInputObjectSchema.optional(), cursor: ProjectSyncLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProjectSyncLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogCountArgs>;

export const ProjectSyncLogCountZodSchema = z.object({ orderBy: z.union([ProjectSyncLogOrderByWithRelationInputObjectSchema, ProjectSyncLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectSyncLogWhereInputObjectSchema.optional(), cursor: ProjectSyncLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProjectSyncLogCountAggregateInputObjectSchema ]).optional() }).strict();