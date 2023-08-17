import { authorizePermission } from "@app/rbac/authorizationHelper";
import { ADMIN_ROUTES } from "@app/router/ConstantsRoutes";

export function checkPermission(type, permission = "") {
  if (permission == "all") return true;
  else if (permission == type) return true;
  else return false;
}





