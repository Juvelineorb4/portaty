export const settings = {
  buttons: [
    {
      title: "App permissions",
      subtitle: "Set which permissions the app has access to.",
      icon: {
        left: require("@/utils/images/lock.png"),
        right: require("@/utils/images/arrow_right.png"),
      },
      route: "Permissions",
      // routePush: true,
    },
    {
      title: "Introduction",
      subtitle: "Was guided through our new app.",
      icon: {
        left: require("@/utils/images/question.png"),
        right: require("@/utils/images/arrow_right.png"),
      },
      route: "Introduction",
      // routePush: true,
    },
    {
      title: "Privacy & Policy",
      subtitle: "See details of our policy",
      icon: {
        left: require("@/utils/images/folder.png"),
        right: require("@/utils/images/arrow_right.png"),
      },
      route: "Terms",
      // routePush: true,
    },
    {
      title: "App specs",
      subtitle: "See details about the app",
      icon: {
        left: require("@/utils/images/info_white.png"),
        right: require("@/utils/images/arrow_right.png"),
      },
      route: "About",
      // routePush: true,
    },
    {
      title: "Logout",
      icon: {
        left: require("@/utils/images/exit.png"),
      },
      // route: "Welcome",
      // routePush: true,
    },
  ],
};
