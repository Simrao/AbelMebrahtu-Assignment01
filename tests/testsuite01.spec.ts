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
test('succesfull login 01', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
  await dashboardPage.performLogout();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await page.waitForTimeout(5000);

});


  });
