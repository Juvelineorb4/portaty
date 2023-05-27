export const settings = {
  buttons: [
    {
      title: "App permissions",
      subtitle: "Set which permissions the app has access to.",
      icon: {
        left: {
          name: "lock-outline",
          size: 20,
          color: "white",
          type: 'MTI'
        },
        right: {
          name: "arrow-right",
          size: 24,
          color: "#404040",
          type: 'MTI'
        },
      },
      route: "Permissions",
      // routePush: true,
    },
    {
      title: "Introduction",
      subtitle: "Was guided through our new app.",
      icon: {
        left: {
          name: "crosshairs-question",
          size: 20,
          color: "white",
          type: 'MTI'
        },
        right: {
          name: "arrow-right",
          size: 24,
          color: "#404040",
          type: 'MTI'
        },
      },
      route: "Introduction",
      // routePush: true,
    },
    {
      title: "Privacy & Policy",
      subtitle: "See details of our policy",
      icon: {
        left: {
          name: "file-document-outline",
          size: 20,
          color: "white",
          type: 'MTI'
        },
        right: {
          name: "arrow-right",
          size: 24,
          color: "#404040",
          type: 'MTI'
        },
      },
      route: "Terms",
      // routePush: true,
    },
    {
      title: "App specs",
      subtitle: "See details about the app",
      icon: {
        left: {
          name: "information-outline",
          size: 20,
          color: "white",
          type: 'MTI'
        },
        right: {
          name: "arrow-right",
          size: 24,
          color: "#404040",
          type: 'MTI'
        },
      },
      route: "About",
      // routePush: true,
    },
    {
      title: "Logout",
      icon: {
        left: {
          name: "logout",
          size: 20,
          color: "white",
          type: 'MTI'
        },
      },
      route: "Welcome",
      // routePush: true,
    },
    {
      title: "Notificaciones",
      subtitle: "",
      icon: {
        left: require("@/utils/images/info_white.png"),
        right: require("@/utils/images/arrow_right.png"),
      },
      route: "Notifications_Profile",
      // routePush: true,
    },
  ],
};
