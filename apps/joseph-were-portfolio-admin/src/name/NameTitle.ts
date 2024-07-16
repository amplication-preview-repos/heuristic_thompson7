import { Name as TName } from "../api/name/Name";

export const NAME_TITLE_FIELD = "id";

export const NameTitle = (record: TName): string => {
  return record.id?.toString() || String(record.id);
};
