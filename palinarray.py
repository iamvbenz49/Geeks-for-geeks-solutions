def PalinArray(arr ,n):
    for i in arr:
        if str(i) ==str(i)[::-1]:
            continue
        else:
            return 0
    else:
        return 1
