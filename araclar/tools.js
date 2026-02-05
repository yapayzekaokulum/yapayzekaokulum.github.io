const tools = [
    {
        name: "ChatGPT",
        category: "Chatbot & Asistan",
        description: "OpenAI tarafından geliştirilen, doğal dil işleme konusunda lider yapay zeka asistanı.",
        url: "https://chat.openai.com",
        tags: ["Metin Üretimi", "Kodlama", "Çeviri"],
        icon: "fa-solid fa-message"
    },
    {
        name: "Midjourney",
        category: "Görsel Üretimi",
        description: "Metin komutlarından yüksek kaliteli ve sanatsal görseller oluşturan yapay zeka aracı.",
        url: "https://www.midjourney.com",
        tags: ["Sanat", "Tasarım", "Görsel"],
        icon: "fa-solid fa-paintbrush"
    },
    {
        name: "Claude",
        category: "Chatbot & Asistan",
        description: "Anthropic'in geliştirdiği, uzun metinleri analiz edebilen ve güvenliğe odaklanan yapay zeka.",
        url: "https://claude.ai",
        tags: ["Analiz", "Yazım", "Kodlama"],
        icon: "fa-solid fa-robot"
    },
    {
        name: "Perplexity",
        category: "Arama Motoru",
        description: "Gerçek zamanlı internet erişimi ile kaynaklı cevaplar sunan yapay zeka arama motoru.",
        url: "https://www.perplexity.ai",
        tags: ["Araştırma", "Arama", "Bilgi"],
        icon: "fa-solid fa-magnifying-glass"
    },
    {
        name: "Gamma",
        category: "Sunum & Doküman",
        description: "Saniyeler içinde profesyonel sunumlar, web siteleri ve dokümanlar oluşturan araç.",
        url: "https://gamma.app",
        tags: ["Sunum", "Ofis", "Verimlilik"],
        icon: "fa-solid fa-layer-group"
    }
];

// Kategorileri otomatik çıkar
const categories = [...new Set(tools.map(tool => tool.category))];
