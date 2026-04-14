import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogSelectObjectSchema as ProjectSyncLogSelectObjectSchema } from './objects/ProjectSyncLogSelect.schema';
import { ProjectSyncLogCreateManyInputObjectSchema as ProjectSyncLogCreateManyInputObjectSchema } from './objects/ProjectSyncLogCreateManyInput.schema';

export const ProjectSyncLogCreateManyAndReturnSchema: z.ZodType<Prisma.ProjectSyncLogCreateManyAndReturnArgs> = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), data: z.union([ ProjectSyncLogCreateManyInputObjectSchema, z.array(ProjectSyncLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogCreateManyAndReturnArgs>;

export const ProjectSyncLogCreateManyAndReturnZodSchema = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), data: z.union([ ProjectSyncLogCreateManyInputObjectSchema, z.array(ProjectSyncLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();