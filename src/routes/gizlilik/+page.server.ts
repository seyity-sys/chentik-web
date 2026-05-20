import { redirect } from '@sveltejs/kit';

// Sprint 4 — App Store URL backward compat
// chentik.app/gizlilik → 301 → /gizlilik-politikasi (App Store Privacy URL)
export const load = () => {
	redirect(301, '/gizlilik-politikasi');
};
