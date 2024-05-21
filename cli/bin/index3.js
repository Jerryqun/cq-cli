#!/usr/bin/env node

// const lib = require("cq-cli-lib");
// console.log("lib: ", lib);
// const argv = process.argv;
// console.log("argv: ", argv);

// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
// const arg = hideBin(process.argv);

// // console.log("yargs: ", yargs);

// yargs(arg)
//   .usage("Usage: cq-cli [command] <options>")
//   .strict()
//   .alias("h", "help")
//   .alias("v", "vision").argv;

const commander = require("commander");
const program = new commander.Command();
const pkg = require("../package.json");
program
  .name(Object.keys(pkg.bin)[0])
  .usage("<command> [options]")
  .version(pkg.version)
  .option(
    "-d, --debug",
    "是否开启调试",
    // (value, previous) => {
    //   console.log("previous: ", previous);
    //   console.log("value: ", value);
    // },
    false
  )
  .option(
    "-e, --envName <envName>",
    "获取环境变量名称",
    (value, previous) => {
      console.log("previous: ", previous);
      console.log("value: ", value);
    },
    "cq"
  );

const clone = program.command("clone <source> [destination]"); // <>表示必填  []表示选填

clone
  .description("clone a repository")
  .option("-f, --force", "是否强制拷贝")
  .action((source, destination, cmdObj) => {
    console.log("cmdObj: ", cmdObj);
    console.log("destination: ", destination);
    console.log("source: ", source);
    console.log("start clone");
  });

// 注册子命令
const service = new commander.Command("service");
service
  .command("start [port]")
  .description("start")
  .action((port) => {
    console.log(` service start at  ${port}`);
  });

service
  .command("stop [port]")
  .description("stop")
  .action((port) => {
    console.log(` service stop at  ${port}`);
  });

program.addCommand(service);

// 命中其他除了上面已注册的子命令
program
  .arguments("<cmd> [options]")
  .description("test command", {
    cmd: "command ro run",
    options: "options for options",
  })
  .action(function (cmd, options) {
    console.log("cmd: ", cmd);
    console.log("options: ", options);
  });

// 输入 cq-cli size react = package-size react
program
  .command("size [name]", "size package", {
    executableFile: "package-size",
    isDefault: true,
  })
  .alias("s");

program.parse(process.argv);

// program.outputHelp();
// console.log(program.opts());
