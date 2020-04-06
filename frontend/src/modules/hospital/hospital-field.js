import { HospitalService } from '@/modules/hospital/hospital-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class HospitalField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/hospital',
      Permissions.values.hospitalRead,
      HospitalService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/hospital',
      Permissions.values.hospitalRead,
      HospitalService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
