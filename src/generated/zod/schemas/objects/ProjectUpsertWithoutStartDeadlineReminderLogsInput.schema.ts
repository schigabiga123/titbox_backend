import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUpdateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectCreateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutStartDeadlineReminderLogsInput>;
export const ProjectUpsertWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
