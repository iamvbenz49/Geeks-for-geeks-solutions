class Solution:

	def print2largest(self,arr, n):
		arr.sort()
		i = -2
		ans = arr[-1]
		if arr[0] == arr[-1]:
		    return -1
		while True:
		    if ans == arr[i]:
		        i-=1
		    else:
		        return arr[i]
		    
