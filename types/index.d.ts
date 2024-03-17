import React from "react";

/** 全局类型声明 */
declare global {
  // 定义nodeJS全局类型
  module NodeJS {
    interface Global {
      yourDataKey: {
        version: string;
      };
    }
  }

  // 全局的语言变量
  export namespace $$ {
    const language: string;
    const AppInfo: Readonly<{
      version: string;
      appName: string;
    }>;

    export namespace waveVoice {
      const getAppInfo: (key: string) => string;
    }
  }
}

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
