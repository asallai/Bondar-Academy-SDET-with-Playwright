import { Page, expect } from '@playwright/test'

export class NavigationPage {
	private readonly page: Page

	constructor(page: Page) {
		this.page = page
	}

	async petTypesPage() {
		await this.page.getByText('Pet Types').click()
		await expect(this.page.getByRole('heading')).toHaveText('Pet Types')
	}

	async petDetailsPage() {
		await this.page.getByText('Pet Types').click()
		await expect(this.page.getByRole('heading')).toHaveText('Pet Types')
	}

	async ownersPage() {
		await this.page.getByText('Owner').click()
		await this.page.getByText('Search').click()
		await expect(this.page.getByRole('heading')).toHaveText('Owners')
	}

	// async ownerInformationPage() {		
	// }

	async veterinarsPage() {
		await this.page.getByText('Veterinarians').click()
		await this.page.getByText('All').click()
		await expect(this.page.getByRole('heading')).toHaveText('Veterinarians')
	}

	async specialtiesPage() {
		await this.page.getByText('Specialties').click()
		await expect(this.page.getByRole('heading')).toHaveText('Specialties')
	}
}
