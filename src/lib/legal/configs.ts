// Chentik yasal sayfalar — KVKK Aydınlatma, Gizlilik Politikası, Çocuk Verisi
// Kaynak: Claude Design legal.jsx (861 satır JSX → SvelteKit)
// Sabit bilgiler:
// - Veri Sorumlusu: Seyit YILMAZ (gerçek kişi, İstanbul)
// - E-posta: merhaba@chentik.app
// - Versiyon: 2.0
// - Yayım/Son güncelleme: 20 Mayıs 2026

// ───────────────────────────────────────────────────────────────────────────
// Block type tanımları + helpers (short-form)

export type Para = { type: 'p'; html: string };
export type Subhead = { type: 'sh'; text: string };
export type UlBlock = { type: 'ul'; items: string[] };
export type TableBlock = { type: 'tb'; head: string[]; rows: string[][] };
export type CalloutVariant = 'blue' | 'red' | 'gray' | 'friendly' | 'danger';
export type Callout = { type: 'co'; variant: CalloutVariant; html: string };
export type LegalBlock = Para | Subhead | UlBlock | TableBlock | Callout;

export const P = (html: string): Para => ({ type: 'p', html });
export const SH = (text: string): Subhead => ({ type: 'sh', text });
export const UL = (items: string[]): UlBlock => ({ type: 'ul', items });
export const TB = (head: string[], rows: string[][]): TableBlock => ({ type: 'tb', head, rows });
export const CO = (variant: CalloutVariant, html: string): Callout => ({ type: 'co', variant, html });

export type Section = { id: string; h: string; body: LegalBlock[] };
export type LegalPageKey = 'kvkk-aydinlatma' | 'gizlilik-politikasi' | 'cocuk-verisi';
export type LegalPage = {
	key: LegalPageKey;
	kicker: string;
	title: string;
	subtitle: string;
	updated: string;
	published: string;
	version: string;
	intro?: LegalBlock;
	sections: Section[];
};

// ───────────────────────────────────────────────────────────────────────────
// 3-page sub-nav

export const LEGAL_NAV = [
	{ key: 'kvkk-aydinlatma' as const, href: '/kvkk-aydinlatma', label: 'KVKK Aydınlatma' },
	{ key: 'gizlilik-politikasi' as const, href: '/gizlilik-politikasi', label: 'Gizlilik Politikası' },
	{ key: 'cocuk-verisi' as const, href: '/cocuk-verisi', label: 'Çocuk Verisi' }
];

// ───────────────────────────────────────────────────────────────────────────
// PAGE 1 — KVKK Aydınlatma Metni

export const KVKK: LegalPage = {
	key: 'kvkk-aydinlatma',
	kicker: 'Yasal · KVKK',
	title: 'KVKK Aydınlatma Metni',
	subtitle:
		'6698 sayılı Kişisel Verilerin Korunması Kanunu Madde 10 kapsamında veri sorumlusunun aydınlatma yükümlülüğü metni.',
	updated: '20 Mayıs 2026',
	published: '20 Mayıs 2026',
	version: '2.0',
	sections: [
		{
			id: 'veri-sorumlusu',
			h: 'Veri Sorumlusunun Kimliği',
			body: [
				P(
					'Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, kişisel verileriniz konusunda sizleri bilgilendirmek amacıyla hazırlanmıştır.'
				),
				SH('Veri sorumlusu:'),
				UL([
					'Veri Sorumlusu: Seyit YILMAZ',
					'Statü: Gerçek kişi (şahıs)',
					'Adres: İstanbul, Türkiye',
					'E-posta: merhaba@chentik.app',
					'Web Sitesi: https://chentik.app',
					'Uygulama: Chentik (eski adıyla LGS-Takip)'
				])
			]
		},
		{
			id: 'veri-kategorileri',
			h: 'İşlenen Kişisel Veri Kategorileri',
			body: [
				P('KVKK Madde 6 kapsamında aşağıdaki kişisel veriler işlenmektedir:'),
				TB(
					['Veri Kategorisi', 'İçerik'],
					[
						['Kimlik Verileri', 'Ad, soyad (görünen ad)'],
						['İletişim Verileri', 'E-posta adresi'],
						['Hesap Güvenliği', 'Şifre (bcrypt hashli), oturum tokenları'],
						[
							'Eğitim Verileri',
							'Sınıf, LGS yılı, sınav sonuçları, yanlış soru fotoğrafları, hata türleri'
						],
						['İlişki Verileri', 'Veli-öğrenci bağlantısı, izin durumu'],
						['Teknik Veriler', 'IP adresi, cihaz, tarayıcı, çerez'],
						['Görsel Veriler', 'Yanlış soru fotoğrafları'],
						['Hukuki İşlem', 'KVKK onay tarihi, açık rıza beyanları']
					]
				)
			]
		},
		{
			id: 'amac',
			h: 'Kişisel Verilerin İşlenme Amaçları',
			body: [
				P('Kişisel verileriniz aşağıdaki amaçlarla, KVKK Madde 5 ve 6 çerçevesinde işlenmektedir:'),
				SH('3.1 Hizmet Sunumu'),
				UL([
					'Hesap oluşturma ve yönetme',
					'Yanlış defteri tutma ve aralıklı tekrar sistemi',
					'Sınav sonuçları ve istatistikler',
					'Veli paneli üzerinden izin verilen kapsamda paylaşım'
				]),
				SH('3.2 Yapay Zeka Analizi'),
				UL([
					'Yanlış soru fotoğraflarının Anthropic Claude Vision API ile ders ve konu tespiti',
					'Yalnızca soru fotoğrafı gönderilir, kullanıcı kimliği gönderilmez',
					'Anthropic model eğitiminde kullanmaz'
				]),
				SH('3.3 Bildirim ve Hatırlatmalar'),
				UL(['Aralıklı tekrar bildirimleri', 'Hesap güvenliği uyarıları']),
				SH('3.4 Güvenlik'),
				UL(['Hesap güvenliği, yetkisiz erişim engeli, hile tespiti']),
				SH('3.5 Yasal Yükümlülükler'),
				UL(['TC mevzuatı kapsamında kayıt tutma'])
			]
		},
		{
			id: 'hukuki-sebep',
			h: 'İşlemenin Hukuki Sebepleri',
			body: [
				P('KVKK Madde 5 ve 6 uyarınca:'),
				UL([
					'Açık rıza (Madde 5/1): Kullanıcı kayıt esnasında',
					'Sözleşme kurulması (Madde 5/2-c): Üyelik sözleşmesi',
					'Hukuki yükümlülük (Madde 5/2-ç): Mevzuat gereği',
					'Meşru menfaat (Madde 5/2-f): Hizmet iyileştirmesi'
				])
			]
		},
		{
			id: 'aktarim',
			h: 'Kişisel Verilerin Aktarılması',
			body: [
				SH('5.1 Yurt İçi Aktarım'),
				UL([
					'E-posta hizmet sağlayıcısı (bildirim için)',
					'Yasal yükümlülük halinde ilgili merciiler'
				]),
				SH('5.2 Yurt Dışı Aktarım (KVKK Madde 9)'),
				TB(
					['Alıcı', 'Ülke', 'Sebep', 'Dayanak'],
					[
						['Anthropic, PBC', 'ABD', 'AI analizi', 'Açık rıza + SCC'],
						['Cloudflare', 'Küresel', 'CDN', 'Açık rıza + SCC'],
						['Supabase Inc.', 'ABD/AB', 'Veritabanı, dosya', 'Açık rıza + SCC']
					]
				)
			]
		},
		{
			id: 'toplama',
			h: 'Kişisel Veri Toplama Yöntemi',
			body: [
				UL([
					'Doğrudan kullanıcıdan: Kayıt formu, profil, kullanım verileri',
					'Otomatik: Çerezler, log kayıtları',
					'Üçüncü taraflar: Veli-öğrenci bağlantısında karşı taraf'
				])
			]
		},
		{
			id: 'saklama',
			h: 'Saklama Süresi',
			body: [
				UL([
					'Aktif hesap: Hesap aktif olduğu sürece',
					'Hesap silme sonrası: 30 gün pasif (geri dönüş için)',
					'30 günden sonra: Kalıcı silinir',
					'Yedek sistemler: 90 gün',
					'KVKK onay kayıtları: 10 yıl (yasal yükümlülük)'
				])
			]
		},
		{
			id: 'haklar',
			h: 'Veri Sahibinin Hakları (KVKK Madde 11)',
			body: [
				P('KVKK Madde 11 kapsamında aşağıdaki haklara sahipsiniz:'),
				UL([
					'a) Kişisel verilerinizin işlenip işlenmediğini öğrenme',
					'b) İşlenmişse buna ilişkin bilgi talep etme',
					'c) İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
					'ç) Yurt içinde/dışında aktarıldığı üçüncü kişileri bilme',
					'd) Eksik veya yanlış işlenmişse düzeltilmesini isteme',
					'e) Silinmesini veya yok edilmesini isteme (Madde 7)',
					'f) (d) ve (e) işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme',
					'g) Otomatik sistemler vasıtasıyla analiz suretiyle aleyhinize sonuca itiraz etme',
					'ğ) Kanuna aykırı işleme nedeniyle zarara uğramanız halinde tazminat talep etme'
				])
			]
		},
		{
			id: 'hak-kullanim',
			h: 'Hak Kullanım Yöntemi',
			body: [
				P(
					'Haklarınızı kullanmak için <a href="mailto:merhaba@chentik.app">merhaba@chentik.app</a> adresine yazılı başvuru yapabilirsiniz.'
				),
				SH('Başvurularınızda bulunması gerekenler:'),
				UL([
					'Ad, soyad',
					'Hesabınıza bağlı e-posta adresi',
					'Talep konusu (açık ve net)',
					'T.C. Kimlik No / pasaport no (kimlik doğrulama için)'
				]),
				P('Başvurularınız KVKK Madde 13 çerçevesinde en geç 30 gün içinde yanıtlanır.'),
				SH('Yetersiz yanıt veya itiraz halinde:'),
				UL([
					'Kişisel Verileri Koruma Kurumu: kvkk.gov.tr',
					'Başvuru formu: kvkk.gov.tr/basvuru'
				])
			]
		},
		{
			id: 'cocuk',
			h: 'Çocuk Kullanıcılar',
			body: [
				CO(
					'blue',
					'13 yaşından küçük kullanıcılar için veli onayı şarttır. Detaylı bilgi için: <a href="/cocuk-verisi">Çocuk Verisi Sayfası →</a>'
				)
			]
		},
		{
			id: 'cerezler',
			h: 'Çerezler',
			body: [
				P('Chentik yalnızca zorunlu işlevsellik çerezleri kullanır.'),
				P('Reklam veya 3. taraf takip çerezi YOKTUR.'),
				P('Detay: <a href="/gizlilik-politikasi#cerezler">Gizlilik Politikası Bölüm 4 →</a>')
			]
		},
		{
			id: 'degisiklikler',
			h: 'Değişiklikler',
			body: [
				P(
					'Bu Metin güncellenebilir. Önemli değişiklikler kayıtlı e-posta adresinize bildirilir.'
				)
			]
		},
		{
			id: 'iletisim',
			h: 'İletişim',
			body: [
				UL([
					'Veri Sorumlusu: Seyit YILMAZ',
					'E-posta: merhaba@chentik.app',
					'KVKK Başvuruları: merhaba@chentik.app'
				])
			]
		}
	]
};

// ───────────────────────────────────────────────────────────────────────────
// PAGE 2 — Gizlilik Politikası

export const GIZ: LegalPage = {
	key: 'gizlilik-politikasi',
	kicker: 'Yasal · Gizlilik',
	title: 'Gizlilik Politikası',
	subtitle: 'Verinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında ayrıntılı bilgi.',
	updated: '20 Mayıs 2026',
	published: '20 Mayıs 2026',
	version: '2.0',
	sections: [
		{
			id: 'giris',
			h: 'Giriş',
			body: [
				P(
					'Chentik ("biz", "uygulama", "platform") gizliliğinize saygı duyar. Bu Gizlilik Politikası, Chentik mobil uygulamasını ve chentik.app web sitesini kullanırken verilerinizin nasıl işlendiğini açıklar.'
				),
				P(
					'Bu politika 6698 sayılı KVKK, Apple App Store Privacy gereksinimleri ve Google Play Data Safety standartları çerçevesinde hazırlanmıştır.'
				),
				P('KVKK Madde 10 aydınlatma metni için: <a href="/kvkk-aydinlatma">KVKK Aydınlatma →</a>')
			]
		},
		{
			id: 'sorumlu',
			h: 'Sorumlu Kişi',
			body: [
				UL([
					'Geliştirici/Veri Sorumlusu: Seyit YILMAZ',
					'Statü: Gerçek kişi (şahıs)',
					'Konum: İstanbul, Türkiye',
					'E-posta: merhaba@chentik.app',
					'Web: https://chentik.app'
				])
			]
		},
		{
			id: 'toplanan',
			h: 'Toplanan Veriler',
			body: [
				SH('3.1 Kayıt Sırasında Sağladığınız Veriler'),
				UL([
					'Ad, soyad (görünen ad)',
					'E-posta adresi',
					'Şifre (bcrypt hashlenmiş — açık metin saklanmaz)',
					'Hesap türü (öğrenci / veli)',
					'Sınıf bilgisi (öğrenci hesaplar için)',
					'LGS yılı (otomatik hesaplanır)',
					'Din Kültürü dersi muafiyet durumu'
				]),
				SH('3.2 Kullanım Sırasında Toplanan Veriler'),
				UL([
					'LGS deneme sonuçları (D/Y/B, tarih, sınav adı)',
					'Yanlış soru listesi ve fotoğrafları',
					'Hata türleri (dikkatsizlik, bilgi eksiği, yorum hatası, zaman yetmedi, soru anlaşılmadı)',
					'Konu ve ders istatistikleri',
					'Tekrar performansı (üst üste doğru cevap sayıları)'
				]),
				SH('3.3 Otomatik Toplanan Veriler'),
				UL([
					'IP adresi (hesap güvenliği için)',
					'Cihaz tipi ve işletim sistemi versiyonu',
					'Tarayıcı bilgisi',
					'Uygulama versiyonu',
					'Kullanım log kayıtları'
				]),
				SH('3.4 Veli-Öğrenci İlişki Verileri'),
				UL(['Kurulum kodu ve bağlantı tarihi', 'Karşılıklı izin durumu']),
				SH('3.5 TOPLANMAYAN Veriler'),
				CO(
					'blue',
					'<strong>Chentik aşağıdaki verileri TOPLAMAZ:</strong><ul><li>Konum verisi (GPS)</li><li>Telefon rehberi</li><li>Kamera/mikrofon (yanlış soru fotoğrafı dışında)</li><li>Sosyal medya profilleri</li><li>Reklam kimliği (IDFA/AAID)</li><li>Davranışsal profilleme verisi</li></ul>'
				)
			]
		},
		{
			id: 'cerezler',
			h: 'Çerez Politikası',
			body: [
				SH('4.1 Zorunlu Çerezler'),
				UL(['Oturum yönetimi', 'Güvenlik (CSRF koruması)', 'Dil tercihi']),
				SH('4.2 İşlevsellik Çerezleri'),
				UL(['Tema tercihi', '"Beni hatırla" tercihi']),
				SH('4.3 YASAK Çerezler'),
				CO(
					'red',
					'<strong>Chentik aşağıdaki çerezleri KULLANMAZ:</strong><ul><li>Reklam çerezleri</li><li>Üçüncü taraf analytics (Google Analytics, Facebook Pixel, vb.)</li><li>Davranışsal takip çerezleri</li><li>Sosyal medya takip çerezleri</li></ul>'
				)
			]
		},
		{
			id: 'guvenlik',
			h: 'Veri Güvenliği',
			body: [
				SH('5.1 Teknik Önlemler'),
				UL([
					'Şifreleme: TLS 1.3 (tüm trafik)',
					'Şifre koruması: bcrypt (geri çevrilemez)',
					'Veritabanı: Supabase Row Level Security (RLS)',
					'Fotoğraflar: özel (private) depolama + kısa ömürlü imzalı (signed) URL — herkese açık bağlantı yok',
					'Yedekleme: Otomatik günlük, şifreli depolama',
					'Erişim: Sunucu 2FA ile korunur'
				]),
				SH('5.2 İdari Önlemler'),
				UL([
					'Veri sorumlusu (Seyit YILMAZ) dışında kimse veriye erişemez',
					'3. taraf hizmet sağlayıcılarla Veri İşleme Sözleşmeleri (DPA)'
				]),
				SH('5.3 Veri İhlali Bildirimi (KVKK Madde 12/5)'),
				UL([
					"KVKK Kurulu'na 72 saat içinde bildirim",
					'Etkilenen kullanıcılara mümkün olan en kısa sürede e-posta'
				])
			]
		},
		{
			id: 'paylasim',
			h: 'Üçüncü Taraflarla Paylaşım',
			body: [
				SH('6.1 Hizmet Sağlayıcılar'),
				TB(
					['Sağlayıcı', 'Hizmet', 'Veri Tipi', 'Konum'],
					[
						['Anthropic, PBC', 'AI analizi', 'Yanlış soru fotoğrafı', 'ABD'],
						['Supabase Inc.', 'Veritabanı, dosya', 'Tüm hesap verisi', 'ABD/AB'],
						['Cloudflare', 'CDN, DDoS koruması', 'IP, istek logu', 'Küresel']
					]
				),
				P('Tüm sağlayıcılarla Standart Sözleşme Hükümleri (SCC) imzalanmıştır.'),
				SH('6.2 Yasal Talepler'),
				P(
					'Mahkeme kararı veya yasal merciinin yazılı talebi halinde TC hukuku çerçevesinde paylaşım yapılabilir.'
				),
				SH('6.3 YASAK Paylaşımlar'),
				P('Chentik verilerinizi:'),
				UL([
					'Reklamcılarla paylaşmaz',
					'Veri brokerlarına satmaz',
					'Pazarlama amacıyla 3. taraflara aktarmaz',
					'Sosyal medya platformlarıyla eşleştirmez'
				])
			]
		},
		{
			id: 'yurtdisi',
			h: 'Veri Aktarımı (Yurtdışı)',
			body: [
				P('KVKK Madde 9 kapsamında yurtdışı aktarım:'),
				UL([
					'Standart Sözleşme Hükümleri (SCC) ile koruma altında',
					'Kullanıcı kayıt esnasında açık rıza vermiştir',
					'Yalnızca hizmet sunumu için zorunlu kapsamda'
				]),
				P('Detay: <a href="/kvkk-aydinlatma#aktarim">KVKK Aydınlatma Bölüm 5 →</a>')
			]
		},
		{
			id: 'saklama-gp',
			h: 'Saklama Süresi',
			body: [
				TB(
					['Veri Tipi', 'Saklama Süresi'],
					[
						['Aktif hesap verisi', 'Hesap aktif olduğu sürece'],
						['Silinen hesap', '30 gün pasif (geri dönüş için)'],
						['Silinen hesap (kalıcı)', '30 gün sonra tüm sistemlerden silinir'],
						['Yedekler', '90 gün sonra silinir'],
						['KVKK onay kayıtları', '10 yıl (yasal yükümlülük)'],
						['Log kayıtları', '1 yıl']
					]
				)
			]
		},
		{
			id: 'haklar-gp',
			h: 'Kullanıcı Hakları (KVKK Madde 11)',
			body: [
				P('KVKK Madde 11 a-ğ maddeleri için: <a href="/kvkk-aydinlatma#haklar">KVKK Aydınlatma →</a>'),
				P('Hak kullanımı: merhaba@chentik.app adresine yazılı başvuru. 30 gün içinde yanıtlanır.')
			]
		},
		{
			id: 'cocuk-gp',
			h: 'Çocuk Gizliliği',
			body: [
				CO(
					'blue',
					'13 yaşından küçük kullanıcılar için özel düzenlemeler uygulanır. Detaylı bilgi için: <a href="/cocuk-verisi">Çocuk Verisi Sayfası →</a>'
				),
				SH('Özet:'),
				UL([
					'13 yaş altı için veli onayı şarttır',
					'Veli onayı çift kanal ile doğrulanır',
					'Konum, fingerprinting, profilleme yapılmaz',
					'Reklam gösterilmez, hiçbir koşulda'
				])
			]
		},
		{
			id: 'degisiklik',
			h: 'Politika Değişiklikleri',
			body: [
				P('Bu Politika güncellenebilir. Önemli değişiklikler:'),
				UL([
					'Kayıtlı e-posta adresinize bildirilir',
					'Uygulama girişinde duyuru',
					'En az 30 gün önceden bildirilir',
					'Versiyon ve tarih metnin başında'
				])
			]
		},
		{
			id: 'iletisim-gp',
			h: 'İletişim',
			body: [
				UL([
					'Veri Sorumlusu: Seyit YILMAZ',
					'E-posta: merhaba@chentik.app',
					'Web: https://chentik.app',
					'KVKK şikayeti: kvkk.gov.tr'
				])
			]
		}
	]
};

// ───────────────────────────────────────────────────────────────────────────
// PAGE 3 — Çocuk Verisi Koruması

export const COCUK: LegalPage = {
	key: 'cocuk-verisi',
	kicker: 'Yasal · Çocuk Verisi',
	title: 'Çocuk Verisi Koruması',
	subtitle:
		'13 yaşından küçük kullanıcılar için özel düzenlemeler, veli onayı süreci ve veri minimizasyonu.',
	updated: '20 Mayıs 2026',
	published: '20 Mayıs 2026',
	version: '2.0',
	intro: CO(
		'gray',
		'Chentik 5-8. sınıf (10-14 yaş) öğrencilere yönelik bir eğitim platformudur. Hedef kitlemizin önemli bir kısmı 13 yaşından küçüktür. Bu sayfa o yaş grubu için uyguladığımız özel korumaları detaylı şekilde açıklar.'
	),
	sections: [
		{
			id: 'yas',
			h: 'Yaş Kapsamı ve Yasal Statü',
			body: [
				TB(
					['Sınıf', 'Yaş Aralığı', 'KVKK Statüsü'],
					[
						['5. sınıf', '10-11', 'Veli onayı ŞART'],
						['6. sınıf', '11-12', 'Veli onayı ŞART'],
						['7. sınıf', '12-13', 'Veli onayı ŞART'],
						['8. sınıf', '13-14', 'Karma — 13 yaş üstü kendi onayı']
					]
				),
				P('Yaş eşiği: 13 yaş'),
				P(
					'Kaynak: GDPR Madde 8 ile uyumlu uluslararası standart; KVKK Kurul Kararları ile destekleniyor.'
				)
			]
		},
		{
			id: 'cerceve',
			h: 'Yasal Çerçeve',
			body: [
				P(
					"13 yaşından küçük çocukların verilerinin işlenmesi konusunda Türkiye'de özel kanun bulunmamakla birlikte, Chentik aşağıdaki düzenlemeleri uygular:"
				),
				SH('2.1 KVKK Çerçevesi'),
				UL([
					'Madde 5/1: Açık rıza için ehliyet aranır',
					'Madde 6: Özel nitelikli veriler için ek koruma',
					'Madde 7: Silme hakkı tam uygulanır'
				]),
				SH('2.2 Türk Medeni Kanunu'),
				UL(['Madde 16: Ayırt etme gücüne sahip küçükler veli onayı ile hukuki işlem yapar']),
				SH('2.3 Uluslararası Standartlar'),
				UL([
					"GDPR Madde 8: 16 yaş eşiği (üye devletlerde 13'e kadar)",
					'COPPA (ABD): 13 yaş eşiği',
					'Chentik 13 yaş eşiğini benimsemiştir'
				])
			]
		},
		{
			id: 'veli-onay',
			h: 'Veli Onay Süreci',
			body: [
				P('13 yaşından küçük kullanıcılar için çok aşamalı onay süreci:'),
				SH('Adım 1: Çocuk Hesap Açar'),
				UL(['Doğum tarihi alınır', '13 yaşından küçükse veli onayı ekranı çıkar']),
				SH('Adım 2: Veli Bilgisi'),
				UL(['Çocuk veli e-postasını girer', 'Veliye otomatik bilgilendirme e-postası']),
				SH('Adım 3: Veli Onayı'),
				UL([
					'Veli e-postadaki linke tıklar',
					'Onay formunu doldurur (ad, soyad, ilişki: anne/baba/vasi)',
					"KVKK Aydınlatma ve Gizlilik Politikası'nı onaylar"
				]),
				SH('Adım 4: Doğrulama'),
				UL([
					'Sistem onayı kaydeder',
					'Onay zaman damgası saklanır',
					'IP adresi ve cihaz bilgisi kaydedilir'
				]),
				SH('Adım 5: Hesap Aktivasyonu'),
				UL(['Veli onayı sonrası çocuk hesabı aktif olur']),
				CO(
					'red',
					'Veli onayı yoksa hesap aktif olmaz, veri işleme başlamaz, AI analizi yapılmaz. 7 gün içinde onay alınmazsa kayıt iptal edilir.'
				)
			]
		},
		{
			id: 'ek-koruma',
			h: '13 Yaş Altı İçin Ek Korumalar',
			body: [
				SH('4.1 Veri Minimizasyonu'),
				UL([
					'IP adresi loglanmaz (sadece güvenlik anında geçici)',
					'Cihaz parmak izi toplanmaz',
					'3. taraf analytics kullanılmaz',
					'Reklam kimliği (IDFA/AAID) işlenmez',
					'Davranışsal profilleme yapılmaz',
					'Konum verisi toplanmaz'
				]),
				SH('4.2 İçerik Korumaları'),
				UL([
					'Hiçbir reklam gösterilmez',
					'Premium özellikler bile reklam içermez',
					'Veri pazarlama amacıyla kullanılmaz',
					'Sosyal özellikler (mesajlaşma, arkadaş) YOKTUR'
				]),
				SH('4.3 İletişim Korumaları'),
				UL([
					'Çocuğa Chentik dışında iletişim gönderilmez',
					'Bildirimler yalnızca eğitim amaçlı',
					'Promosyon e-postası gönderilmez'
				])
			]
		},
		{
			id: 'veli-haklari',
			h: 'Veli Hakları',
			body: [
				SH('5.1 KVKK Madde 11 Hakları (çocuk adına)'),
				UL([
					'Verilerin işlenip işlenmediğini öğrenme',
					'İşlenen verileri görme',
					'İşleme amacını öğrenme',
					'3. taraf aktarımlarını öğrenme',
					'Düzeltme talep etme',
					'Silme talep etme (Madde 7)',
					'Otomatik analize itiraz etme'
				]),
				SH('5.2 Özel Veli Hakları'),
				UL([
					'Çocuğun verilerinin işlenmesine itiraz',
					'Verilerin silinmesi',
					'Veli onayını istediğiniz zaman geri alma',
					'Veri kopyası CSV/JSON formatında',
					'Çocuğun hesabını kapatma'
				]),
				SH('5.3 Hak Kullanımı'),
				UL(['E-posta: merhaba@chentik.app', 'Yanıt süresi: 30 gün (KVKK Madde 13)'])
			]
		},
		{
			id: 'saklama-cv',
			h: 'Veri Saklama (Çocuk Hesabı)',
			body: [
				TB(
					['Durum', 'Saklama'],
					[
						['Aktif hesap', 'Hesap aktif olduğu sürece'],
						['Veli onayı geri alındı', '24 saat içinde tüm veriler silinir'],
						['Çocuk hesabı kapattı', '30 gün pasif (veli geri açabilir)'],
						['30 gün sonra', 'Kalıcı silme'],
						['Veli onay kaydı', '10 yıl (yasal yükümlülük)']
					]
				)
			]
		},
		{
			id: 'yasaklar',
			h: 'Yasaklar',
			body: [
				CO(
					'danger',
					'<strong>Chentik, 13 yaşından küçük kullanıcılar için HİÇBİR KOŞULDA:</strong><ul><li>Reklam göstermez</li><li>3. taraflara veri satmaz veya kiralamaz</li><li>Pazarlama amaçlı kullanmaz</li><li>Davranışsal profilleme yapmaz</li><li>Konum verisi toplamaz</li><li>Mikrofon/kamera erişimi istemez (yanlış fotoğrafı dışında)</li><li>Pazarlama e-postası göndermez</li><li>Sosyal medya ile veri eşleştirmez</li><li>Cross-device tracking yapmaz</li></ul>'
				)
			]
		},
		{
			id: 'kurul',
			h: 'KVKK Kurul Bildirimi',
			body: [
				SH('8.1 VERBİS Kaydı'),
				P(
					"Durum: Beta dönemi — KVKK Yönetmeliği gereği veri sorumlusunun çalışan sayısı 50'nin altında ise VERBİS kaydı zorunlu değildir. Chentik tek geliştiriciden oluştuğu için bu istisna kapsamındadır."
				),
				SH('8.2 Veri İhlali Bildirimi (KVKK Madde 12/5)'),
				UL([
					"KVKK Kurulu'na 72 saat içinde bildirim",
					'Çocuk verisi etkilenmişse veliye de aynı süre içinde'
				])
			]
		},
		{
			id: 'uluslararasi',
			h: 'Uluslararası Kullanıcılar',
			body: [
				SH('9.1 AB Kullanıcıları (GDPR)'),
				UL(['Yaş eşiği: 16 yaş (üye devlete göre 13-16)']),
				SH('9.2 ABD Kullanıcıları (COPPA)'),
				UL(['Yaş eşiği: 13 yaş']),
				SH('9.3 Diğer Ülkeler'),
				UL(['En koruyucu standart uygulanır'])
			]
		},
		{
			id: 'cocuga',
			h: 'Çocuğa Yönelik Anlatım',
			body: [
				CO(
					'friendly',
					'<strong>Merhaba!</strong><p>Eğer 13 yaşından küçüksen, Chentik kullanabilmen için annenin veya babanın izni gerekiyor. Bu, senin haklarını koruyor — Chentik senin verilerini kimseyle paylaşmaz, reklam göstermez ve seni başka şeylerle uğraştırmaz.</p><p>Anne veya babana e-posta gönderdik. Onaylayınca hesabın aktif olacak. Ondan sonra yanlışlarını çekmeye başlayabilirsin!</p>'
				)
			]
		},
		{
			id: 'sikayet',
			h: 'Şikayet ve Başvuru',
			body: [
				SH('11.1 Chentik İletişim'),
				UL(['E-posta: merhaba@chentik.app', 'Yanıt süresi: 30 gün']),
				SH('11.2 KVKK Şikayet'),
				UL([
					'Kişisel Verileri Koruma Kurumu: kvkk.gov.tr',
					'Şikayet Formu: kvkk.gov.tr/basvuru',
					'Telefon: 0312 216 5000'
				]),
				SH('11.3 ALO 183 (Çocuk Hakları)'),
				UL(['Çocuk hakları ihlali şüphesi varsa: ALO 183'])
			]
		},
		{
			id: 'sozluk',
			h: 'Sözlük',
			body: [
				UL([
					'Veri Sorumlusu: Kişisel verilerin işlenme amaçlarını ve vasıtalarını belirleyen kişi (KVKK Madde 3)',
					'Açık Rıza: Belirli, bilgilendirilmeye dayanan, özgür iradeyle açıklanan rıza (KVKK Madde 3)',
					'Veli/Vasi: Çocuğun yasal temsilcisi',
					'VERBİS: Veri Sorumluları Sicil Bilgi Sistemi'
				])
			]
		},
		{
			id: 'versiyon',
			h: 'Versiyon Geçmişi',
			body: [
				UL([
					'v2.0 — 20 Mayıs 2026 — Sıkı veli onayı süreci, yaş eşiği netleştirildi',
					'v1.0 — 15 Mayıs 2026 — İlk versiyon (yumuşak yaklaşım)'
				])
			]
		}
	]
};
