import { Page } from '@playwright/test'

export class PetTypesPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
}