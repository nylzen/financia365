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
    path: '#servicios',
    name: 'Servicios',
  },
  CONTACTO: {
    path: '#contacto',
    name: 'Contacto',
  },
};

export interface Route {
  path: string;
  name: string;
}
