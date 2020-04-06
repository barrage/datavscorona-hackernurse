import { StaffModel } from '@/modules/staff/staff-model';

const { fields } = StaffModel;

export default [
  fields.id,
  fields.user,
  fields.hospital,
  fields.createdAt
];
