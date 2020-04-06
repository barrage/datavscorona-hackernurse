const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const HospitalService = require('../../services/hospitalService');

module.exports = async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      permissions.hospitalAutocomplete,
    );
    const { currentUser } = req;
    const roles = Array.from(currentUser.roles);
    const foundOwner = roles.find(element => element === 'owner');
    if(!foundOwner){
      console.dir(req.query);
      req.query.hospital = currentUser.hospital;
    }
    const payload = await new HospitalService(
      req,
    ).findAllAutocomplete(req.query, req.query.limit);

    res.status(200).send(payload);
  } catch (error) {
    if ([400, 403, 404].includes(error.code)) {
      return res.status(error.code).send(error.message);
    }

    console.error(error);
    return res.status(500).send(error.message);
  }
};
