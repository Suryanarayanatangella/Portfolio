import siteConfig from './site.config';

describe('Site Configuration', () => {
  test('has required business information', () => {
    expect(siteConfig.business).toBeDefined();
    expect(siteConfig.business.name).toBeDefined();
    expect(siteConfig.business.tagline).toBeDefined();
    expect(siteConfig.business.description).toBeDefined();
  });

  test('has valid contact information', () => {
    expect(siteConfig.contact).toBeDefined();
    expect(siteConfig.contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(siteConfig.contact.phone).toBeDefined();
  });

  test('has theme colors', () => {
    expect(siteConfig.theme).toBeDefined();
    expect(siteConfig.theme.primary).toBeDefined();
    expect(siteConfig.theme.accent).toBeDefined();
  });

  test('has valid statistics', () => {
    expect(siteConfig.stats).toBeDefined();
    expect(siteConfig.stats.projectsCompleted).toBeDefined();
    expect(siteConfig.stats.happyClients).toBeDefined();
  });

  test('has service packages', () => {
    expect(siteConfig.services).toBeDefined();
    expect(siteConfig.services.packages).toBeDefined();
  });

  test('has technology stack', () => {
    expect(siteConfig.technologies).toBeDefined();
    expect(siteConfig.technologies.frontend).toBeDefined();
    expect(siteConfig.technologies.backend).toBeDefined();
  });
});
