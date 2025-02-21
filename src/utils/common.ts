import { ICookieStoreObj } from "../types/common";

export const convertObjectToCookies = (obj: ICookieStoreObj[]) => {
  return obj.map((item) => `${item.name}=${item.value}`).join("; ");
};
