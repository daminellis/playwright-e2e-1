import { test } from '@playwright/test';
import ToDoMvcPage from '../support/pages/ToDoMvcPage';

test.describe('TodoMVC Application', () => {
  let todoPage: ToDoMvcPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    todoPage = new ToDoMvcPage(page);
  });

  test('should add a new task', async () => {
    await todoPage.addTask('Comprar leite');
    await todoPage.verifyTaskCount(1);
    await todoPage.verifyTaskText(0, 'Comprar leite');
  });

  test('should complete a task', async () => {
    await todoPage.addTask('Comprar leite');
    await todoPage.completeTask(0);
    await todoPage.verifyTaskCompleted(0);
  });

  test('should delete a task', async () => {
    await todoPage.addTask('Comprar leite');
    await todoPage.deleteTask(0);
    await todoPage.verifyTaskCount(0);
  });
});