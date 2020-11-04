import { Component, Input } from '@angular/core';
import { FieldCellValue } from '../shared/field-cell-value.model';

@Component({
  selector: 'app-field-cell',
  template: `
    <button [ngClass]="{ cross: isCross, circle: isCircle }">
      <nb-icon
        *ngIf="value"
        [icon]="isCross ? 'close-outline' : 'radio-button-off-outline'"
        [status]="isCross ? 'success' : 'danger'"
      ></nb-icon>
    </button>
  `,
  styleUrls: ['./field-cell.component.scss'],
})
export class FieldCellComponent {
  @Input() value: FieldCellValue;

  constructor() {}

  get isCross(): boolean {
    return this.value && this.value === 'X';
  }

  get isCircle(): boolean {
    return this.value && this.value === 'O';
  }
}
