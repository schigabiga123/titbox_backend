import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ProjectSyncLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogWhereUniqueInput>;
export const ProjectSyncLogWhereUniqueInputObjectZodSchema = makeSchema();
