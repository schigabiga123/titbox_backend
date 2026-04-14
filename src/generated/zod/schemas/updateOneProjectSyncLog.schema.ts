import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogSelectObjectSchema as ProjectSyncLogSelectObjectSchema } from './objects/ProjectSyncLogSelect.schema';
import { ProjectSyncLogIncludeObjectSchema as ProjectSyncLogIncludeObjectSchema } from './objects/ProjectSyncLogInclude.schema';
import { ProjectSyncLogUpdateInputObjectSchema as ProjectSyncLogUpdateInputObjectSchema } from './objects/ProjectSyncLogUpdateInput.schema';
import { ProjectSyncLogUncheckedUpdateInputObjectSchema as ProjectSyncLogUncheckedUpdateInputObjectSchema } from './objects/ProjectSyncLogUncheckedUpdateInput.schema';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './objects/ProjectSyncLogWhereUniqueInput.schema';

export const ProjectSyncLogUpdateOneSchema: z.ZodType<Prisma.ProjectSyncLogUpdateArgs> = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), data: z.union([ProjectSyncLogUpdateInputObjectSchema, ProjectSyncLogUncheckedUpdateInputObjectSchema]), where: ProjectSyncLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogUpdateArgs>;

export const ProjectSyncLogUpdateOneZodSchema = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), data: z.union([ProjectSyncLogUpdateInputObjectSchema, ProjectSyncLogUncheckedUpdateInputObjectSchema]), where: ProjectSyncLogWhereUniqueInputObjectSchema }).strict();