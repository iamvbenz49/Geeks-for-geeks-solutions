class Solution:
    # your task is to complete this function
    # function should return an integer
    def atoi(self,string):
        dic = {
            "1":1,
            "2":2,
            "3":3,
            "4":4,
            "5":5,
            "6":6,
            "7":7,
            "8":8,
            "9":9,
            "0":0
        }
        length = len(string)-1
        sums=0
        if string[0] == "-":
            start = 1
            length-=1
        else:
            start = 0
        for i in range(start,len(string)):
            if (string[i] == "-") or (string[i] == "+"):
                    return -1
            elif (string[i].isalpha()):
                return -1
            else:
                sums+=dic[string[i]]*(10**length)
                length-=1
        if start == 1:
            return -sums
        else:
            return sums
