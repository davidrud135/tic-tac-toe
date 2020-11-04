import { Component } from '@angular/core';
import { FieldCellValue } from './shared/field-cell-value.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cells: FieldCellValue[];
  currPlayer: FieldCellValue;
  winner: FieldCellValue;
  winCells: number[];

  constructor() {}

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.cells = Array(9).fill(null);
    this.currPlayer = 'X';
    this.winner = null;
    this.winCells = null;
  }

  makeMove(idx: number) {
    if (this.cells[idx]) return;
    this.cells[idx] = this.currPlayer;
    this.currPlayer = this.currPlayer === 'X' ? 'O' : 'X';
    this.winner = this.checkForWinner();
  }

  checkForWinner(): FieldCellValue {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.cells[a] &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        this.winCells = lines[i];
        return this.cells[a];
      }
    }
    return null;
  }

  get isDraw(): boolean {
    return !this.winner && this.cells.every((cell) => !!cell);
  }

  get isGameOver(): boolean {
    return this.isDraw || !!this.winner;
  }

  cellTrackByFn(elemIdx: number): number {
    return elemIdx;
  }
}
