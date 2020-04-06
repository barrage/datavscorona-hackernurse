import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class StaffPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.staffRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.staffImport,
    );
    this.staffAutocomplete = permissionChecker.match(
      Permissions.values.staffAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.staffCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.staffEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.staffDestroy,
    );
  }
}
