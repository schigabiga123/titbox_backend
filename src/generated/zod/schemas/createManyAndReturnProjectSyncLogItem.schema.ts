import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogItemSelectObjectSchema as ProjectSyncLogItemSelectObjectSchema } from './objects/ProjectSyncLogItemSelect.schema';
import { ProjectSyncLogItemCreateManyInputObjectSchema as ProjectSyncLogItemCreateManyInputObjectSchema } from './objects/ProjectSyncLogItemCreateManyInput.schema';

export const ProjectSyncLogItemCreateManyAndReturnSchema: z.ZodType<Prisma.ProjectSyncLogItemCreateManyAndReturnArgs> = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), data: z.union([ ProjectSyncLogItemCreateManyInputObjectSchema, z.array(ProjectSyncLogItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemCreateManyAndReturnArgs>;

export const ProjectSyncLogItemCreateManyAndReturnZodSchema = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), data: z.union([ ProjectSyncLogItemCreateManyInputObjectSchema, z.array(ProjectSyncLogItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();