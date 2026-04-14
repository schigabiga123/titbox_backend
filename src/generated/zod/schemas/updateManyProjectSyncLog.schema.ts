import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogUpdateManyMutationInputObjectSchema as ProjectSyncLogUpdateManyMutationInputObjectSchema } from './objects/ProjectSyncLogUpdateManyMutationInput.schema';
import { ProjectSyncLogWhereInputObjectSchema as ProjectSyncLogWhereInputObjectSchema } from './objects/ProjectSyncLogWhereInput.schema';

export const ProjectSyncLogUpdateManySchema: z.ZodType<Prisma.ProjectSyncLogUpdateManyArgs> = z.object({ data: ProjectSyncLogUpdateManyMutationInputObjectSchema, where: ProjectSyncLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogUpdateManyArgs>;

export const ProjectSyncLogUpdateManyZodSchema = z.object({ data: ProjectSyncLogUpdateManyMutationInputObjectSchema, where: ProjectSyncLogWhereInputObjectSchema.optional() }).strict();