class Solution {
    public int countBattleships(char[][] boards) {
         boolean records[][] = new boolean[boards.length][boards[0].length];
        int ships = 0;
        for(int i=0;i<boards.length;i++){
            for(int j=0;j<boards[0].length;j++){
                if(boards[i][j] == 'X' && !records[i][j]){
                    ships++;
                    dfs(boards,records,i,j);
                }
            }
        }
        return ships;
    }
        static void dfs(char[][] boards, boolean[][] records, int i, int j){
        if(i<0||j<0||i>=boards.length||j>=boards[0].length||records[i][j]||boards[i][j]=='.') return;
        records[i][j] = true;
        dfs(boards,records,i+1,j);
        dfs(boards,records,i-1,j);
        dfs(boards,records,i,j+1);
        dfs(boards,records,i,j-1);
    }
}