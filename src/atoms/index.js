import { atom } from "recoil";

/* Permits */
export const permissionsStatus = atom({
  key: "permissionsStatusValue",
  default: false,
});
export const notificationPermissions = atom({
  key: "notificationPermissionsValue",
  default: false,
});
export const statsPermissions = atom({
  key: "statsPermissionsValue",
  default: false,
});
export const locationPermissions = atom({
  key: "locationPermissionsValue",
  default: false,
});
export const contactPermissions = atom({
  key: "contactPermissionsValue",
  default: false,
});
export const calendarPermissions = atom({
  key: "calendarPermissionsValue",
  default: false,
});
export const cameraPermissions = atom({
  key: "cameraPermissionsValue",
  default: false,
});
/*  */

/* Search */
export const searchGlobal = atom({
  key: "searchGlobalValue",
  default: "",
});
/* */