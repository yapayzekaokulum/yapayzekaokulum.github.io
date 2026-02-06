const tools = [
    {
        "name": "ChatGPT",
        "category": "Chatbot & Asistan",
        "description": "OpenAI tarafından geliştirilen, doğal dil işleme konusunda lider yapay zeka asistanı.",
        "url": "https://chat.openai.com",
        "tags": [
            "Metin Üretimi",
            "Kodlama",
            "Çeviri"
        ],
        "icon": "fa-solid fa-message",
        "date": "2023-01-15",
        "rank": 5,
        "video": "https://www.youtube.com/embed/outcGtbnMuQ"
    },
    {
        "name": "Midjourney",
        "category": "Görsel Üretimi",
        "description": "Metin komutlarından yüksek kaliteli ve sanatsal görseller oluşturan yapay zeka aracı.",
        "url": "https://www.midjourney.com",
        "tags": [
            "Sanat",
            "Tasarım",
            "Görsel"
        ],
        "icon": "fa-solid fa-paintbrush",
        "date": "2023-03-10",
        "rank": 5,
        "video": "https://www.youtube.com/embed/tE5_M743hNs"
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
        "url": "https://gamma.app",
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
        "icon": "fa-music",
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
        "icon": "fa-banana",
        "rank": 5,
        "date": "2026-02-06",
        "tags": [
            "Görsel",
            "image",
            "gemini"
        ]
    }
];

// Kategorileri otomatik çıkar
const categories = [...new Set(tools.map(tool => tool.category))];
