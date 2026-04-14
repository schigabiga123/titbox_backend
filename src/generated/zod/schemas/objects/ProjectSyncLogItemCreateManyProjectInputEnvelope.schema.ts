import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemCreateManyProjectInputObjectSchema as ProjectSyncLogItemCreateManyProjectInputObjectSchema } from './ProjectSyncLogItemCreateManyProjectInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProjectSyncLogItemCreateManyProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemCreateManyProjectInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProjectSyncLogItemCreateManyProjectInputEnvelopeObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemCreateManyProjectInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemCreateManyProjectInputEnvelope>;
export const ProjectSyncLogItemCreateManyProjectInputEnvelopeObjectZodSchema = makeSchema();
