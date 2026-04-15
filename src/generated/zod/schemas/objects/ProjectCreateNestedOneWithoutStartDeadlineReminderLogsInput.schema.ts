import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectCreateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInput>;
export const ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
