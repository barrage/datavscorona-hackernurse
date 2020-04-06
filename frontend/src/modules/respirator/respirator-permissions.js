import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class RespiratorPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.respiratorRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.respiratorImport,
    );
    this.respiratorAutocomplete = permissionChecker.match(
      Permissions.values.respiratorAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.respiratorCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.respiratorEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.respiratorDestroy,
    );
  }
}
