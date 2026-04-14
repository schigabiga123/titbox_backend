import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemCreateManySyncLogInputObjectSchema as ProjectSyncLogItemCreateManySyncLogInputObjectSchema } from './ProjectSyncLogItemCreateManySyncLogInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProjectSyncLogItemCreateManySyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemCreateManySyncLogInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProjectSyncLogItemCreateManySyncLogInputEnvelopeObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemCreateManySyncLogInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemCreateManySyncLogInputEnvelope>;
export const ProjectSyncLogItemCreateManySyncLogInputEnvelopeObjectZodSchema = makeSchema();
