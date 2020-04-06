import { RespiratorModel } from '@/modules/respirator/respirator-model';

const { fields } = RespiratorModel;

export default [
  fields.name,
  fields.description,
  fields.unitPrice,
  fields.photos,
  fields.hospital,
];
