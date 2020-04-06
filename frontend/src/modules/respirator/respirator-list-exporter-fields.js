import { RespiratorModel } from '@/modules/respirator/respirator-model';

const { fields } = RespiratorModel;

export default [
  fields.id,
  fields.name,
  fields.description,
  fields.unitPrice,
  fields.photos,
  fields.hospital,
  fields.createdAt
];
