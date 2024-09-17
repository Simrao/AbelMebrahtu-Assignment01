import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { CreateBill } from './pages/create-bills-page';
import { CreateClient } from './pages/create-client-page';
import { CreateRoom } from './pages/create-room-page';
import { EditClient } from './pages/edit-client-page';
import { DeleteBills } from './pages/delete-bills-page';
import { CreateReservation } from './pages/create-reservation-page';
import { EditReservation } from './pages/edit-reservation-page';
import { CreateBillsChooseInReservation } from './pages/create-bills-choose-in-reservation-page';


test.describe('Test suite 01', () => {

  test.beforeEach(async ({ page }) => {
    console.log('Login user before each test');
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.performLogin(`${process.env.TEST_USERNAME}`,`${process.env.TEST_PASSWORD}`);
  });

  test('successfull login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
  
    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
    await dashboardPage.performLogout();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await page.waitForTimeout(5000);
  });
/* 
  test('successfull login 01', async ({ page }) => {
  
  const dashboardPage = new DashboardPage(page);
  
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
  await dashboardPage.performLogout();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  

});
*/
test('create bill', async ({ page }) => {
  
  await page.locator('#app > div > div > div:nth-child(3) > a').click();
  await page.getByRole('link', { name: 'Create Bill' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('5000');
  await page.getByText('Save').click();
  await page.getByRole('link', { name: 'Back' }).click();
  
});





  });
