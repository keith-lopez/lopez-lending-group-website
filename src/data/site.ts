/** Site-wide constants (NMLS, legal disclosures). */

/** Bump when replacing `public/images/logo.svg` so browsers/CDNs fetch the new file. */
export const LOGO_CACHE_VERSION = "2";

/** Single logo asset used in header + footer */
export const brandLogoSrc = `/images/logo.svg?v=${LOGO_CACHE_VERSION}`;

export const NMLS_ID = "2814077";

export const nmlsLabel = `NMLS #${NMLS_ID}`;

export const CONTACT_EMAIL = "klopez@nexalending.com";

/** Display format */
export const CONTACT_PHONE_DISPLAY = "480-636-6573";

/** `tel:` href (E.164) */
export const CONTACT_PHONE_TEL = "+14806366573";
