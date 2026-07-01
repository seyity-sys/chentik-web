# KORUNACAK METİN ENVANTERİ — redesign-v3-fable

Kaynak: `main` @ 6d71df4 (canlıdaki KALIP-2 sürümüyle aynı içerik).
Kural: Bu listedeki HER satır yeni tasarımda birebir var olacak (grep doğrulanır).
Bölüm sırası korunur. SEO head blokları byte-for-byte taşınır (ayrıca listelenmedi;
FAZ 4'te `git diff` ile head bloklarının değişmediği doğrulanır).

> ⚠️ AÇIK KARAR NOTU: Brief'in andığı "5 paragraflık 'yanlış bankası' hero metni",
> "Yeni · Artık YKS için de hazır" rozeti ve "LGS ve YKS · ortaokuldan üniversiteye"
> kicker'ı main'de YOK — bunlar KALIP-2 redesign'ı (4db6d3a) ÖNCESİ v2 içeriğiydi ve
> Seyit onayıyla canlıdan çıktı (PR #1). Envanter, canlı sitedeki gerçek metinlerden
> çıkarıldı. Eski hero metninin geri gelmesi istenirse ayrı karar gerekir.

## Nav (tüm sayfalar)
- Chentik
- Nasıl çalışır
- Bilim
- Veliler için
- İndir
- (aria) Chentik anasayfa · Menüyü aç · Menüyü kapat · Mobil menü

## Footer (tüm sayfalar)
- Unuttuğum yanlış kalmasın. Türkiye'de tasarlandı, 5–8. sınıf için. Şu an beta — tamamen
- ücretsiz. (üstteki cümlenin devamı)
- İndir / App Store / Yakında
- İndir / Google Play / Yakında
- Ürün · Yasal · İletişim (kolon başlıkları)
- Çocuk verisi · KVKK Aydınlatma · Gizlilik Politikası
- İletişim · merhaba@chentik.app · @chentik.official
- © 2026 Chentik · www.chentik.app
- Çok yakında App Store ve Google Play'de. (toast)
- (aria) Mobil uygulama mağazaları — çok yakında

## DownloadModal (ortak)
- Chentik
- Beta sürüm
- Chentik çok yakında iOS ve Android'de. Lansman için hazırlanıyoruz.
- App Store — çok yakında
- Google Play — çok yakında
- Tamamen ücretsiz. Üyelik istemiyoruz.
- (aria/alt) Kapat · Chentik uygulama ikonu

## / (landing)
### Hero
- LGS ve YKS hazırlık (eyebrow)
- Her hata bir çentik. (h1 satır 1)
- Her çentik bir adım. (h1 satır 2 — MOTTO, dokunulmaz)
- Yanlışlarını fotoğrafla yakala, yapay zekâ analiz etsin, aralıklı tekrarla kalıcı kıl.
- Sınava panikle değil; sakin, sürdürülebilir bir ritimle hazırlan. (devamı)
- Ücretsiz dene (CTA) · Nasıl çalışıyor? (ikincil CTA)
- Reklamsız · Veli paneli · KVKK uyumlu · LGS + YKS (trust chipleri)
- (alt) Chentik defterim ekranı — bugünün tekrarı

### Yöntem (#nasil)
- Yöntem (eyebrow)
- Dört adım. Tek söz: / unuttuğun yanlış kalmasın. (h2)
- Panikleten bir program değil; her gün birkaç dakikalık, sürdürülebilir bir ritim. (lede)
- 01 · Yakala — Fotoğrafla yakala — Yanlış soruyu çek; gerekirse şekli ayrıca kırp. Gece elle yazmak yok. — Çek, kırp, kaydet
  - dcard: 14 · Türkçe · İptal · Soruyu Kırp · Onayla
- 02 · Analiz — AI analiz etsin — Ders, konu ve hata türünü ayırır. Son söz sende — istersen düzeltirsin.
  - dcard: AI ANALİZİ · Türkçe · Yazım Kuralları ve Noktalama · Ne tür hata · Dikkatsizlik · Bilgi Eksiği · Yorum Hatası · Zaman Yetmedi · Soru Anlaşılmadı
- 03 · Tekrar — Aralıklı tekrarla — Doğru aralıkta önüne gelir: 1, 3, 7 ve 21 gün sonra. Unutma eğrisini bilim çözmüş (Ebbinghaus).
  - dcard: Tekrar ilerlemesi · 0/4 · 4 tekrar daha kaldı · 1 gün · 3 gün · 7 gün · 21 gün
- 04 · Kalıcı kıl — Çentiği tamamla — Üst üste 4 doğru tekrarda o yanlış defterden çıkar. Yanlışta sayaç sıfırlanır.
  - dcard: 4/4 çentik · Öğrenildi, kapatıldı · Bu yanlış defterden çıktı

### Veli (#veli)
- Veliler için (eyebrow)
- Veli için sakin bir pencere. (h2)
- Çocuğunun ritmini gör, baskı yapma. Yorum yok, sadece veri — karar yine çocuğun, sohbet yine sizin. (lede)
- Nasıl bağlanır — İzinle, davet kodu kovalamadan. — Profili sen kurarsın; çocuk kendi cihazında kendi PIN'ini belirler. Her iki taraf bağlantıyı istediği an kaldırır.
  - dcard: Profili oluştur · Kurulum kodu ver · Çocuk PIN belirler
- Veli ne görür — Notlar değil — yalnızca ritim. — Bugün tekrarladıkları, ders dağılımı, ilerleme. Soruların içeriğini değil; çalışma ritmini görürsün.
- Çocuk verisi KVKK ile korunur (kvkk-note)
  - dcard: Ders dağılımı · bu hafta · Matematik · Türkçe · Fen Bilimleri · İnkılap · Bugün tekrarladıkları: Matematik · Fen · Türkçe — 4 tekrar tamam.

### PDF (#pdf)
- PDF çıktı (eyebrow)
- Defterini kâğıda dök. (h2)
- 2 sütunlu numaralı fasikül — sınav öncesi son tekrar, ekransız. (lede)
- Fasikül — Yazdır, etüt'e götür. — Şık metinleri yazılı; işaretleme baloncukları ve cevap boş — anahtar yok. Kalemle çöz, kâğıttan çalış.
  - dcard: Matematik · Yanlış Defteri · 20.05.2026 · 1 · Kesirlerde işlemler · A) 11/12 · B) 7/12 · C) 5/6 · D) 9/12 · 2 · Oran-orantı · A) 24 · B) 36 · C) 42 · D) 48

### Bilim (#bilim)
- Neden işe yarıyor (eyebrow)
- Mit değil, yöntem. (h2)
- Chentik'in arkasında bir vaat değil; eğitim psikolojisinin üç sade bulgusu var. (lede)
- Ebbinghaus unutma eğrisi — Tek seferde öğrenilen bilgi günler içinde unutulur — beyin 24 saatte yeni bilginin %70'ini siler.
  - Chentik'te karşılığı: yanlışların kaybolmaz, defterinde durur. — Ebbinghaus 1885 · Murre & Dros, 2015
- Aralıklı tekrar — Doğru aralıklarla yapılan tekrar unutmayı yener; aralıklar genişledikçe bilgi kalıcılaşır.
  - Chentik'te karşılığı: SRS motoru tam bu aralıklarda önüne getirir. — Cepeda ve ark., 2006
- Aktif hatırlama — Tanımak değil, hatırlamaya çalışmak öğrenmeyi pekiştirir; cevabı okumak yerine yeniden üretmek kalıcılığı artırır.
  - Chentik'te karşılığı: her tekrarda soruyu yeniden çözersin, cevabı görmezsin. — Roediger & Karpicke, 2006
- (chart etiketleri) öğrenildi · günler sonra · 1g · 3g · 7g · 21g · Hatırlama · Okuma

### Final CTA (#dene)
- Her hata bir çentik. / Her çentik bir adım. (final başlık)
- Yöntem işe yarıyor. Bugün ilk çentiğini at — reklamsız, tamamen ücretsiz.
- Ücretsiz dene
- Yakında · App Store / Yakında · Google Play (store rozetleri — "Yakında" davranışı korunur)

## /bilim
- Neden işe yarıyor (eyebrow)
- Mit değil, / yöntem. (h1)
- Chentik'in arkasında bir vaat değil; eğitim psikolojisinin kurduğu üç sade bulgu var. Her biri ürünün bir özelliğine bağlanır.
- Ücretsiz dene · Üç bulgu (CTA'lar)
- 140 · yıllık bulgu (hero SVG metni)
- Üç sade bulgu (eyebrow) — Gösteriş değil, / sessiz yöntem. (h2)
- Eğitim psikolojisinin 140 yıldır bildiği üç bulgu — her birinin Chentik'te bir karşılığı var. (lede)
- 01 · Unutma eğrisi — Ebbinghaus unutma eğrisi — Tek seferde öğrenilen bilgi günler içinde unutulur — beyin 24 saatte yeni bilginin yaklaşık %70'ini siler. — Ebbinghaus 1885 · Murre & Dros, 2015 — Hatırlama oranı — Chentik'te karşılığı: yanlışların kaybolmaz, defterde durur.
- 02 · Aralıklı tekrar — Doğru aralıkta tekrar — Doğru aralıklarla yapılan tekrar unutmayı yener. Her tekrar eğriyi yukarı çeker; aralıklar genişledikçe bilgi kalıcılaşır. — Cepeda ve ark., 2006 (Psych. Bulletin) — 1 · 3 · 7 · 21 gün — Chentik'te karşılığı: SRS motoru tam bu aralıklarda önüne getirir.
- 03 · Aktif hatırlama — Tanımak değil, hatırlamak — Hatırlamaya çalışmak öğrenmeyi pekiştirir; cevabı okumak yerine yeniden üretmek kalıcılığı belirgin artırır. — Roediger & Karpicke, 2006 — Kalıcılık — Chentik'te karşılığı: her tekrarda soruyu yeniden çözersin, cevabı görmezsin.
- (chart etiketleri) öğrenildi · günler sonra · 1g · 3g · 7g · 21g · Hatırlama · Okuma
- Yöntem işe yarıyor. / Bugün ilk çentiğini at. (final)
- Reklamsız, takipsiz, tamamen ücretsiz.
- Ücretsiz dene

## /veliler
- Veliler için (eyebrow)
- Veli için / sakin bir pencere. (h1)
- Çocuğunun ritmini gör, baskı yapma. Yorum yok, sadece veri — karar yine çocuğun, sohbet yine sizin.
- Ücretsiz dene · Veli ne görür? (CTA'lar)
- İzin temelli · KVKK uyumlu · Reklamsız (trust chipleri)
- (alt) Veli paneli — istatistik ekranı
- Sakin bir pencere (eyebrow) — Yorum yok, sadece veri. (h2)
- İzinle bağlanır, içeriği değil ritmi görürsün. Baskı için değil, yanında durmak için. (lede)
- Nasıl bağlanır — İzin temelli bağlantı. — Davet kodu kovalamak yok. Profili sen kurarsın, çocuk kendi PIN'ini belirler. Her iki taraf istediği an kaldırır.
  - dcard: Profili oluştur · Kurulum kodu ver · Çocuk PIN belirler
- Veli ne görür — Notlar değil — yalnızca ritim. — Bugün tekrarladıkları, ders dağılımı, ilerleme. Soruların içeriğini değil; çalışma ritmini görürsün.
  - dcard: Ders dağılımı · bu hafta · Matematik · Türkçe · Fen Bilimleri · Din Kültürü · Yabancı Dil · Bugün tekrar: 3 — Matematik · Fen · Türkçe.
- Gizlilik (eyebrow)
- Çocuk verisi KVKK ile korunur (privacy-band başlık)
- Soru fotoğrafları herkese kapalı; yalnızca süreli, imzalı bağlantıyla cihazına açılır. Reklam yok, takip yok, üçüncü taraflara satış yok. Ayrıntı için Çocuk Verisi sayfası.
- Her hata bir çentik. / Her çentik bir adım. (final)
- Çocuğunun yanında, sakin bir ritimle. Reklamsız, tamamen ücretsiz.
- Ücretsiz dene

## /iletisim
- İletişim (eyebrow)
- Bir fikrin mi var? / Yaz bize. (h1)
- Soru, öneri, işbirliği — hepsi için kapımız açık. En geç birkaç gün içinde döneriz.
- E-posta / merhaba@chentik.app · Web / www.chentik.app · Instagram / @chentik.official
- KVKK kapsamındaki başvurularınız için de aynı adresi kullanabilirsiniz. Verilerinizin nasıl
  işlendiğini KVKK Aydınlatma sayfasında bulabilirsiniz.

## Legal (3 sayfa — /kvkk-aydinlatma, /gizlilik-politikasi, /cocuk-verisi)
- İçerik kaynağı: src/lib/legal/configs.ts — DOSYAYA DOKUNULMAZ (metinler otomatik korunur).
- LegalLayout kabuk metinleri: Yayım: · Son güncelleme: · Versiyon ·
  Bu sayfa bilgilendirme amaçlıdır. Hukuki danışmanlık için KVKK uzmanı bir avukata başvurun.
- Kicker/başlık/alt başlıklar configs.ts'ten gelir (Yasal · KVKK / KVKK Aydınlatma Metni vb.)

## Yasak kontrolleri (FAZ 4'te grep=0 beklenir)
- "Bu Soruyu Çöz" → 0 eşleşme
- "AI Çözüm Asistanı" → 0 eşleşme
- "Davet kodu" yeni ÖZELLİK olarak sunulamaz — mevcut iki NEGATİF cümle
  ("davet kodu kovalamadan", "Davet kodu kovalamak yok") canlı metnin parçası, AYNEN korunur
  (brief'in "ASLA görünmez" kuralıyla gerilim → AÇIK KARAR olarak raporda).
