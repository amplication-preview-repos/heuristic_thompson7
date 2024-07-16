import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContactWhereInput = {
  id?: StringFilter;
  emailAddress?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
