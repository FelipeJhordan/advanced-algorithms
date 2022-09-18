import { Logger } from "../../logger/LoggerSingleton";
import { ISortMethod } from "../types/ISortMethod";

export class BubbleMethod implements ISortMethod {
    execute(values: number[]): void {

        Logger.startAndEnd(this.constructor.name, new Date().getTime());

        const result = this.sort(values)
        
        Logger.showOrderArrayAndNewArray(values, result);

        Logger.startAndEnd(this.constructor.name);
    }


    update(...args: any[]): void {
         this.execute(args[0])
    }

    private sort(array: number[] ): number[] {
        const newArray = array.slice(0)
        const arraySize = array.length
        
        for(let i = 0; i < arraySize; i++) {
            let isSwapped  = false
            for(let j = 0; j < arraySize - i - 1; j++) {
                const currentIsBiggerThanNext = newArray[j] > newArray[j+1]
                if(currentIsBiggerThanNext) {
                    const tmp = newArray[j]
                    newArray[j] = newArray[j+1]
                    newArray[j+1] = tmp
                    isSwapped = true
                }
            }

            if(!isSwapped) {
                break
            }
        }

        return newArray
    }
}