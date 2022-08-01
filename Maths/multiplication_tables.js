class Solution {
  getTable(N) {
    let tables = []
    for(let i = 1 ; i < 11 ; i++){
        tables.push(N*i)
    }
    return tables
  }
}
