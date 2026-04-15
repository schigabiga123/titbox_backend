import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUpdateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInput>;
export const ProjectUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
