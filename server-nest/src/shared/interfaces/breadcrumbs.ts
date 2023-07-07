export interface Breadcrumbs {
  first: BreadcrumbStep;
  second: BreadcrumbStep | undefined;
  third: BreadcrumbStep | undefined;
  location: BreadcrumbLocation | undefined;
}

interface BreadcrumbStep {
  name: string;
  link: string;
}

interface BreadcrumbLocation {
  name: string;
  link: string;
}
