import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import { HospitalField } from '@/modules/hospital/hospital-field';
import FilesField from '@/shared/fields/files-field';
import StringField from "@/shared/fields/string-field";

function label(name) {
  return i18n(`entities.bed.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true,
    "min": 2,
    "max": 255
  }),
  hospital: HospitalField.relationToOne('hospital', label('hospital'), {
    "required": true
  }),
  attachments: new FilesField('attachments', label('attachments'), 'bed/attachments',{
    "size": 1000000,
    "formats": [
      "txt",
      "pdf"
    ],
    "max": 3
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),

};

export class BedModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
