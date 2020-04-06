import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class BedPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.bedRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.bedImport,
    );
    this.bedAutocomplete = permissionChecker.match(
      Permissions.values.bedAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.bedCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.bedEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.bedDestroy,
    );
  }
}
