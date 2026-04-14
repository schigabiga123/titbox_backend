import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutInspectionsInputObjectSchema as TaskCreateNestedOneWithoutInspectionsInputObjectSchema } from './TaskCreateNestedOneWithoutInspectionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  checked: z.boolean(),
  note: z.string().optional().nullable(),
  data: z.string().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutInspectionsInputObjectSchema)
}).strict();
export const InspectionCreateInputObjectSchema: z.ZodType<Prisma.InspectionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionCreateInput>;
export const InspectionCreateInputObjectZodSchema = makeSchema();
