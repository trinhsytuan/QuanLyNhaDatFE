import { authorizePermission } from "@app/rbac/authorizationHelper";
import { ADMIN_ROUTES } from "@app/router/ConstantsRoutes";

export function checkPermission(org, permission = "") {
  if (permission == "all") return true;
  else if (permission == org?.type) return true;
  else return false;
}

