import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import { HospitalField } from '@/modules/hospital/hospital-field';
import { UserField } from '@/modules/auth/user-field';

function label(name) {
  return i18n(`entities.staff.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  user: UserField.relationToOne('user', label('user'), {}),
  hospital: HospitalField.relationToOne('hospital', label('hospital'), {}),
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

export class StaffModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
