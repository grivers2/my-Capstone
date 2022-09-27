export class League {
  OrganizationName?: string;
  OrganizationId?: number;
  Description?: string;

  constructor(organizationName: string, organizationId: number, description: string) {
    this.OrganizationName = organizationName;
    this.OrganizationId = organizationId;
    this.Description = description;
  }
}
