export const Routes = {
  HOME: {
    path: '/',
    name: 'Inicio',
  },
  QUIENES_SOMOS: {
    path: '/nosotros',
    name: 'Quienes Somos',
  },
  SERVICIOS: {
    path: '/',
    name: 'Servicios',
  },
  CONTACTO: {
    path: '/',
    name: 'Contacto',
  },
};

export interface Route {
  path: string;
  name: string;
}
