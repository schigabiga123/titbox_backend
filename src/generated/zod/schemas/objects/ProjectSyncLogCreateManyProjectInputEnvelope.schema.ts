import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogCreateManyProjectInputObjectSchema as ProjectSyncLogCreateManyProjectInputObjectSchema } from './ProjectSyncLogCreateManyProjectInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProjectSyncLogCreateManyProjectInputObjectSchema), z.lazy(() => ProjectSyncLogCreateManyProjectInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProjectSyncLogCreateManyProjectInputEnvelopeObjectSchema: z.ZodType<Prisma.ProjectSyncLogCreateManyProjectInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogCreateManyProjectInputEnvelope>;
export const ProjectSyncLogCreateManyProjectInputEnvelopeObjectZodSchema = makeSchema();
