// @ts-nocheck
import React from 'react';

export default function ModalContact() {
  return (
    <div data-splittext="false" className="modal is-contact" suppressHydrationWarning>
  <div className="modal-contact" suppressHydrationWarning>
    <h4 className="heading-m">Leave us a message</h4>
    <div data-form-validate className="form-group w-form" suppressHydrationWarning>
      <form id="wf-form-Default-Form" name="wf-form-Default-Form" data-name="Default Form" method="get" className="form" data-wf-page-id="686baabfd0c79e5623544b6d" data-wf-element-id="9d5d044d-178d-b861-f646-d637dcef4afc" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" suppressHydrationWarning>
        <div className="form-row">
          <div data-validate className="form-field-group"><label htmlFor="name" className="form-label">Voor- en achternaam *</label>
            <div className="form-field"><input className="form-input-field w-input" maxLength={256} name="Naam" data-name="Naam" min={1} placeholder="Wie ben je?" type="text" id="Naam" required />
              <div className="form-field-icon is--success"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.25 14.25L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 10.5L11.25 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <div className="form-field-icon is--error"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path opacity="0.1" d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 12.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.996 14.5C11.444 14.5 10.996 14.948 11 15.5C11 16.052 11.448 16.5 12 16.5C12.552 16.5 13 16.052 13 15.5C13 14.948 12.552 14.5 11.996 14.5Z" fill="currentColor" /></svg></div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div data-validate className="form-field-group"><label htmlFor="email" className="form-label">E-mail *</label>
            <div className="form-field"><input className="form-input-field w-input" maxLength={256} name="E-mail" data-name="E-mail" placeholder="Hoe kunnen we je bereiken?" type="email" id="E-mail" required />
              <div className="form-field-icon is--success"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.25 14.25L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 10.5L11.25 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <div className="form-field-icon is--error"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path opacity="0.1" d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 12.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.996 14.5C11.444 14.5 10.996 14.948 11 15.5C11 16.052 11.448 16.5 12 16.5C12.552 16.5 13 16.052 13 15.5C13 14.948 12.552 14.5 11.996 14.5Z" fill="currentColor" /></svg></div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-field-group">
            <div className="form-label_wrap"><label htmlFor="phone" className="form-label">Telefoonnummer</label>
              <div className="form-label is-caption">Optioneel</div>
            </div>
            <div className="form-field"><input className="form-input-field w-input" maxLength={256} name="Telefoonnummer" data-name="Telefoonnummer" min={10} placeholder="Je telefoonnummer (als je liever belt dan mailt)" type="tel" id="Telefoonnummer" />
              <div className="form-field-icon is--success"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.25 14.25L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 10.5L11.25 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <div className="form-field-icon is--error"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path opacity="0.1" d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 12.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.996 14.5C11.444 14.5 10.996 14.948 11 15.5C11 16.052 11.448 16.5 12 16.5C12.552 16.5 13 16.052 13 15.5C13 14.948 12.552 14.5 11.996 14.5Z" fill="currentColor" /></svg></div>
            </div>
          </div>
        </div>
        <div data-validate className="form-field-group is-text-area"><label htmlFor="message" className="form-label">Bericht *</label>
          <div className="form-field is-text-area"><textarea className="form-input-field is-text-area w-input" maxLength={5000} name="Bericht" data-name="Bericht" min={3} placeholder="Vertel ons wat je zoekt (of gewoon iets leuks)." id="Bericht" required defaultValue={""} />
            <div className="form-field-icon is--success"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.25 14.25L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 10.5L11.25 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
            <div className="form-field-icon is--error"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path opacity="0.1" d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 12.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.996 14.5C11.444 14.5 10.996 14.948 11 15.5C11 16.052 11.448 16.5 12 16.5C12.552 16.5 13 16.052 13 15.5C13 14.948 12.552 14.5 11.996 14.5Z" fill="currentColor" /></svg></div>
          </div>
        </div>
        <div className="form-field-group">
          <div className="form-divider" />
        </div>
        <div className="form-row">
          <div data-validate className="form-field-group">
            <div data-radiocheck-group className="radiocheck-group"><label className="w-checkbox radiocheck-field"><input type="checkbox" name="Privacyvoorwaarden" id="Privacyvoorwaarden" data-name="Privacyvoorwaarden" required className="w-checkbox-input checkbox-input" /><span className="radiocheck-label is--small w-form-label" htmlFor="Privacyvoorwaarden">Ik accepteer de <span className="text-style-link-2">Privacyvoorwaarden</span> <span className="form-required">*</span></span><div className="radiocheck-custom"><div className="radiocheck-field-icon is--success"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="radiocheck-check-svg"><path d="M7 11.5L10.5 15L17 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div></div><div className="radiocheck-field-icon is--error"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path opacity="0.1" d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 12.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.996 14.5C11.444 14.5 10.996 14.948 11 15.5C11 16.052 11.448 16.5 12 16.5C12.552 16.5 13 16.052 13 15.5C13 14.948 12.552 14.5 11.996 14.5Z" fill="currentColor" /></svg></div></label></div>
          </div>
        </div>
        <div className="form-row is-submit">
          <div className="form-field-group is-submit">
            <div className="form-field is-submit">
              <div data-submit tabIndex={0} className="form-submit-btn"><input type="submit" data-wait="Please wait..." className="form-submit w-button" defaultValue="Submit" suppressHydrationWarning />
                <a href="#" className="button-default is-form w-inline-block">
                  <div className="button-default__inner"><span className="button-default__background" /><span className="button-default__text">Verstuur bericht</span>
                    <div className="button-default__icon"><svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 31 31" fill="none" className="icon-18px"><g clipPath="url(#clip0_10010_1223)"><path d="M27.6895 2.93927L13.9395 16.6893" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit={10} /><path d="M27.6895 2.93927L18.9395 27.9393L13.9395 16.6893L2.68945 11.6893L27.6895 2.93927Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit={10} /></g><defs><clipPath id="clip0_10010_1223"><rect width={30} height={30} fill="currentColor" transform="translate(0.189453 0.43927)" /></clipPath></defs></svg></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="paragraph-regular text-weight-bold">Of bel <a href="tel:+31615337496" className="text-style-link">+31 6 1533 7496</a></div>
        </div>
      </form>
      <div className="form-notifcation w-form-done" suppressHydrationWarning>
        <div className="form-notifcation_wrapper">
          <div className="max-width-448px">
            <h3 className="heading-style-64px-2">Thanks voor je bericht!</h3>
          </div>
          <div className="max-width-45ch">
            <div className="form-notification-p">We hebben je bericht ontvangen en komen snel bij je terug. Get ready to get hyped 🔥.<br /></div>
          </div>
          <div className="form-notification-icon is-success"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.25 14.25L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 10.5L11.25 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
        </div>
      </div>
      <div className="form-notifcation is--error w-form-fail" suppressHydrationWarning>
        <div className="form-notifcation_wrapper">
          <div className="form-notification-bg" />
          <div className="form-notification-p">Something went wrong while submitting.</div>
        </div>
        <div className="form-notification-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path opacity="0.1" d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 12.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.996 14.5C11.444 14.5 10.996 14.948 11 15.5C11 16.052 11.448 16.5 12 16.5C12.552 16.5 13 16.052 13 15.5C13 14.948 12.552 14.5 11.996 14.5Z" fill="currentColor" /></svg></div>
      </div>
    </div>
    <div data-w-id="9d5d044d-178d-b861-f646-d637dcef4b8a" className="modal-close">
      <a href="#" className="button-default is-outline w-inline-block">
        <div className="button-default__inner"><span className="button-default__background is-outline" /><span className="button-default__text">Sluit</span></div>
      </a>
    </div>
  </div>
  <div data-w-id="9d5d044d-178d-b861-f646-d637dcef4b90" className="modal_close" />
</div>

  );
}
