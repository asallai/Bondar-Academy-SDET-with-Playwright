import { Page } from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'
import { OwnersPage } from '../page-objects/ownersPage'
import { OwnerInformationPage } from '../page-objects/ownerInformationPage'
import { PetTypesPage } from '../page-objects/petTypesPage'
import { PetDetailsPage } from '../page-objects/petDetailsPage'
import { VeterinarsPage } from '../page-objects/veterinarsPage'
import { SpecialtiesPage } from '../page-objects/specialtiesPage'

export class PageManager {
	private readonly page: Page
	private readonly navigationPage: NavigationPage
	private readonly ownersPage: OwnersPage
	private readonly ownerInformationPage: OwnerInformationPage
	private readonly petTypesPage: PetTypesPage
	private readonly petDetailsPage: PetDetailsPage
	private readonly veterinarsPage: VeterinarsPage
	private readonly specialtiesPage: SpecialtiesPage

	constructor(page: Page) {
		this.page = page
		this.navigationPage = new NavigationPage(this.page)
		this.ownersPage = new OwnersPage(this.page)
		this.ownerInformationPage = new OwnerInformationPage(this.page)
		this.petTypesPage = new PetTypesPage(this.page)
		this.petDetailsPage = new PetDetailsPage(this.page)
		this.veterinarsPage = new VeterinarsPage(this.page)
		this.specialtiesPage = new SpecialtiesPage(this.page)
	}

	navigationTo() {
		return this.navigationPage
	}

	onOwnersPage() {
		return this.ownersPage
	}

	onOwnerInformationPage() {
		return this.ownerInformationPage
	}

	onPetTypesPage() {
		return this.petTypesPage
	}

	onPetDetailsPage() {
		return this.petDetailsPage
	}

	onVeterinarsPage() {
		return this.veterinarsPage
	}

	onSpecialtiesPage() {
		return this.specialtiesPage
	}
}
