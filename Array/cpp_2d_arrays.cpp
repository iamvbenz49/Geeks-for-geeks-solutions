vector<vector<int>> transpose(int a[][M], int n)
{   vector<vector<int>> b(n, vector<int>(n, 0));
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            b[i][j]=a[j][i];
        }
    }
    return b;
}
