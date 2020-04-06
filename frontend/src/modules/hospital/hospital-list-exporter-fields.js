import { HospitalModel } from '@/modules/hospital/hospital-model';

const { fields } = HospitalModel;

export default [
  fields.id,
  fields.name,
  fields.createdAt
];
