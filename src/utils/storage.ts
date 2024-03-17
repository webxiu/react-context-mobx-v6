const LOGIN_KEY = "_login_key";

export interface LoginInfoType {
  username: string;
  password: string;
}

// 登录信息
export const getLoginInfo = (): LoginInfoType => JSON.parse(localStorage.getItem(LOGIN_KEY) || "{}");
export const setLoginInfo = (loginInfo: LoginInfoType) => localStorage.setItem(LOGIN_KEY, JSON.stringify(loginInfo));
export const removeLoginInfo = () => localStorage.removeItem(LOGIN_KEY);
