import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { CategoryCreate} from "../src/components/CategoryCreate";
import { CategoryEdit  } from "../src/components/CategoryEdit";
import { CategoryList } from "../src/components/CategoryList";
import { PosterList } from "../src/components/PosterList";
import { PosterCreate } from "../src/components/PosterCreate";
import { PosterEdit } from "../src/components/PosterEdit";


const dataProvider = jsonServerProvider("https://react-admin-app-taq6.onrender.com");


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posters"
      list={PosterList}
      edit={PosterEdit}
      create={PosterCreate}
    />
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
      // recordRepresentation="name"
    />
  </Admin>
);

export default App;
