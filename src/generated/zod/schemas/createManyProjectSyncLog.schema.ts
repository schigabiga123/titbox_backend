import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogCreateManyInputObjectSchema as ProjectSyncLogCreateManyInputObjectSchema } from './objects/ProjectSyncLogCreateManyInput.schema';

export const ProjectSyncLogCreateManySchema: z.ZodType<Prisma.ProjectSyncLogCreateManyArgs> = z.object({ data: z.union([ ProjectSyncLogCreateManyInputObjectSchema, z.array(ProjectSyncLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogCreateManyArgs>;

export const ProjectSyncLogCreateManyZodSchema = z.object({ data: z.union([ ProjectSyncLogCreateManyInputObjectSchema, z.array(ProjectSyncLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();