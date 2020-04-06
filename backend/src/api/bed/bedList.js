const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const BedService = require('../../services/bedService');

module.exports = async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      permissions.bedRead,
    );
    const { currentUser } = req;
    const roles = Array.from(currentUser.roles);
    const foundOwner = roles.find(element => element === 'owner');
    if(!foundOwner){
      req.query.filter.hospital = currentUser.hospital;
    }
    const payload = await new BedService(
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
