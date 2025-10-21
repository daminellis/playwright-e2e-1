import { Page, expect } from '@playwright/test';
import ToDoMvcElements from '../elements/ToDoMvcElements';

export default class ToDoMvcPage {
  private elements: ToDoMvcElements;

  constructor(private readonly page: Page) {
    this.elements = new ToDoMvcElements(page);
  }

  async addTask(taskName: string): Promise<void> {
    await this.elements.taskInput.fill(taskName);
    await this.elements.taskInput.press('Enter');
  }

  async completeTask(taskIndex: number): Promise<void> {
    await this.elements.getTaskCompleteButton(taskIndex).click();
  }

  async deleteTask(taskIndex: number): Promise<void> {
    const task = this.elements.taskList.nth(taskIndex);
    await task.hover();
    await this.elements.getTaskDeleteButton(taskIndex).click();
  }

  async verifyTaskCount(expectedCount: number): Promise<void> {
    await expect(this.elements.taskList).toHaveCount(expectedCount);
  }

  async verifyTaskText(taskIndex: number, expectedText: string): Promise<void> {
    await expect(this.elements.taskList.nth(taskIndex)).toHaveText(expectedText);
  }

  async verifyTaskCompleted(taskIndex: number): Promise<void> {
    await expect(this.elements.taskList.nth(taskIndex)).toHaveClass(/completed/);
  }
}