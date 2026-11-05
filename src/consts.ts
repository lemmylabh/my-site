// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Blog 3.2';
export const SITE_DESCRIPTION = 'Welcome to the Test Blog!';

// Prefix a root-relative path (e.g. "/blog") with the site's base path,
// so links work when the site is served from a subfolder like /my-site/.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const withBase = (path: string) => `${BASE}${path}`;
export const stripBase = (path: string) =>
	path.startsWith(BASE) ? path.slice(BASE.length) || '/' : path;
