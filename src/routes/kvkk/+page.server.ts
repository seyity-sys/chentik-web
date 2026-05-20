import { redirect } from '@sveltejs/kit';

// Sprint 4 — App Store URL backward compat
// chentik.app/kvkk → 301 → /kvkk-aydinlatma
export const load = () => {
	redirect(301, '/kvkk-aydinlatma');
};
