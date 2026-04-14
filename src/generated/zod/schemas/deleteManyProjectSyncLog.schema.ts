import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogWhereInputObjectSchema as ProjectSyncLogWhereInputObjectSchema } from './objects/ProjectSyncLogWhereInput.schema';

export const ProjectSyncLogDeleteManySchema: z.ZodType<Prisma.ProjectSyncLogDeleteManyArgs> = z.object({ where: ProjectSyncLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogDeleteManyArgs>;

export const ProjectSyncLogDeleteManyZodSchema = z.object({ where: ProjectSyncLogWhereInputObjectSchema.optional() }).strict();