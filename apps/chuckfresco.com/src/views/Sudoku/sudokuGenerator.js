const SIZE = 9;
const BOX_SIZE = 3;

const shuffled = values => {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
};

const canPlace = (board, row, column, value) => {
  for (let index = 0; index < SIZE; index += 1) {
    if (board[row][index] === value || board[index][column] === value) return false;
  }

  const boxRow = Math.floor(row / BOX_SIZE) * BOX_SIZE;
  const boxColumn = Math.floor(column / BOX_SIZE) * BOX_SIZE;
  for (let rowOffset = 0; rowOffset < BOX_SIZE; rowOffset += 1) {
    for (let columnOffset = 0; columnOffset < BOX_SIZE; columnOffset += 1) {
      if (board[boxRow + rowOffset][boxColumn + columnOffset] === value) return false;
    }
  }
  return true;
};

const fillBoard = (board, cell = 0) => {
  if (cell === SIZE * SIZE) return true;
  const row = Math.floor(cell / SIZE);
  const column = cell % SIZE;

  for (const value of shuffled([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
    if (!canPlace(board, row, column, value)) continue;
    board[row][column] = value;
    if (fillBoard(board, cell + 1)) return true;
    board[row][column] = 0;
  }
  return false;
};

const countSolutions = (board, limit = 2) => {
  let bestCell = null;
  let bestCandidates = null;

  for (let row = 0; row < SIZE; row += 1) {
    for (let column = 0; column < SIZE; column += 1) {
      if (board[row][column] !== 0) continue;
      const candidates = [];
      for (let value = 1; value <= SIZE; value += 1) {
        if (canPlace(board, row, column, value)) candidates.push(value);
      }
      if (candidates.length === 0) return 0;
      if (!bestCandidates || candidates.length < bestCandidates.length) {
        bestCell = [row, column];
        bestCandidates = candidates;
      }
    }
  }

  if (!bestCell) return 1;
  let solutions = 0;
  const [row, column] = bestCell;
  for (const value of bestCandidates) {
    board[row][column] = value;
    solutions += countSolutions(board, limit - solutions);
    board[row][column] = 0;
    if (solutions >= limit) return solutions;
  }
  return solutions;
};

export const generateEasySudoku = () => {
  const solution = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  fillBoard(solution);

  const puzzle = solution.map(row => [...row]);
  const cells = shuffled(Array.from({ length: SIZE * SIZE }, (_, index) => index));
  const targetClues = 45;
  let clues = SIZE * SIZE;

  for (const cell of cells) {
    if (clues <= targetClues) break;
    const row = Math.floor(cell / SIZE);
    const column = cell % SIZE;
    const savedValue = puzzle[row][column];
    puzzle[row][column] = 0;

    if (countSolutions(puzzle.map(puzzleRow => [...puzzleRow])) !== 1) {
      puzzle[row][column] = savedValue;
    } else {
      clues -= 1;
    }
  }

  return { puzzle, solution };
};
