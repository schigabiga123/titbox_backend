import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  partnerName: z.string().optional().nullable(),
  pocketId: z.string().optional().nullable(),
  title: z.string(),
  updatedAt: z.coerce.date().optional().nullable()
}).strict();
export const ProjectCreateManyInputObjectSchema: z.ZodType<Prisma.ProjectCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateManyInput>;
export const ProjectCreateManyInputObjectZodSchema = makeSchema();
