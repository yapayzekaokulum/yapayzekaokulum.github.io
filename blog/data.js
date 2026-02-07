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
            <p>Eğitimciler için üretken yapay zeka, zaman kazandıran bir asistan ve yaratıcı bir ortak olabilir.</p>
            <br>
            <h3>Kullanım Alanları</h3>
            <ol>
                <li><strong>Ders Planı Hazırlama:</strong> "Lise 2. sınıf biyoloji dersi için fotosentez konusunu anlatan 40 dakikalık interaktif bir ders planı hazırla."</li>
                <li><strong>Örnek Olay ve Senaryo Yazımı:</strong> Öğrencilerin tartışması için etik ikilemler veya tarihsel senaryolar oluşturma.</li>
                <li><strong>Kişiselleştirilmiş Geri Bildirim:</strong> Öğrenci ödevlerine yönelik detaylı ve yapıcı geri bildirim taslakları oluşturma.</li>
            </ol>
            <br>
            <h3>Dikkat Edilmesi Gerekenler</h3>
            <p>Yapay zeka "halüsinasyon" görebilir. Bu nedenle üretilen her içerik mutlaka öğretmen süzgecinden geçirilmelidir.</p>
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
        content: `
            <p>Veri, günümüzün petrolü olarak adlandırılıyor. Python ise bu petrolü işlemek için en güçlü rafineri.</p>
            <br>
            <h3>Temel Kütüphaneler</h3>
            <ul>
                <li><strong>Pandas:</strong> Veri manipülasyonu ve analizi için kullanılır. Excel'in programlanabilir hali gibidir.</li>
                <li><strong>NumPy:</strong> Bilimsel hesaplamalar ve çok boyutlu diziler için temel pakettir.</li>
                <li><strong>Matplotlib & Seaborn:</strong> Veriyi görselleştirmek ve grafiklere dökmek için kullanılır.</li>
            </ul>
            <br>
            <p>Veri analizine başlamak için Anaconda veya Google Colab gibi ortamları kullanarak hemen kod yazmaya başlayabilirsiniz.</p>
        `,
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
        content: `
            <p>Saatlerce PowerPoint slaytlarıyla uğraşma devri sona eriyor. AI araçları, metin girdilerinizi saniyeler içinde görsel açıdan zengin sunumlara dönüştürüyor.</p>
            <br>
            <h3>Popüler Araçlar</h3>
            <ul>
                <li><strong>Gamma.app:</strong> Web tabanlı, doküman yazar gibi sunum oluşturmanızı sağlar.</li>
                <li><strong>Tome:</strong> Hikaye anlatıcılığına odaklanan, görsel ağırlıklı sunumlar için idealdir.</li>
                <li><strong>Beautiful.ai:</strong> Tasarım kurallarını otomatik uygulayarak her slaydın profesyonel görünmesini sağlar.</li>
            </ul>
            <br>
            <p>Bu araçlar, içeriğe odaklanmanızı sağlarken tasarım yükünü üzerinizden alır.</p>
        `,
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
        content: `
            <p>Yapay zeka ile konuşmak yeni bir yabancı dil öğrenmek gibidir. Ne kadar iyi tarif ederseniz, o kadar iyi sonuç alırsınız.</p>
            <br>
            <h3>İyi Bir Prompt'un Anatomisi</h3>
            <ol>
                <li><strong>Rol Belirleme:</strong> "Sen uzman bir diyetisyensin..."</li>
                <li><strong>Bağlam Verme:</strong> "Kilo vermek isteyen ama spora vakti olmayan..."</li>
                <li><strong>Görev Tanımı:</strong> "Haftalık bir yemek planı oluştur."</li>
                <li><strong>Format Belirleme:</strong> "Sonucu bir tablo halinde ver."</li>
            </ol>
            <br>
            <p>Bu formülü uygulayarak ChatGPT veya Claude gibi modellerden çok daha verimli çıktılar alabilirsiniz.</p>
        `,
        category: "Yapay Zeka",
        image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=800",
        date: "2024-01-20",
        author: "YZO Ekibi",
        readTime: "6 dk"
    },
    {
        id: 6,
        title: "Geleceğin Meslekleri ve AI",
        excerpt: "Yapay zeka devrimi ile birlikte hangi meslekler yok olacak, hangileri öne çıkacak?",
        content: `
            <p>AI işlerimizi elimizden almayacak, ancak AI kullanan kişiler işlerimizi alacak. Peki hangi alanlar yükselişte?</p>
            <br>
            <h3>Öne Çıkan Alanlar</h3>
            <ul>
                <li><strong>AI Etik Uzmanı:</strong> Yapay zeka kararlarının adil ve etik olmasını denetleyenler.</li>
                <li><strong>Veri Dedektifi:</strong> Büyük veriler içindeki gizli kalıpları bulanlar.</li>
                <li><strong>Prompt Mühendisi:</strong> AI modellerini en verimli şekilde yönlendirenler.</li>
                <li><strong>Siber Güvenlik Analisti:</strong> AI destekli saldırılara karşı savunma geliştirenler.</li>
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
