import { BedModel } from '@/modules/bed/bed-model';

const { fields } = BedModel;

export default [
  fields.id,
  fields.attachments,
  fields.hospital,
  fields.createdAt
];
