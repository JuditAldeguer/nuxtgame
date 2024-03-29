const winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export const winner = (grid) => {
    for (let i = 0; i < winners.length; i++) {
        const [a,b,c] = winners[i];
        if (
          grid[a].element &&
          grid[a].element === grid[b].element &&
          grid[a].element === grid[c].element
        ) {
            return grid[a]
        }
    }
    return null
}