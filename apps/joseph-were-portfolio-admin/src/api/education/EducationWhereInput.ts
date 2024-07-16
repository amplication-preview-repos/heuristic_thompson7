import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EducationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  level?: StringNullableFilter;
};
