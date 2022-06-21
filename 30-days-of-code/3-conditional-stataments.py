#!/bin/python3

import math
import os
import random
import re
import sys

numberType = dict({
   "WEIRD" : "Weird",
   "NOT_WEIRD" : "Not Weird"   
})

isOdd = lambda a: a % 2 != 0
def evenTypeCondicional(number: int):
    if((number > 20) or (number > 2 and number <= 5)):
        return numberType.get("NOT_WEIRD")
    return numberType.get("WEIRD")

def getTypeNumber(number):

    if isOdd(number):
        return numberType.get("WEIRD")
    return evenTypeCondicional(number)

if __name__ == '__main__':
     number = int(input())
     print(getTypeNumber(number))
