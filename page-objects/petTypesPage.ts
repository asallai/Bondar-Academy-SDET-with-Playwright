import { Page, expect } from '@playwright/test'

export class PetTypesPage {
	private readonly page: Page

	constructor(page: Page) {
		this.page = page
	}

	async selectEditPetTypeInTheNthRow(row: number) {		
		const petTypeRow = this.page.locator("tr", { has: this.page.locator(`[id="${row}"]`)})
		await petTypeRow.getByRole("button", { name: "Edit" }).click()
		await expect(this.page.getByRole('heading')).toHaveText('Edit Pet Type')
	}

	async validatePetTypeInTheNthRowIs(petType: string, row: number) {
		await expect(this.page.getByRole('textbox').nth(row)).toHaveValue(petType)
	}
}
