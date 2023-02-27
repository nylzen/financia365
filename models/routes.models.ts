export const Routes = {
  HOME: {
    path: '/',
    name: 'Home',
  },
  ABOUT: {
    path: '#about',
    name: 'About',
  },
};

export interface Route {
  path: string;
  name: string;
}
