/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      respiratorEditor: 'respiratorEditor',
      respiratorViewer: 'respiratorViewer',
      bedEditor: 'bedEditor',
      bedViewer: 'bedViewer',
      hospitalEditor: 'hospitalEditor',
      hospitalViewer: 'hospitalViewer',
      staffEditor: 'staffEditor',
      staffViewer: 'staffViewer',
    };
  }
}

module.exports = Roles;
