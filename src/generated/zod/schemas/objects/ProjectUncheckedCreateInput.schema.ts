import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskUncheckedCreateNestedManyWithoutProjectInputObjectSchema as TaskUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutProjectInput.schema';
import { ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema as ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInput.schema';
import { ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectSchema as ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  partnerName: z.string().optional().nullable(),
  pocketId: z.string().optional().nullable(),
  title: z.string(),
  updatedAt: z.coerce.date().optional().nullable(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutProjectInputObjectSchema),
  syncLogs: z.lazy(() => ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema),
  syncLogItems: z.lazy(() => ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectSchema)
}).strict();
export const ProjectUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateInput>;
export const ProjectUncheckedCreateInputObjectZodSchema = makeSchema();
