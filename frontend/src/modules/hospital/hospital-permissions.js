import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class HospitalPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.hospitalRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.hospitalImport,
    );
    this.hospitalAutocomplete = permissionChecker.match(
      Permissions.values.hospitalAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.hospitalCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.hospitalEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.hospitalDestroy,
    );
  }
}
