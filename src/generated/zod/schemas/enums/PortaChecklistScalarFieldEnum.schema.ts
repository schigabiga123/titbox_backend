import * as z from 'zod';

export const PortaChecklistScalarFieldEnumSchema = z.enum(['id', 'taskId', 'isUserChecked', 'isTruckChecked', 'isTrailerChecked', 'isTraktorChecked', 'isBioChecked', 'isSzondaChecked', 'isStarted', 'startedAt'])

export type PortaChecklistScalarFieldEnum = z.infer<typeof PortaChecklistScalarFieldEnumSchema>;