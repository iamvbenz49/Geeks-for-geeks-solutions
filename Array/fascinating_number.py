
def fascinating(n):
    two_mult = str(n*2)
    three_mult = str(n*3)
    result = str(n) + two_mult + three_mult
    lst = []
    for i in result:
        if i in lst:
            return False
        lst.append(i)
    print(lst)
    if (len(lst)==9) and ("0" not in lst):
        return True
    else:
        return False

n = fascinating(267)
print(n)









