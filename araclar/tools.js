const tools = [
    {
        "name": "ChatGPT",
        "category": ["Chatbot & Asistan"],
        "description": "OpenAI tarafından geliştirilen, doğal dil işleme konusunda lider yapay zeka asistanı.",
        "url": "https://chat.openai.com",
        "video": "https://www.youtube.com/embed/eIVOMazjGQs",
        "icon": "fa-solid fa-message",
        "rank": 5,
        "date": "2023-01-15",
        "tags": [
            "Metin Üretimi",
            "Kodlama",
            "Çeviri",
            "Multimodal"
        ]
    },
    {
        "name": "Midjourney",
        "category": ["Görsel Üretimi"],
        "description": "Metin komutlarından yüksek kaliteli ve sanatsal görseller oluşturan yapay zeka aracı.",
        "url": "https://www.midjourney.com/home",
        "video": "https://www.youtube.com/embed/8ptPSjIE49M",
        "icon": "fa-solid fa-paintbrush",
        "rank": 5,
        "date": "2023-03-10",
        "tags": [
            "Sanat",
            "Tasarım",
            "Görsel"
        ]
    },
    {
        "name": "Claude",
        "category": ["Chatbot & Asistan"],
        "description": "Anthropic'in geliştirdiği, uzun metinleri analiz edebilen ve güvenliğe odaklanan yapay zeka.",
        "url": "https://claude.ai",
        "video": "https://www.youtube.com/embed/nYs2YP5BoJs",
        "icon": "fa-solid fa-robot",
        "rank": 5,
        "date": "2023-08-20",
        "tags": [
            "Analiz",
            "Yazım",
            "Kodlama"
        ]
    },
    {
        "name": "Perplexity",
        "category": ["Arama Motoru"],
        "description": "Gerçek zamanlı internet erişimi ile kaynaklı cevaplar sunan yapay zeka arama motoru.",
        "url": "https://www.perplexity.ai",
        "video": "https://www.youtube.com/embed/kV9Pj-HQEEg",
        "icon": "fa-solid fa-magnifying-glass",
        "rank": 4,
        "date": "2023-05-01",
        "tags": [
            "Araştırma",
            "Arama",
            "Bilgi"
        ]
    },
    {
        "name": "Gamma",
        "category": ["Sunum & Doküman"],
        "description": "Saniyeler içinde profesyonel sunumlar, web siteleri ve dokümanlar oluşturan araç.",
        "url": "https://gamma.app/signup?r=7egrrffmvb9ctfk",
        "video": "https://www.youtube.com/embed/n1n0inlWVeA",
        "icon": "fa-solid fa-layer-group",
        "rank": 3,
        "date": "2023-11-15",
        "tags": [
            "Sunum",
            "Ofis",
            "Verimlilik"
        ]
    },
    {
        "name": "Suno ",
        "category": ["Müzik-Şarkı-Türkü"],
        "description": "Temel Özellikler\nMetinle Şarkı Üretimi: Tür, ruh hali veya tema belirterek saniyeler içinde şarkı oluşturur; geniş müzik veritabanı üzerinde eğitilmiştir.\nVokal ve Özelleştirme: Yapay seslerle vokal ekler, mevcut sesleri uyarlayabilir ve şarkı sözlerini otomatik üretir.\nKullanıcı Dostu: Web tabanlıdır, indirme/paylaşma kolaydır; Discord entegrasyonu gibi beta özellikler sunar.",
        "url": "https://suno.com/invite/@drmurataltun",
        "video": "https://www.youtube.com/embed/kA5rJcsRtUY",
        "icon": "fa-music-note",
        "rank": 0,
        "date": "2026-02-06",
        "tags": [
            "Müzik",
            "AI Müzik",
            "Şarkı Oluşturma"
        ]
    },
    {
        "name": "NanoBananaPro",
        "category": ["Görsel Üretimi"],
        "description": "Nano Banana Pro, Google'ın Gemini 3 Pro Image modeline dayalı gelişmiş bir yapay zeka görüntü oluşturma ve düzenleme aracıdır. Bu araç, doğal dil komutlarıyla fotoğrafları düzenlemenize, 2K-4K çözünürlükte stüdyo kalitesinde görseller üretmeye olanak tanır. Özellikle yaratıcı profesyoneller için kamera açıları, aydınlatma, odak ve renk kontrolleri sunar.",
        "url": "https://gemini.google.com/",
        "video": "https://www.youtube.com/embed/nX9rfU65kCg",
        "icon": "fa-solid fa-paintbrush",
        "rank": 5,
        "date": "2026-02-06",
        "tags": [
            "Görsel",
            "image",
            "gemini"
        ]
    },
    {
        "name": "Gemini",
        "category": ["Chatbot & Asistan"],
        "description": "Gemini, Google'ın çok modlu yapay zeka modeli ailesidir ve metin, görüntü, ses, video ile kod gibi farklı veri türlerini anlayıp işleyebilir. Eski adıyla Bard olarak bilinen bu sohbet robotu, 2023'te piyasaya sürüldü ve şu anda 200'den fazla ülkede 40'tan fazla dilde kullanılabiliyor.\n\nÖzellikler\nGemini, Gmail, Takvim, Haritalar gibi Google uygulamalarıyla entegre çalışır; büyük dosyaları (1 milyon token bağlam) analiz eder ve kod üretimi, duygu tanıma gibi yetenekler sunar. Multimodal yapısı sayesinde karmaşık problemleri çözer, görsel oluşturur ve hızlı yanıt verir.",
        "url": "https://gemini.google.com/app",
        "video": "https://www.youtube.com/embed/jN9iqzLFmVo",
        "icon": "",
        "rank": 5,
        "date": "2026-02-06",
        "tags": [
            "Metin Üretimi",
            "Kodlama",
            "Çeviri",
            "Multimodal"
        ]
    },
    {
        "name": "Manus",
        "category": ["Agents"],
        "description": "Manus Agents, Manus AI platformunun otonom yapay zeka ajanlarıdır ve 2026'da Agent Skills entegrasyonuyla önemli ölçüde gelişmiştir. Bu ajanlar, genel amaçlı görevlerden karmaşık iş akışlarına kadar geniş bir yelpazede çalışır.\nAgent Skills Sistemi\n2026 Ocak'ta entegre edilen Agent Skills, modüler becerilerle ajanları uzmanlaştırır; hukuki inceleme, finansal analiz veya içerik oluşturma gibi alanlarda özelleştirilebilir. Beceri oluşturma, başarılı iş akışını \"paketle\" komutuyla otomatikleştirir ve /SKILL_NAME ile tetiklenir; kademeli yükleme ile verimli çalışır. Takım kütüphaneleriyle paylaşılabilir, MCP veri protokolüyle tamamlanır.\nAna Beceriler\nBilgi Toplama ve Araştırma: Derin web araştırması, veri analizi, görselleştirme ve raporlama yapar.\nKodlama ve Geliştirme: Uçtan uca uygulama oluşturma, hata ayıklama, mobil/web projeleri yönetir.\nİçerik Üretimi: Video düzenleme, slayt tasarımı, açılış sayfası oluşturma gibi yaratıcı görevler.",
        "url": "https://manus.im/invitation/8OZRUCYAMKJF",
        "video": "https://www.youtube.com/embed/3mdNmNLcWYQ",
        "icon": "",
        "rank": 5,
        "date": "2026-02-06",
        "tags": [
            "Ajan",
            "Agents"
        ]
    },
    {
        "name": "GenSpark",
        "category": ["Agents"],
        "description": "Genspark, yapay zeka tabanlı bir \"Super Agent\" platformudur ve 2026'da multi-agent mimarisiyle otonom görevleri yöneten kapsamlı bir AI çalışma alanı olarak öne çıkar. Manus Agents'a benzer şekilde ajan becerileri sunar, ancak daha fazla araç entegrasyonu ve telefon arama gibi benzersiz özelliklerle fark yaratır.",
        "url": "https://www.genspark.ai/",
        "video": "https://www.youtube.com/embed/hJMDunKxVps",
        "icon": "",
        "rank": 5,
        "date": "2026-02-06",
        "tags": [
            "ajan",
            "Agents"
        ]
    },
    {
        "name": "Comet",
        "category": ["Agents"],
        "description": "Comet, Perplexity AI tarafından geliştirilen AI-native bir tarayıcıdır ve 2026'da ajanik yetenekleriyle web gezinme, görev otomasyonu ve kişisel asistanlıkta öne çıkar. Manus Agents ve Genspark gibi super agent'lara benzer şekilde otonom ajanlar kullanır, ancak Chromium tabanlı tarayıcı entegrasyonuyla fark yaratır. Comet, Comet Assistant adlı otonom ajanla web'de gezinir, tıklar ve çok adımlı görevleri (e-posta gönderme, rezervasyon) bağımsız yürütür; Gmail entegrasyonu ve sayfa içi açıklama sunar. Ücretsiz olarak erişilebilir olup, Max aboneleri için gelişmiş özellikler ekler; Chromium uyumluluğuyla Chrome profillerini içe aktarır. 2026'da en iyi AI tarayıcılardan biri olarak PCMag ve Zapier listelerinde yer alır. Ana Beceriler\nGörev Otomasyonu: Airbnb mesajı gönderme, LeetCode kod çalıştırma, karşılaştırmalı alışveriş gibi ajanik eylemler.\nSayfa Analizi: Vurgulanan metni özetleme, açıklama veya benzer içerik bulma; bağlam zincirleme ile devamlı sohbet.\nE-posta ve Planlama: Gmail'de özetleme, cevap taslağı, arama ve zamanlama.\nÇoklu Görev: Paralel sekmelerde ajan çalıştırma, araştırma ve raporlama.\n\n",
        "url": "https://plex.it/referrals/CBLV015J",
        "video": "https://www.youtube.com/embed/mEEbBCIeXl0",
        "icon": "",
        "rank": 5,
        "date": "2026-02-06",
        "tags": [
            "YZ tarayıcı",
            "AI browser",
            "agents",
            "ajan"
        ]
    },
    {
        "name": "Open AI Prism",
        "category": ["Akademik"],
        "description": "Prism.openai.com, OpenAI tarafından geliştirilen ücretsiz bir LaTeX tabanlı bilimsel yazı ve işbirliği çalışma alanıdır. GPT-5.2 modeli ile güçlendirilen platform, araştırmacıların makale taslağı oluşturma, revizyon yapma ve literatür tarama gibi işleri hızlandırmak için tasarlanmıştır.\n\nÖzellikler\nGerçek zamanlı sınırsız ortak çalışma, proje farkındalığına sahip AI destekli redaksiyon ve denklem/diyagram üretimi sunar.\n​\n\narXiv gibi kaynaklardan literatür entegrasyonu, ses/görselden LaTeX dönüştürme ve Zotero senkronizasyonu gibi araçlar içerir.\n\nBulut tabanlıdır; yerel kurulum gerektirmez ve ChatGPT hesabı ile herkes erişebilir.\n\nKullanım Alanları\nPrism, bilimsel makaleler, hipotez testleri ve ekip projeleri için idealdir; akademisyenler ve araştırmacılar için günlük iş akışını bütünleştirir. Özellikle eğitim teknolojisi ve veri madenciliği gibi alanlarda veri analizi makalelerinizi hızlandırabilir.\n\nErişim\nChatGPT kişisel hesabı olan herkes prism.openai.com üzerinden ücretsiz kullanabilir; gelişmiş özellikler ücretli planlara gelecektir.\n​",
        "url": "https://prism.openai.com/",
        "video": "https://www.youtube.com/embed/f2AuLUWgaJk",
        "icon": "",
        "rank": 4,
        "date": "2026-02-06",
        "tags": [
            "latex",
            "makale",
            "bilimsel araştırma"
        ]
    },
    {
        "name": "SciSpace",
        "category": ["Akademik"],
        "description": "SciSpace (scispace.com), yapay zeka destekli bir akademik araştırma platformudur ve 270 milyondan fazla makaleye erişim sağlar. Araştırmacıların literatür taraması, makale analizi ve soru-cevap yapmasını kolaylaştıran araç, Chrome eklentisi ve mobil app ile de kullanılabilir.\n\nAna Özellikler\nCopilot AI sohbet botu ile makalelerden özet, metodoloji, bulgular ve sınırlılıklar çıkarır; benzer makaleler önerir.\n\nPDF yükleme ile tablo/veri çıkarma, podcast oluşturma ve atıf yönetimi yapar.\n​Semantik arama, literatür review ve IMRAD taslak oluşturma gibi araçlar sunar.\n​Kullanım Alanları\nHarvard ve Cambridge gibi üniversitelerden 3,5 milyondan fazla kullanıcıya hitap eder; tez, makale ve veri analizi için idealdir. Eğitim teknolojisi ve veri madenciliği araştırmalarınızda literatür taramasını hızlandırır, özellikle Colab/Kaggle entegrasyonuyla faydalıdır.\n\nErişim ve Fiyat\nÜcretsiz temel sürüm mevcut; premium özellikler (sınırsız AI sorgu) abonelikle erişilebilir, Chrome Web Store'dan eklenti yükleyin.",
        "url": "https://scispace.com/",
        "video": "https://www.youtube.com/embed/xlxRkxBUwbI",
        "icon": "",
        "rank": 4,
        "date": "2026-02-06",
        "tags": [
            "Bilimsel araştırma",
            "makale",
            "literatür"
        ]
    },
    {
        "name": "Google Veo",
        "category": ["Video"],
        "description": "Google Labs FX Tools altında yer alan Flow, yaratıcılar için geliştirilmiş bir yapay zeka film yapım aracıdır. Google DeepMind'ın Veo modeli ile sinematik videolar, sahneler ve hikayeler oluşturmayı sağlar.\n​\n\nÖzellikler\nMetinden videoya, kareden videoya, video içerik öğesi (Ingredients to Video) dönüştürme.\nVideo uzantısı, kamera kontrolü, sahne oluşturma aracı (Scenebuilder) ve 1080p/4K çözünürlük yükseltme.\n​Karakter ve tema tutarlılığı ile hikaye akışı oluşturma; nesne kaldırma, sahne uzatma gibi düzenleme araçları.\n​Erişim ve Abonelik\nGoogle AI Pro veya Ultra abonelik gerektirir; aylık kredi sistemiyle çalışır (ek kredi satın alma mümkün).\nWorkspace kullanıcıları için ücretsiz erişim seçenekleri var, ancak gelişmiş modeller için ücretli planlar önerilir.\n​Kullanım Alanları\nİçerik üreticileri, film yapımcıları için ideal; Reels, YouTube videoları veya sinematik hikayeler üretmek üzere tasarlandı. Pro ipucu: Detaylı prompt'lar ve ayarlar menüsünden model seçimiyle en iyi sonuç alınır.",
        "url": "https://labs.google/fx/tools/flow",
        "video": "https://www.youtube.com/embed/hc-yBuo057E",
        "icon": "",
        "rank": 5,
        "date": "2026-02-06",
        "tags": [
            "AI video",
            "video"
        ]
    },
    {
        "name": "KlingAI",
        "category": ["Video"],
        "description": "Kling AI, Çinli Kuaishou Technology tarafından geliştirilen bir yapay zeka video ve görüntü üretim platformudur. Metin veya görüntüden yüksek kaliteli videolar oluşturur ve OpenAI'nin Sora'sına rakip olarak öne çıkar.\n\nÖzellikler\nText-to-video ve image-to-video üretimi; 1080p çözünürlükte 30 FPS, 2 dakikaya kadar videolar.\n\nGerçekçi fizik simülasyonu, kamera hareketleri, karakter tutarlılığı; video uzatma, inpainting gibi düzenleme araçları.\n\nEk olarak görüntü üretimi, ses efekti oluşturma ve yaratıcı efektler sunar.\n​\nErişim ve Kullanım\nGlobal versiyonu klingai.com/global/ adresinde aktif; e-posta ile kayıt olup günlük 66 ücretsiz kredi alınır, ücretli planlar mevcut.\nMobil app (Google Play) ile de erişilebilir; prompt'larla hızlı video üretimi yapar.",
        "url": "https://klingai.com/global/",
        "video": "https://www.youtube.com/embed/BOlFslVqujg",
        "icon": "",
        "rank": 5,
        "date": "2026-02-06",
        "tags": [
            "video",
            "AI video"
        ]
    },
    {
        "name": "GPT Imagine 1.5",
        "category": ["Görsel Üretimi"],
        "description": "Ana Özellikler\nModel, önceki GPT Image 1'e göre 4 kat daha hızlı görsel üretimi sağlıyor ve talimatları çok daha doğru takip ediyor. Yüklediğiniz bir görselde yalnızca istediğiniz değişiklikleri yaparak ışık, kompozisyon, yüz benzerliği gibi unsurları koruyor; bu sayede kıyafet değiştirme, saç stili denemeleri veya stilistik filtreler gibi düzenlemeler tutarlı ve gerçekçi oluyor.\n\nKullanım Alanları\nChatGPT'nin yan menüsüne eklenen yeni Images bölümü, bir \"yaratıcı stüdyo\" gibi çalışıyor: Hazır stiller, filtreler ve prompt'larla metin tabanlı veya görselden görsele dönüşümler yapabiliyorsunuz. Küçük metin blokları, çok yüzlü sahneler ve yoğun detaylar (kumaş dokusu, yüzey parıltısı) daha doğal render ediliyor.\n\nErişim ve Maliyet\nTüm ChatGPT kullanıcıları için hemen aktif; API'de gpt-image-1.5 olarak erişilebilir ve giriş/çıkış maliyetleri %20 daha düşük. OpenAI, gelecekte daha ince ayarlar ve çok dilli destek vaat ediyor.",
        "url": "https://chatgpt.com/",
        "video": "https://www.youtube.com/embed/jFJAIOAzFqQ",
        "icon": "",
        "rank": 4,
        "date": "2026-02-06",
        "tags": [
            "görsel",
            "imagine",
            "foto"
        ]
    },
    {
        "name": "SORA-2",
        "category": ["Video"],
        "description": "OpenAI'ın Sora 2 modeli, Eylül 2025'te yayınlanan en yeni video üretim aracı; metin veya görsel girdilerden gerçekçi videolar ve senkronize sesler oluşturuyor.\n\nAna Özellikler\nSora 2, fizik kurallarına daha uyumlu hareketler, gerçekçi simülasyonlar (örneğin jimnastik rutinleri veya doğal nesne etkileşimleri) ve senkronize diyalog/ses efektleri sunuyor. Önceki Sora'ya göre çoklu çekim tutarlılığı, kamera kontrolü ve stil çeşitliliği (sinematik, anime) artmış durumda.\n\nKullanım ve Erişim\nYeni Sora mobil uygulamasında (iOS/web) davetiye ile erişilebilir; ABD ve Kanada'da 30 Eylül 2025'te başladı, global rollout devam ediyor. \"Cameos\" özelliğiyle gerçek kişileri/nesneleri videolara entegre edebiliyor, 20 saniyeye kadar 1080p videolar üretiyor.",
        "url": "https://apps.apple.com/us/app/sora-by-openai/id6744034028",
        "video": "https://www.youtube.com/embed/lHhHEw-Nkg0",
        "icon": "",
        "rank": 4,
        "date": "2026-02-06",
        "tags": [
            "video",
            "yz video"
        ]
    }
];

// Kategorileri otomatik çıkar
const categories = [...new Set(tools.flatMap(tool => tool.category))];
