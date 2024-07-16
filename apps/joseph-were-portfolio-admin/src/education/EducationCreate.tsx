import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EducationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="level" source="level" />
      </SimpleForm>
    </Create>
  );
};
