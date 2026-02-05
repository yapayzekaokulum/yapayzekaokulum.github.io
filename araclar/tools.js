const tools = [
    {
        name: "ChatGPT",
        category: "Chatbot & Asistan",
        description: "OpenAI tarafından geliştirilen, doğal dil işleme konusunda lider yapay zeka asistanı.",
        url: "https://chat.openai.com",
        tags: ["Metin Üretimi", "Kodlama", "Çeviri"],
        icon: "fa-solid fa-message",
        date: "2023-01-15",
        rank: 5,
        video: "https://www.youtube.com/embed/outcGtbnMuQ"
    },
    {
        name: "Midjourney",
        category: "Görsel Üretimi",
        description: "Metin komutlarından yüksek kaliteli ve sanatsal görseller oluşturan yapay zeka aracı.",
        url: "https://www.midjourney.com",
        tags: ["Sanat", "Tasarım", "Görsel"],
        icon: "fa-solid fa-paintbrush",
        date: "2023-03-10",
        rank: 5,
        video: "https://www.youtube.com/embed/tE5_M743hNs"
    },
    {
        name: "Claude",
        category: "Chatbot & Asistan",
        description: "Anthropic'in geliştirdiği, uzun metinleri analiz edebilen ve güvenliğe odaklanan yapay zeka.",
        url: "https://claude.ai",
        tags: ["Analiz", "Yazım", "Kodlama"],
        icon: "fa-solid fa-robot",
        date: "2023-08-20",
        rank: 4
    },
    {
        name: "Perplexity",
        category: "Arama Motoru",
        description: "Gerçek zamanlı internet erişimi ile kaynaklı cevaplar sunan yapay zeka arama motoru.",
        url: "https://www.perplexity.ai",
        tags: ["Araştırma", "Arama", "Bilgi"],
        icon: "fa-solid fa-magnifying-glass",
        date: "2023-05-01",
        rank: 4
    },
    {
        name: "Gamma",
        category: "Sunum & Doküman",
        description: "Saniyeler içinde profesyonel sunumlar, web siteleri ve dokümanlar oluşturan araç.",
        url: "https://gamma.app",
        tags: ["Sunum", "Ofis", "Verimlilik"],
        icon: "fa-solid fa-layer-group",
        date: "2023-11-15",
        rank: 3
    }
];

// Kategorileri otomatik çıkar
const categories = [...new Set(tools.map(tool => tool.category))];
