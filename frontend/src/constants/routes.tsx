import TableCrud from '../components/table/table';
import HomePage from '../components/homePage/Home';

const routesTest = [
  { path: '/', component: HomePage, name:"home", exact: true },
  { path: '/data', component: TableCrud }, // temp name of the path 
];

export default routesTest;