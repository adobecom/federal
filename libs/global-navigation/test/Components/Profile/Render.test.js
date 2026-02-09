import { expect } from '@esm-bundle/chai';
import { renderSignIn } from '../../../dist/test-exports.js';

describe('Profile Render', () => {
  it('should render a sign-in button without a dropdown', () => {
    const parsedProfileData = { hasDropdown: false, dropdownHTML: '', signInText: null };
    const html = renderSignIn('Sign In', parsedProfileData);
    const container = document.createElement('div');
    container.innerHTML = html;

    const button = container.querySelector('button.feds-signIn');
    const dropdown = container.querySelector('.feds-signIn-dropdown');

    expect(button).to.exist;
    expect(button.getAttribute('data-signin-trigger')).to.exist;
    expect(button.textContent.trim()).to.equal('Sign In');
    expect(dropdown).to.not.exist;
  });

  it('should render a sign-in button with a dropdown', () => {
    const dropdownHTML = '<ul><li><a href="#">Item 1</a></li></ul>';
    const parsedProfileData = { hasDropdown: true, dropdownHTML, signInText: null };
    const html = renderSignIn('Sign In', parsedProfileData);
    const container = document.createElement('div');
    container.innerHTML = html;

    const button = container.querySelector('button.feds-signIn');
    const dropdown = container.querySelector('.feds-signIn-dropdown');

    expect(button).to.exist;
    expect(button.getAttribute('popovertarget')).to.exist;
    
    expect(dropdown).to.exist;
    // The processDropdownContent will wrap the button
    expect(dropdown.innerHTML).to.include(dropdownHTML);
  });

  it('should handle an empty dropdown content', () => {
    const parsedProfileData = { hasDropdown: true, dropdownHTML: '', signInText: null };
    const html = renderSignIn('Sign In', parsedProfileData);
    const container = document.createElement('div');
    container.innerHTML = html;

    const dropdown = container.querySelector('.feds-signIn-dropdown');
    expect(dropdown).to.exist;
    expect(dropdown.innerHTML.trim()).to.equal('');
  });

  it('should replace sign-in anchor with button in dropdown', () => {
    const dropdownHTML = '<ul><li><a href="?sign-in=true">Custom Sign In</a></li></ul>';
    const parsedProfileData = { hasDropdown: true, dropdownHTML, signInText: 'Custom Sign In' };
    const html = renderSignIn('Sign In', parsedProfileData);
    const container = document.createElement('div');
    container.innerHTML = html;

    const dropdown = container.querySelector('.feds-signIn-dropdown');
    expect(dropdown).to.exist;

    // Should have button instead of anchor
    const signInButton = dropdown.querySelector('button.feds-signIn[data-signin-trigger]');
    expect(signInButton).to.exist;
    expect(signInButton.textContent).to.equal('Custom Sign In');

    // Should not have anchor
    const anchor = dropdown.querySelector('a[href*="sign-in=true"]');
    expect(anchor).to.not.exist;
  });
});
