import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogItemCreateManyInputObjectSchema as ProjectSyncLogItemCreateManyInputObjectSchema } from './objects/ProjectSyncLogItemCreateManyInput.schema';

export const ProjectSyncLogItemCreateManySchema: z.ZodType<Prisma.ProjectSyncLogItemCreateManyArgs> = z.object({ data: z.union([ ProjectSyncLogItemCreateManyInputObjectSchema, z.array(ProjectSyncLogItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemCreateManyArgs>;

export const ProjectSyncLogItemCreateManyZodSchema = z.object({ data: z.union([ ProjectSyncLogItemCreateManyInputObjectSchema, z.array(ProjectSyncLogItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();