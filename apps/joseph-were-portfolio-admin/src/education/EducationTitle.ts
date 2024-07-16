import { Education as TEducation } from "../api/education/Education";

export const EDUCATION_TITLE_FIELD = "name";

export const EducationTitle = (record: TEducation): string => {
  return record.name?.toString() || String(record.id);
};
