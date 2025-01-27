import { Page, Locator, expect } from '@playwright/test'

export class PetTypeEditPage {
	private readonly page: Page
	private readonly petTypeInput: Locator

	constructor(page: Page) {
		this.page = page
		this.petTypeInput = page.locator('#name')
	}

	async fillPetTypeWith(petType: string) {
		await this.petTypeInput.click()
		await this.petTypeInput.fill(petType)
	}

	async updatePetTypeTo(petType: string) {
		this.fillPetTypeWith(petType)
		await this.page.getByRole('button', { name: 'Update' }).click()
	}

	async cancelPetTypeUpdate() {
		await this.page.getByRole('button', { name: 'Cancel' }).click()
	}

	async validatePetTypeInTheInputFieldIs(petType: string) {
		await expect(this.petTypeInput).toHaveValue(petType)
	}
}
