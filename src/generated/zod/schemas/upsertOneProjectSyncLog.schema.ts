import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogSelectObjectSchema as ProjectSyncLogSelectObjectSchema } from './objects/ProjectSyncLogSelect.schema';
import { ProjectSyncLogIncludeObjectSchema as ProjectSyncLogIncludeObjectSchema } from './objects/ProjectSyncLogInclude.schema';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './objects/ProjectSyncLogWhereUniqueInput.schema';
import { ProjectSyncLogCreateInputObjectSchema as ProjectSyncLogCreateInputObjectSchema } from './objects/ProjectSyncLogCreateInput.schema';
import { ProjectSyncLogUncheckedCreateInputObjectSchema as ProjectSyncLogUncheckedCreateInputObjectSchema } from './objects/ProjectSyncLogUncheckedCreateInput.schema';
import { ProjectSyncLogUpdateInputObjectSchema as ProjectSyncLogUpdateInputObjectSchema } from './objects/ProjectSyncLogUpdateInput.schema';
import { ProjectSyncLogUncheckedUpdateInputObjectSchema as ProjectSyncLogUncheckedUpdateInputObjectSchema } from './objects/ProjectSyncLogUncheckedUpdateInput.schema';

export const ProjectSyncLogUpsertOneSchema: z.ZodType<Prisma.ProjectSyncLogUpsertArgs> = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), where: ProjectSyncLogWhereUniqueInputObjectSchema, create: z.union([ ProjectSyncLogCreateInputObjectSchema, ProjectSyncLogUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectSyncLogUpdateInputObjectSchema, ProjectSyncLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogUpsertArgs>;

export const ProjectSyncLogUpsertOneZodSchema = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), where: ProjectSyncLogWhereUniqueInputObjectSchema, create: z.union([ ProjectSyncLogCreateInputObjectSchema, ProjectSyncLogUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectSyncLogUpdateInputObjectSchema, ProjectSyncLogUncheckedUpdateInputObjectSchema ]) }).strict();