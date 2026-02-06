const tools = [
    {
        "name": "ChatGPT",
        "category": "Chatbot & Asistan",
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
        "category": "Görsel Üretimi",
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
        "category": "Chatbot & Asistan",
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
        "category": "Arama Motoru",
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
        "category": "Sunum & Doküman",
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
        "category": "Müzik-Şarkı-Türkü",
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
        "category": "Görsel Üretimi",
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
        "category": "Chatbot & Asistan",
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
        "category": "Agents",
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
        "category": "Agents",
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
        "category": "Agents",
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
    }
];

// Kategorileri otomatik çıkar
const categories = [...new Set(tools.map(tool => tool.category))];
