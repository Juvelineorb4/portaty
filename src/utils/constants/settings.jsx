export const settings = {
  buttons: [
    {
      title: "Permisos de la aplicación",
      subtitle: "Establezca a qué permisos tiene acceso la aplicación.",
      icon: {
        left: require("@/utils/images/lock.png"),
        right: require("@/utils/images/arrow_right.png"),
      },
      route: "Permissions",
      // routePush: true,
    },
    {
      title: "Introducción",
      subtitle: "Guía de nuestra aplicación.",
      icon: {
        left: require("@/utils/images/question.png"),
        right: require("@/utils/images/arrow_right.png"),
      },
      route: "Introduction",
      // routePush: true,
    },
    {
      title: "Política de privacidad",
      subtitle: "Ver detalles de nuestra política.",
      icon: {
        left: require("@/utils/images/folder.png"),
        right: require("@/utils/images/arrow_right.png"),
      },
      route: "Terms",
      // routePush: true,
    },
    {
      title: "Especificaciones de la aplicación",
      subtitle: "Ver detalles sobre la aplicación",
      icon: {
        left: require("@/utils/images/info_white.png"),
        right: require("@/utils/images/arrow_right.png"),
      },
      route: "About",
      // routePush: true,
    },
    {
      title: "Cerrar sesión",
      icon: {
        left: require("@/utils/images/exit.png"),
      },
      // route: "Welcome",
      // routePush: true,
    },
  ],
};
