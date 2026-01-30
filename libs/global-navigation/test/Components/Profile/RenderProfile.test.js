import { expect } from '@esm-bundle/chai';
import { renderSignedInProfile } from '../../../dist/test-exports.js';

describe('Profile RenderProfile', () => {
  const mockProfileData = {
    displayName: 'John Doe',
    email: 'johndoe@adobe.com',
    avatar: 'https://example.com/avatar.jpg',
    sections: {}, // sections are not used in this test, but required by type
  };

  const mockPlaceholders = new Map([
    ['view-account', 'View account'],
    ['sign-out', 'Sign Out'],
  ]);

  it('should render the signed-in profile correctly', () => {
    const html = renderSignedInProfile({
      ...mockProfileData,
      placeholders: mockPlaceholders,
      localMenuHTML: '',
    });

    const container = document.createElement('div');
    container.innerHTML = html;

    const button = container.querySelector('button.feds-profile-button');
    const avatar = container.querySelector('img.feds-profile-img');
    const displayName = container.querySelector('p.feds-profile-name');
    const email = container.querySelector('p.feds-profile-email');

    expect(button).to.exist;
    expect(avatar).to.exist;
    expect(avatar.src).to.equal(mockProfileData.avatar);
    expect(displayName.textContent.trim()).to.equal(mockProfileData.displayName);
    expect(email.textContent.trim()).to.equal(mockProfileData.email);
  });

  it('should include the local menu when provided', () => {
    const localMenuHTML = '<li><a href="/local">Local Link</a></li>';
    const html = renderSignedInProfile({
      ...mockProfileData,
      placeholders: mockPlaceholders,
      localMenuHTML: localMenuHTML,
    });

    const container = document.createElement('div');
    container.innerHTML = html;
    
    const localLink = container.querySelector('a[href="/local"]');
    expect(localLink).to.exist;
    expect(localLink.textContent).to.equal('Local Link');
  });

  it('should render the account link', () => {
    const html = renderSignedInProfile({
      ...mockProfileData,
      placeholders: mockPlaceholders,
      localMenuHTML: '',
    });

    const container = document.createElement('div');
    container.innerHTML = html;

    const accountLink = container.querySelector('a.feds-profile-header');
    expect(accountLink).to.exist;
    expect(accountLink.textContent).to.include('View account');
  });

  it('should render the sign-out trigger', () => {
    const html = renderSignedInProfile({
      ...mockProfileData,
      placeholders: mockPlaceholders,
      localMenuHTML: '',
    });

    const container = document.createElement('div');
    container.innerHTML = html;

    const signOutTrigger = container.querySelector('a[data-signout-trigger]');
    expect(signOutTrigger).to.exist;
    expect(signOutTrigger.textContent.trim()).to.equal('Sign Out');
  });
});
