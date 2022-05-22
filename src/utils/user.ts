import { instance } from ".";

export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface User {
  id: number;
  email: string;
  username: string;
  bio: string | undefined;
  image: string | undefined;
  token: string;
}

interface RegInfo {
  email: string;
  username: string;
  password: string;
}

export async function fetchRegister(userInfo: RegInfo) {
  const res = await instance.post("/users", {
    user: userInfo,
  });

  console.log("注册", res);
  const data = res.data;

  if (res.status === 400) {
    if (data.msg === "duplicated username") {
      throw new Error("用户名重复");
    } else if (data.msg === "duplicated email") {
      throw new Error("邮箱重复");
    }
  } else if (res.status === 201) {
    return "注册成功";
  } else {
    throw new Error("未知错误，请联系管理员");
  }
}

interface LoginInfo {
  email: string;
  password: string;
}
export async function fetchLogin(user: LoginInfo) {
  const res = await instance.post("/users/login", {
    user,
  });
  console.log("登录", res);
  if (res.status === 200) {
    return res.data.user;
  } else {
    throw new Error("登录失败，邮箱或密码错误");
  }
}

export async function getUserInfo() {
  const res = await instance.get("/profiles/fischer").catch((err) => {
    throw new Error("网络错误");
  });
  const data = res.data;
  console.log("获取用户信息", data);
  if (res.status !== 200) {
    throw new Error(data.msg);
  }
  return data;
}
