import { Admin as TAdmin } from "../api/admin/Admin";

export const ADMIN_TITLE_FIELD = "fullName";

export const AdminTitle = (record: TAdmin): string => {
  return record.fullName?.toString() || String(record.id);
};
