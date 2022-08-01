class Solution:
    def duplicates(self, arr, n): 
        hash_map = {i:0 for i in range(n)}
        res = []
        for j in arr:
            if hash_map[j] == 0:
                hash_map[j]+=1
            elif hash_map[j] == 1:
                hash_map[j]+=1
                res.append(j)
        res.sort()
        return res if res!= [] else [-1]
