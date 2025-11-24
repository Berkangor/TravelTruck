# TravelTruck

TravelTruck, karavan (camper) kiralama ve keşif için geliştirilmiş, React tabanlı bir tek sayfa web uygulamasıdır.  
Kullanıcılar farklı karavanları listeleyebilir, detaylarını görüntüleyebilir ve rezervasyon formu ile talep oluşturabilir.

🔗 **Canlı Demo:** https://travel-truck-wine.vercel.app/

---

## Kısa Açıklama

Bu proje, **React, Vite ve Redux Toolkit** kullanılarak geliştirilmiş bir frontend uygulamasıdır.  
Amaç, bir karavan kiralama sisteminin temel kullanıcı akışlarını (listeleme, detay görüntüleme, filtreleme, rezervasyon, favoriler vb.) modern bir arayüzle simüle etmektir.

Uygulama boyunca:

- **Asenkron istekler** (örneğin karavan listesini API’den çekme) yapılmakta,
- Bu işlemler sırasında kullanıcı deneyimini iyileştirmek için özel bir **yüklenme göstergesi (loading indicator)** kullanılmaktadır.

---

## Temel Özellikler

- 🏕️ **Karavan Kataloğu (Catalog Page)**

  - Backend/mock API üzerinden karavan listesini çeker (örn. `GET /campers`).
  - Kart yapısında listeleme, responsive grid tasarımı.
  - Filtreleme (lokasyon, tip, özellikler vb. – backend destekli).

- 📄 **Karavan Detay Sayfası (Camper Detail Page)**

  - Her karavan için ayrı detay sayfası.
  - Detay bilgiler, açıklama ve görsel.
  - Kullanıcı yorumları (örn. rating yapısı ile).
  - Rezervasyon formu ve başarı bildirimi.

- 📩 **Rezervasyon Formu**

  - Kullanıcının tarih ve iletişim bilgilerini girerek rezervasyon isteği bırakmasını sağlar.
  - Form doğrulama ile hatalı/eksik girişlerde uyarı gösterimi.

- ⭐ **Favoriler**

  - Karavanları favorilere ekleme/çıkarma.
  - `localStorage` desteği ile sayfa yenilemelerinde verinin korunması.

- ⏳ **Yüklenme Göstergesi (Loading Indicator)**

  - Asenkron istekler veya lazy yüklenen sayfalar sırasında özel bir **`Loader` bileşeni** gösterilir.
  - `React.Suspense` fallback olarak da bu yüklenme göstergesi kullanılır.
  - Böylece veri yüklenirken kullanıcı boş sayfa yerine görsel bir ilerleme durumu görür.

- 🧭 **Tek Sayfa Uygulama (SPA) Navigasyonu**
  - `react-router-dom` ile:
    - `/` – Ana sayfa
    - `/catalog` – Karavan kataloğu
    - `/catalog/:id` – Belirli karavanın detay sayfası
    - Yanlış URL’lerde 404 (Not Found) sayfası

---

## Kurulum ve Kullanım Talimatları

### Gereksinimler

- Node.js (LTS sürümü önerilir)
- npm

### 1. Depoyu Klonlama

```bash
git clone https://github.com/Berkangor/TravelTruck.git
cd TravelTruck
```

### 2. Bağımlılıkların Yüklenmesi

```bash
npm install
```

Bazı peer dependency uyarıları durumunda (geliştirme ortamında) şu alternatif de kullanılabilir:

```bash
npm install --legacy-peer-deps
```

### 3. Geliştirme Ortamında Çalıştırma

```bash
npm run dev
```

Ardından tarayıcıdan:

- `http://localhost:5173/`

adresine giderek uygulamayı görüntüleyebilirsiniz.

### 4. Production Build Oluşturma

```bash
npm run build
```

Bu komut, dağıtıma hazır dosyaları `dist/` klasörüne üretir.

İsteğe bağlı olarak, build çıktısını lokalde test etmek için:

```bash
npm run preview
```

komutu kullanılabilir.

---

## Yazar Bilgisi

**Ad:** Berkan Görmüş  
**GitHub:** https://github.com/Berkangor  
**Proje:** TravelTruck – Karavan Kiralama Frontend Uygulaması
**Vercel:** https://travel-truck-wine.vercel.app/

---

## Commit Mesajları

Bu projede versiyon takibi ve kod okunabilirliğini artırmak için **anlamlı commit mesajları** kullanılmalıdır.

Önerilen kurallar:

- Commit mesajı, yapılan değişikliğin amacını kısa ve net şekilde ifade etmelidir.
- İngilizce veya Türkçe kullanılabilir; önemli olan tutarlılık ve açıklayıcı olmasıdır.
- Gerektiğinde prefix kullanmak okunabilirliği artırır:
  - `feat: ...` – Yeni özellik
  - `fix: ...` – Hata düzeltme
  - `refactor: ...` – Davranışı değiştirmeden kod iyileştirme
  - `style: ...` – Sadece stil/düzen değişiklikleri
  - `docs: ...` – Dokümantasyon değişiklikleri

**Örnek commit mesajları:**

- `feat: add loading indicator for campers fetch`
- `fix: correct catalog filters for vehicle type`
- `refactor: extract camper card into separate component`
- `style: adjust header spacing and logo size`
- `docs: update README with installation steps`

Bu şekilde, projeyi inceleyen herkes commit geçmişini okuyarak yapılan işleri rahatça takip edebilir.
