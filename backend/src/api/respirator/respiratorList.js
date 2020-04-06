const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const RespiratorService = require('../../services/respiratorService');

module.exports = async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      permissions.respiratorRead,
    );
    const { currentUser } = req;
    const roles = Array.from(currentUser.roles);
    const foundOwner = currentUser.roles.find(element => element === 'owner');
    if(!foundOwner){
      console.dir(roles);
      req.query.filter.hospital = currentUser.hospital;
    }
    const payload = await new RespiratorService(
      req,
    ).findAndCountAll(req.query);

    res.status(200).send(payload);
  } catch (error) {
    if ([400, 403, 404].includes(error.code)) {
      return res.status(error.code).send(error.message);
    }

    console.error(error);
    return res.status(500).send(error.message);
  }
};
