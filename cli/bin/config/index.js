/*
  @dest: 使用配置文件
 */
module.exports = {
  npmUrl: "https://registry.npmjs.org/shc-cli/latest",
  projectList: [
    {
      type: "list",
      message: "请选择拉取的模版类型:",
      name: "type",
      choices: [
        {
          name: "webpc-tpl",
          value: {
            url: "http://gitlab.alibaba-inc.com/wisdomhammer/webpc-tpl.git",
            gitName: "webpc-tpl",
            val: "webpc-tpl",
          },
        },
        {
          name: "web-mobile-h5-tpl",
          value: {
            url: "http://gitlab.alibaba-inc.com/wisdomhammer/web-mobile-h5-tpl.git",
            gitName: "web-mobile-h5-tpl",
            val: "web-mobile-h5-tpl",
          },
        },
        {
          name: "web-mobile-rax-tpl",
          value: {
            url: "http://gitlab.alibaba-inc.com/wisdomhammer/web-mobile-rax-tpl.git",
            gitName: "web-mobile-rax-tpl",
            val: "web-mobile-rax-tpl",
          },
        },
      ],
    },
  ],
};
