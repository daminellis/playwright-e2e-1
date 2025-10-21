import { Page, Locator } from '@playwright/test';

export default class ToDoMvcElements {
  constructor(private readonly page: Page) {}

  get taskInput(): Locator {
    return this.page.locator('.new-todo');
  }

  get taskList(): Locator {
    return this.page.locator('.todo-list li');
  }

  getTaskCompleteButton(taskIndex: number): Locator {
    return this.taskList.nth(taskIndex).locator('.toggle');
  }

  getTaskDeleteButton(taskIndex: number): Locator {
    return this.taskList.nth(taskIndex).locator('.destroy');
  }
}