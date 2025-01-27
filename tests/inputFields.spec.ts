import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'

test.describe('Input fields', async () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})

	test('Update pet type', async ({ page }) => {
		const originalPetType = 'cat'
		const newPetType = 'rabbit'

		const pm = new PageManager(page)
		await pm.navigationTo().petTypesPage()
		await pm.onPetTypesPage().selectEditPetTypeInTheNthRow(0)
		await pm.onPetTypeEditPage().updatePetTypeTo(newPetType)
		await pm.onPetTypesPage().validatePetTypeInTheNthRowIs(newPetType, 0)

		await pm.onPetTypesPage().selectEditPetTypeInTheNthRow(0)
		await pm.onPetTypeEditPage().updatePetTypeTo(originalPetType)
		await pm.onPetTypesPage().validatePetTypeInTheNthRowIs(originalPetType, 0)
	})

	test('Cancel pet type update', async ({ page }) => {
		const originalPetType = 'dog'
		const newPetType = 'moose'

		const pm = new PageManager(page)
		await pm.navigationTo().petTypesPage()
		await pm.onPetTypesPage().selectEditPetTypeInTheNthRow(1)
		await pm.onPetTypeEditPage().fillPetTypeWith(newPetType)
		await pm.onPetTypeEditPage().validatePetTypeInTheInputFieldIs(newPetType)
		await pm.onPetTypeEditPage().cancelPetTypeUpdate()
		await pm.onPetTypesPage().validatePetTypeInTheNthRowIs(originalPetType, 1)
	})

	test('Pet type name is required validation', async ({ page }) => {
		// Locator - Edit Pet Type page
		const petTypeInput = page.locator('#name')

		// 1. Select the PET TYPES menu item in the navigation bar
		// 2. Add assertion of the "Pet Types" text displayed above the table with the list of pet types
		// 3. Click on "Edit" button for the "lizard" pet type
		// 4. On the Edit Pet Type page, clear the input field
		// 5. Add the assertion for the "Name is required" message below the input field
		// 6. Click on "Update" button
		// 7. Add assertion that "Edit Pet Type" page is still displayed
		// 8. Click on the "Cancel" button
		// 9. Add assertion that "Pet Types" page is displayed

		// Test steps
		const pm = new PageManager(page)
		await pm.navigationTo().petTypesPage()

		await page.getByRole('button', { name: 'Edit' }).nth(2).click()
		await petTypeInput.click()
		await petTypeInput.clear()
		await expect(page.locator('.help-block')).toHaveText('Name is required')

		await page.getByRole('button', { name: 'Update' }).click()
		await expect(page.getByRole('heading')).toHaveText('Edit Pet Type')

		await page.getByRole('button', { name: 'Cancel' }).click()
		await expect(page.getByRole('heading')).toHaveText('Pet Types')
	})
})
