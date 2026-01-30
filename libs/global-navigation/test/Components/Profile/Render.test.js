import { expect } from '@esm-bundle/chai';
import { renderSignIn } from '../../../dist/test-exports.js';

describe('Profile Render', () => {
  it('should render a sign-in button without a dropdown', () => {
    const html = renderSignIn('Sign In', false, '');
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
    const html = renderSignIn('Sign In', true, dropdownHTML);
    const container = document.createElement('div');
    container.innerHTML = html;

    const button = container.querySelector('button.feds-signIn');
    const dropdown = container.querySelector('.feds-signIn-dropdown');

    expect(button).to.exist;
    expect(button.getAttribute('data-signin-trigger')).to.not.exist; // The button itself doesn't trigger sign-in, the content does
    
    expect(dropdown).to.exist;
    // The processDropdownContent will wrap the button
    expect(dropdown.innerHTML).to.include(dropdownHTML);
  });

  it('should handle an empty dropdown content', () => {
    const html = renderSignIn('Sign In', true, '');
    const container = document.createElement('div');
    container.innerHTML = html;

    const dropdown = container.querySelector('.feds-signIn-dropdown');
    expect(dropdown).to.exist;
    expect(dropdown.innerHTML.trim()).to.equal('');
  });
});
