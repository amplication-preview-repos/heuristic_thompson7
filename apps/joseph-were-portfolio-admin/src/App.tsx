import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NameList } from "./name/NameList";
import { NameCreate } from "./name/NameCreate";
import { NameEdit } from "./name/NameEdit";
import { NameShow } from "./name/NameShow";
import { SkillsList } from "./skills/SkillsList";
import { SkillsCreate } from "./skills/SkillsCreate";
import { SkillsEdit } from "./skills/SkillsEdit";
import { SkillsShow } from "./skills/SkillsShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { EducationList } from "./education/EducationList";
import { EducationCreate } from "./education/EducationCreate";
import { EducationEdit } from "./education/EducationEdit";
import { EducationShow } from "./education/EducationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Joseph Were Portfolio"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Name"
          list={NameList}
          edit={NameEdit}
          create={NameCreate}
          show={NameShow}
        />
        <Resource
          name="Skills"
          list={SkillsList}
          edit={SkillsEdit}
          create={SkillsCreate}
          show={SkillsShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="Education"
          list={EducationList}
          edit={EducationEdit}
          create={EducationCreate}
          show={EducationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
