import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectCreateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInput>;
export const ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
