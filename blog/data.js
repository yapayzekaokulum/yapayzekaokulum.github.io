const blogPosts = [
    {
        id: 1,
        title: "Yapay Zeka Okuryazarlığı Neden Önemli?",
        excerpt: "Geleceğin dünyasında var olabilmek için yapay zeka okuryazarlığı artık bir tercih değil, zorunluluk haline geliyor.",
        content: `
            <p>Yapay zeka teknolojileri hayatımızın her alanına girerken, bu teknolojileri anlama ve etkin kullanma becerisi, yani 'Yapay Zeka Okuryazarlığı' kritik bir önem kazanıyor.</p>
            <br>
            <h3>Yapay Zeka Okuryazarlığı Nedir?</h3>
            <p>Sadece kod yazmak veya teknik detayları bilmek değil; yapay zekanın nasıl çalıştığını, potansiyelini, sınırlarını ve etik boyutlarını kavrayabilmektir. Bir AI modelinin nasıl karar verdiğini, verinin önemini ve insan-AI işbirliğinin dinamiklerini anlamayı içerir.</p>
            <br>
            <h3>Neden Şimdi?</h3>
            <ul>
                <li><strong>Kariyer İçin:</strong> Hangi sektörde olursanız olun, AI araçlarını kullananlar, kullanmayanların önüne geçecek.</li>
                <li><strong>Eleştirel Düşünme:</strong> Karşımıza çıkan içeriğin insan mı yoksa makine üretimi mi olduğunu ayırt edebilmek, dezenformasyon çağında hayati bir beceridir.</li>
                <li><strong>Etik ve Güvenlik:</strong> Veri gizliliği, önyargı ve güvenlik risklerinin farkında olmak, bireyleri korur.</li>
            </ul>
            <br>
            <p>Sonuç olarak, yapay zeka okuryazarlığı, 21. yüzyılın en temel yetkinliklerinden biri olarak kabul edilmelidir. Eğitim sistemimizin bu doğrultuda güncellenmesi ve yaşam boyu öğrenme kültürünün benimsenmesi şarttır.</p>
        `,
        category: "Yapay Zeka",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        date: "2024-02-15",
        author: "Dr. Murat Altun",
        readTime: "5 dk"
    },
    {
        id: 2,
        title: "Eğitimde Üretken Yapay Zeka Kullanımı",
        excerpt: "ChatGPT, Claude ve Gemini gibi araçların sınıf içi etkinliklerde ve ders planlamada kullanımı üzerine ipuçları.",
        content: `
            <p>Eğitimciler için üretken yapay zeka, zaman kazandıran bir asistan ve yaratıcı bir ortak olabilir. Doğru kullanıldığında, öğretim materyali hazırlamadan ölçme değerlendirmeye kadar pek çok süreçte devrim yaratabilir.</p>
            <br>
            <h3>Kullanım Alanları</h3>
            <ol>
                <li><strong>Ders Planı Hazırlama:</strong> "Lise 2. sınıf biyoloji dersi için fotosentez konusunu anlatan 40 dakikalık interaktif bir ders planı hazırla."</li>
                <li><strong>Örnek Olay ve Senaryo Yazımı:</strong> Öğrencilerin tartışması için etik ikilemler veya tarihsel senaryolar oluşturma.</li>
                <li><strong>Kişiselleştirilmiş Geri Bildirim:</strong> Öğrenci ödevlerine yönelik detaylı ve yapıcı geri bildirim taslakları oluşturma.</li>
            </ol>
            <br>
            <h3>Dikkat Edilmesi Gerekenler</h3>
            <p>Yapay zeka "halüsinasyon" görebilir, yani yanlış bilgi uydurabilir. Bu nedenle üretilen her içerik mutlaka öğretmen süzgecinden geçirilmelidir. Ayrıca, veri gizliliği konusuna dikkat edilmeli, öğrencilerin kişisel verileri asla bu sistemlere girilmemelidir.</p>
        `,
        category: "Eğitim",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        date: "2024-02-10",
        author: "Dr. Murat Altun",
        readTime: "7 dk",
        isNew: true
    },
    {
        id: 3,
        title: "Python ile Veri Analizine Giriş",
        excerpt: "Pandas ve NumPy kütüphanelerini kullanarak veriyi nasıl işleyebileceğinize dair başlangıç rehberi.",
        content: "<p>Bu yazı yakında eklenecektir...</p>",
        category: "Yazılım",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        date: "2024-02-05",
        author: "YZO Ekibi",
        readTime: "10 dk"
    },
    {
        id: 4,
        title: "Yapay Zeka Araçları ile Sunum Hazırlama",
        excerpt: "Gamma, Tome ve Beautiful.ai gibi araçlarla dakikalar içinde profesyonel sunumlar hazırlayın.",
        content: "<p>Bu yazı yakında eklenecektir...</p>",
        category: "Araçlar",
        image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800",
        date: "2024-01-28",
        author: "Dr. Murat Altun",
        readTime: "4 dk"
    },
    {
        id: 5,
        title: "Prompt Mühendisliği 101",
        excerpt: "Yapay zeka modellerinden en iyi verimi almak için etkili istem (prompt) yazma teknikleri.",
        content: "<p>Bu yazı yakında eklenecektir...</p>",
        category: "Yapay Zeka",
        image: "https://images.unsplash.com/photo-1684074895690-348df80cce75?auto=format&fit=crop&q=80&w=800",
        date: "2024-01-20",
        author: "YZO Ekibi",
        readTime: "6 dk"
    },
    {
        id: 6,
        title: "Geleceğin Meslekleri ve AI",
        excerpt: "Yapay zeka devrimi ile birlikte hangi meslekler yok olacak, hangileri öne çıkacak?",
        content: `
            <p>Hangi meslekler yapay zeka devriminden etkilenecek? Bu soru herkesin aklında. Gerçek şu ki, AI işlerimizi elimizden almayacak, ancak AI kullanan kişiler işlerimizi alacak.</p>
            <br>
            <h3>Öne Çıkan Beceriler</h3>
            <ul>
                <li>Kompleks Problem Çözme</li>
                <li>Eleştirel Düşünme</li>
                <li>Yaratıcılık</li>
                <li>İnsan Yönetimi</li>
            </ul>
        `,
        category: "Kariyer",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        date: "2024-01-15",
        author: "Dr. Murat Altun",
        readTime: "5 dk"
    }
];

const categories = ["Tümü", "Yapay Zeka", "Eğitim", "Yazılım", "Araçlar", "Kariyer"];
