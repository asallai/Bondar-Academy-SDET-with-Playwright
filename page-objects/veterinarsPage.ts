import { Page } from '@playwright/test'

export class VeterinarsPage {
	private readonly page: Page

	constructor(page: Page) {
		this.page = page
	}
}
