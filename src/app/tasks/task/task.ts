import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskInterface } from './task.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: TaskInterface;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
