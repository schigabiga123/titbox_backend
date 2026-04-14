import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  items: z.boolean().optional()
}).strict();
export const ProjectSyncLogCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProjectSyncLogCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogCountOutputTypeSelect>;
export const ProjectSyncLogCountOutputTypeSelectObjectZodSchema = makeSchema();
