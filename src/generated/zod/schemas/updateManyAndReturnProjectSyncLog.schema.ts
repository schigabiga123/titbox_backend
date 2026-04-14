import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogSelectObjectSchema as ProjectSyncLogSelectObjectSchema } from './objects/ProjectSyncLogSelect.schema';
import { ProjectSyncLogUpdateManyMutationInputObjectSchema as ProjectSyncLogUpdateManyMutationInputObjectSchema } from './objects/ProjectSyncLogUpdateManyMutationInput.schema';
import { ProjectSyncLogWhereInputObjectSchema as ProjectSyncLogWhereInputObjectSchema } from './objects/ProjectSyncLogWhereInput.schema';

export const ProjectSyncLogUpdateManyAndReturnSchema: z.ZodType<Prisma.ProjectSyncLogUpdateManyAndReturnArgs> = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), data: ProjectSyncLogUpdateManyMutationInputObjectSchema, where: ProjectSyncLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogUpdateManyAndReturnArgs>;

export const ProjectSyncLogUpdateManyAndReturnZodSchema = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), data: ProjectSyncLogUpdateManyMutationInputObjectSchema, where: ProjectSyncLogWhereInputObjectSchema.optional() }).strict();