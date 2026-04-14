import * as z from 'zod';
// prettier-ignore
export const TaskModelSchema = z.object({
    id: z.string(),
    groupId: z.string(),
    projectId: z.string(),
    title: z.string(),
    desc: z.string().nullable(),
    status: z.string().nullable(),
    deadline: z.date().nullable(),
    createdAt: z.date().nullable(),
    startReminderSentAt: z.date().nullable(),
    fullAddress: z.string().nullable(),
    lat: z.number().nullable(),
    lng: z.number().nullable(),
    isPickUp: z.boolean().nullable(),
    accepted: z.boolean().nullable(),
    hanging: z.boolean().nullable(),
    assignedUserId: z.string().nullable(),
    assignedUserId2: z.string().nullable(),
    submittedUserId: z.string().nullable(),
    project: z.unknown(),
    comments: z.array(z.unknown()),
    fields: z.array(z.unknown()),
    inspections: z.array(z.unknown()),
    portaChecklist: z.unknown().nullable(),
    libra: z.unknown().nullable(),
    events: z.array(z.unknown())
}).strict();

export type TaskPureType = z.infer<typeof TaskModelSchema>;
