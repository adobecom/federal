import { expect } from '@esm-bundle/chai';
import { ims, RecoverableError } from '../../../dist/test-exports.js';

describe('IMS Manager', () => {
  let originalAdobeIMS;
  let decorateProfileSpy;

  beforeEach(() => {
    originalAdobeIMS = window.adobeIMS;
    decorateProfileSpy = {
      called: false,
      errors: new Set(),
      call() {
        this.called = true;
        return Promise.resolve(this.errors);
      },
      setErrors(errors) {
        this.errors = errors;
      }
    };
  });

  afterEach(() => {
    window.adobeIMS = originalAdobeIMS;
  });

  describe('ims function', () => {
    it('should call imsReady directly if IMS is already initialized', async () => {
      window.adobeIMS = { 
        initialized: true,
        isSignedInUser: () => false,
      };
      
      await ims({
        unavEnabled: false,
        decorateProfile: () => decorateProfileSpy.call(),
      });

      expect(decorateProfileSpy.called).to.be.true;
    });

    it('should return an error if loadIms fails', async () => {
        window.adobeIMS = undefined;
        // This test relies on the fact that loadIms will fail in a test
        // environment because it cannot load the external script.
        const { errors } = await ims({ unavEnabled: false });
        expect(errors.size).to.equal(1);
        const error = [...errors][0];
        expect(error.message).to.equal('Failed to load IMS');
    });
  });

  describe('imsReady function (via ims)', () => {
    beforeEach(() => {
        // For these tests, we assume IMS is loaded and initialized.
        window.adobeIMS = { 
            initialized: true,
            isSignedInUser: () => false,
        };
    });

    it('should run decorateProfile when unavEnabled is false', async () => {
      const { errors } = await ims({
        unavEnabled: false,
        decorateProfile: () => decorateProfileSpy.call(),
      });

      expect(decorateProfileSpy.called).to.be.true;
      expect(errors.size).to.equal(0);
    });

    it('should return errors from decorateProfile when it fails', async () => {
      const mockError = new RecoverableError('Profile decoration failed');
      decorateProfileSpy.setErrors(new Set([mockError]));

      const { errors } = await ims({
        unavEnabled: false,
        decorateProfile: () => decorateProfileSpy.call(),
      });

      expect(decorateProfileSpy.called).to.be.true;
      expect(errors.size).to.equal(1);
      expect([...errors][0].message).to.equal('Profile decoration failed');
    });

    it('should not run decorateProfile when unavEnabled is true', async () => {
      try {
        // This will fail because loadUnav is not mocked and will fail.
        // We catch the error to verify our spy.
        await ims({
          unavEnabled: true,
          decorateProfile: () => decorateProfileSpy.call(),
          mountpoint: document.createElement('div'),
        });
      } catch (e) {
        // a-ok
      }

      expect(decorateProfileSpy.called).to.be.false;
    });
  });
});
