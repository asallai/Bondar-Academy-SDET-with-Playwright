import { Page } from '@playwright/test'

export class OwnerInformationPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
}