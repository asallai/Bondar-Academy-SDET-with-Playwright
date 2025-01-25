import { Page } from '@playwright/test'

export class SpecialtiesPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
}