import Roles from '@/security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,

          roles.staffEditor,
          roles.staffViewer,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      respiratorImport: {
        id: 'respiratorImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.respiratorEditor,
        ],
      },
      respiratorCreate: {
        id: 'respiratorCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.respiratorEditor,
        ],
        allowedStorageFolders: ['respirator'],
      },
      respiratorEdit: {
        id: 'respiratorEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.respiratorEditor,
        ],
        allowedStorageFolders: ['respirator'],
      },
      respiratorDestroy: {
        id: 'respiratorDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.respiratorEditor,
        ],
        allowedStorageFolders: ['respirator'],
      },
      respiratorRead: {
        id: 'respiratorRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.respiratorEditor,
          roles.respiratorViewer,
        ],
      },
      respiratorAutocomplete: {
        id: 'respiratorAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.respiratorEditor,
          roles.respiratorViewer,

        ],
      },

      bedImport: {
        id: 'bedImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.bedEditor,
        ],
      },
      bedCreate: {
        id: 'bedCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.bedEditor,
        ],
        allowedStorageFolders: ['bed'],
      },
      bedEdit: {
        id: 'bedEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.bedEditor,
        ],
        allowedStorageFolders: ['bed'],
      },
      bedDestroy: {
        id: 'bedDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.bedEditor,
        ],
        allowedStorageFolders: ['bed'],
      },
      bedRead: {
        id: 'bedRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.bedEditor,
          roles.bedViewer,
        ],
      },
      bedAutocomplete: {
        id: 'bedAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.bedEditor,
          roles.bedViewer,

        ],
      },

      hospitalImport: {
        id: 'hospitalImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.hospitalEditor,
        ],
      },
      hospitalCreate: {
        id: 'hospitalCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.hospitalEditor,
        ],
        allowedStorageFolders: ['hospital'],
      },
      hospitalEdit: {
        id: 'hospitalEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.hospitalEditor,
        ],
        allowedStorageFolders: ['hospital'],
      },
      hospitalDestroy: {
        id: 'hospitalDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.hospitalEditor,
        ],
        allowedStorageFolders: ['hospital'],
      },
      hospitalRead: {
        id: 'hospitalRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.hospitalEditor,
          roles.hospitalViewer,
        ],
      },
      hospitalAutocomplete: {
        id: 'hospitalAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.hospitalEditor,
          roles.hospitalViewer,
          roles.respiratorEditor,
          roles.respiratorViewer,
          roles.bedEditor,
          roles.bedViewer,
          roles.staffEditor,
          roles.staffViewer,
        ],
      },

      staffImport: {
        id: 'staffImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.staffEditor,
        ],
      },
      staffCreate: {
        id: 'staffCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.staffEditor,
        ],
        allowedStorageFolders: ['staff'],
      },
      staffEdit: {
        id: 'staffEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.staffEditor,
        ],
        allowedStorageFolders: ['staff'],
      },
      staffDestroy: {
        id: 'staffDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.staffEditor,
        ],
        allowedStorageFolders: ['staff'],
      },
      staffRead: {
        id: 'staffRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.staffEditor,
          roles.staffViewer,
        ],
      },
      staffAutocomplete: {
        id: 'staffAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.staffEditor,
          roles.staffViewer,

        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
