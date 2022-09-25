import { Logger } from "../../logger/LoggerSingleton";
import { ISortMethod } from "../types/ISortMethod";

export class InsertMethod implements ISortMethod {
    execute(values: number[]): void {
        Logger.startAndEnd(this.constructor.name, new Date().getTime());
        const result = this.sort(values);
        Logger.startAndEnd(this.constructor.name);
        Logger.showOrderArrayAndNewArray(values, result);
    }

    update(...args: any[]): void {
        this.execute(args[0])
    }


    private sort(values: number[]) {
        const newArray = values.slice(0)

        const length = newArray.length
        console.log(length)

        for(let i = 0; i < length; i++) {
            const aux = newArray[i]
            let j
            for( j = i -1; j >= 0 && newArray[j] > aux; j--) {
                newArray[j+1] = newArray[j]
            }
            newArray[j+1] = aux
        }

        return newArray
    }
}