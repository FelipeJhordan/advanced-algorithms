import chalk from "chalk";
import { getTimeDiff, isBlank } from "../util";

type NumberAndStringType = number | string;

class LoggerSingleton {
  private isStart = true;
  private methodName: string = "";
  private ms: number = 0;

  
  startAndEnd(methodName: string = "", ms?: number): void {
    if (isBlank(this.methodName)) {
      this.methodName = methodName;
      this.ms = new Date().getTime();
    }

    const sendMessage = this.isStart
      ? () =>
          console.log(
            chalk.black.bgBlue`\tTESTANDO A PERFORMANCE DO ${this.methodName}\t`
          )
      : () =>
          console.log(
            chalk.black.bgRed`\tTERMINANDO O TESTE ${
              this.methodName
            } após ${chalk.yellow(getTimeDiff(this.ms))}s\t`
          );

    sendMessage();
    if (!this.isStart) {
      return this.resetCase();
    }

    this.isStart = false;
  }

  private resetCase() {
    this.isStart = true;
    this.methodName = "";
  }

  sendLineMessage(message: NumberAndStringType) {
    console.log(
      chalk.blueBright.bgBlackBright`\tVALOR: ${message} TEMPO: ${chalk.yellow(
        getTimeDiff(this.ms)
      )}\t`
    );
  }

  showOrderArrayAndNewArray(olderArray: any[], newArray: any[]) {
    console.log(`\n\t${chalk.bold.magenta("RESULTADO")}`);
    console.table({
      ArrayAntigo: olderArray.length > 30 ? olderArray.slice(0, 30) : olderArray,
      Resultado: newArray.length > 30 ? newArray.slice(0, 30) : newArray,
    });
  }
}

export const Logger = new LoggerSingleton();
