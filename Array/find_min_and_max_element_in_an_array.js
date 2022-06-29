class Solution{
    getMinMax(arr,n){
        let max = 1;
        let min = Math.pow(10,7)+1;
        for(let i=0;i<n;i++){
            if(arr[i]<min){
                min = arr[i];
            }
            if(arr[i]>max){
                max = arr[i];
            }
        }
        return [min,max];
    }
}
