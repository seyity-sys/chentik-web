// Dinamik sitemap — yalnızca indekslenen gerçek sayfalar (301 redirect route'ları hariç).
const PAGES = [
	'',
	'/bilim',
	'/veliler',
	'/gizlilik-politikasi',
	'/kvkk-aydinlatma',
	'/cocuk-verisi'
];

const BASE = 'https://www.chentik.app';

export const prerender = true;

export function GET() {
	const urls = PAGES.map((path) => `\t<url>\n\t\t<loc>${BASE}${path}</loc>\n\t</url>`).join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
