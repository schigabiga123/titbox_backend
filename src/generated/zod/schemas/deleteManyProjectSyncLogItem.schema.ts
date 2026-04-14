import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogItemWhereInputObjectSchema as ProjectSyncLogItemWhereInputObjectSchema } from './objects/ProjectSyncLogItemWhereInput.schema';

export const ProjectSyncLogItemDeleteManySchema: z.ZodType<Prisma.ProjectSyncLogItemDeleteManyArgs> = z.object({ where: ProjectSyncLogItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemDeleteManyArgs>;

export const ProjectSyncLogItemDeleteManyZodSchema = z.object({ where: ProjectSyncLogItemWhereInputObjectSchema.optional() }).strict();