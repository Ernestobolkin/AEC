import TableCrud from '../components/table/table';
import HomePage from '../components/homePage/Home';
import LoginPage from '../components/login/login';

const routes = [
  { path: '/', component: HomePage, name:"home", exact: true },
  { path: '/data', component: TableCrud }, // temp name of the path 
  { path:'/login' , component: LoginPage }
];

export default routes;