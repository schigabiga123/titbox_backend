import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogIncludeObjectSchema as ProjectSyncLogIncludeObjectSchema } from './objects/ProjectSyncLogInclude.schema';
import { ProjectSyncLogOrderByWithRelationInputObjectSchema as ProjectSyncLogOrderByWithRelationInputObjectSchema } from './objects/ProjectSyncLogOrderByWithRelationInput.schema';
import { ProjectSyncLogWhereInputObjectSchema as ProjectSyncLogWhereInputObjectSchema } from './objects/ProjectSyncLogWhereInput.schema';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './objects/ProjectSyncLogWhereUniqueInput.schema';
import { ProjectSyncLogScalarFieldEnumSchema } from './enums/ProjectSyncLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectSyncLogFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ProjectSyncLogSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    finishedAt: z.boolean().optional(),
    success: z.boolean().optional(),
    runnerName: z.boolean().optional(),
    scheduleType: z.boolean().optional(),
    selectedProjectTitle: z.boolean().optional(),
    projectId: z.boolean().optional(),
    processedProjects: z.boolean().optional(),
    createdProjects: z.boolean().optional(),
    updatedProjects: z.boolean().optional(),
    createdTasks: z.boolean().optional(),
    updatedTasks: z.boolean().optional(),
    updatedTaskFields: z.boolean().optional(),
    skippedProjects: z.boolean().optional(),
    skippedTaskSyncProjects: z.boolean().optional(),
    errorMessage: z.boolean().optional(),
    project: z.boolean().optional(),
    items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogSelect>;

export const ProjectSyncLogFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    finishedAt: z.boolean().optional(),
    success: z.boolean().optional(),
    runnerName: z.boolean().optional(),
    scheduleType: z.boolean().optional(),
    selectedProjectTitle: z.boolean().optional(),
    projectId: z.boolean().optional(),
    processedProjects: z.boolean().optional(),
    createdProjects: z.boolean().optional(),
    updatedProjects: z.boolean().optional(),
    createdTasks: z.boolean().optional(),
    updatedTasks: z.boolean().optional(),
    updatedTaskFields: z.boolean().optional(),
    skippedProjects: z.boolean().optional(),
    skippedTaskSyncProjects: z.boolean().optional(),
    errorMessage: z.boolean().optional(),
    project: z.boolean().optional(),
    items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProjectSyncLogFindFirstOrThrowSchema: z.ZodType<Prisma.ProjectSyncLogFindFirstOrThrowArgs> = z.object({ select: ProjectSyncLogFindFirstOrThrowSelectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), orderBy: z.union([ProjectSyncLogOrderByWithRelationInputObjectSchema, ProjectSyncLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectSyncLogWhereInputObjectSchema.optional(), cursor: ProjectSyncLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectSyncLogScalarFieldEnumSchema, ProjectSyncLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogFindFirstOrThrowArgs>;

export const ProjectSyncLogFindFirstOrThrowZodSchema = z.object({ select: ProjectSyncLogFindFirstOrThrowSelectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), orderBy: z.union([ProjectSyncLogOrderByWithRelationInputObjectSchema, ProjectSyncLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectSyncLogWhereInputObjectSchema.optional(), cursor: ProjectSyncLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectSyncLogScalarFieldEnumSchema, ProjectSyncLogScalarFieldEnumSchema.array()]).optional() }).strict();