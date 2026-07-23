import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { generateEasySudoku } from './sudokuGenerator';
import './styles.css';

const SudokuGrid = ({ board, answer = false, puzzle = null, reveal = false }) => (
  <div
    className={`sudoku-grid${answer ? ' sudoku-grid--answer' : ''}`}
    role="grid"
    aria-label={answer ? 'Sudoku answer key' : 'Sudoku puzzle'}
  >
    {board.map((row, rowIndex) =>
      row.map((value, columnIndex) => {
        const isFilledAnswer = answer && puzzle && puzzle[rowIndex][columnIndex] === 0;
        const isRevealedAnswer = reveal && puzzle && puzzle[rowIndex][columnIndex] === 0;
        return (
        <div
          className={`sudoku-cell${value ? '' : ' sudoku-cell--empty'}${isFilledAnswer ? ' sudoku-cell--filled-answer' : ''}${isRevealedAnswer ? ' sudoku-cell--revealed-answer' : ''}`}
          role="gridcell"
          aria-label={`Row ${rowIndex + 1}, column ${columnIndex + 1}${value ? `, ${value}` : ', blank'}`}
          key={`${rowIndex}-${columnIndex}`}
        >
          {value || ''}
        </div>
        );
      })
    )}
  </div>
);

const Sudoku = () => {
  const [game, setGame] = useState(() => generateEasySudoku());
  const [showAnswer, setShowAnswer] = useState(false);

  const generatePuzzle = () => {
    setGame(generateEasySudoku());
    setShowAnswer(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="sudoku-page">
      <Helmet>
        <title>Angie Soduku</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="sudoku-sheet sudoku-sheet--puzzle" aria-labelledby="sudoku-title">
        <header className="sudoku-header">
          <h1 id="sudoku-title">Angie Soduku</h1>
          <p className="sudoku-instructions">Fill each row, column, and outlined box with the numbers 1 through 9.</p>
        </header>

        <SudokuGrid
          board={showAnswer ? game.solution : game.puzzle}
          puzzle={game.puzzle}
          reveal={showAnswer}
        />

        <div className="sudoku-actions" aria-label="Puzzle controls">
          <button className="sudoku-button sudoku-button--primary" type="button" onClick={generatePuzzle}>
            Generate a new puzzle
          </button>
          <button className="sudoku-button" type="button" onClick={() => setShowAnswer(value => !value)} aria-expanded={showAnswer}>
            {showAnswer ? 'Hide answer key' : 'Show answer key'}
          </button>
          <button className="sudoku-button" type="button" onClick={() => window.print()}>
            Print puzzle &amp; answer
          </button>
        </div>
      </section>

      <section className={`sudoku-sheet sudoku-sheet--answer${showAnswer ? ' is-visible' : ''}`} aria-labelledby="answer-title">
        <header className="sudoku-header">
          <p className="sudoku-kicker">Angie Soduku</p>
          <h2 id="answer-title">Answer Key</h2>
          <p className="sudoku-instructions">Bold, underlined numbers are the answers that fill the blank squares.</p>
        </header>
        <SudokuGrid board={game.solution} puzzle={game.puzzle} answer />
      </section>
    </main>
  );
};

export default Sudoku;
