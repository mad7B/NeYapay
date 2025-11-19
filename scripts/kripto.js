// KRİPTO ANALİZ TOKEN ÜRETİCİ

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("tokenText");
    const btn = document.getElementById("generateBtn");
    const result = document.getElementById("result");

    btn.addEventListener("click", async () => {
        const idea = input.value.trim();

        if (!idea) {
            result.textContent = "Lütfen bir fikir yaz.";
            return;
        }

        result.textContent = "Üretiliyor...";

        try {
            // OpenAI istek simülasyonu (şimdilik local üretim)
            const generated = generateLocalIdea(idea);

            result.textContent = generated;
        } catch (error) {
            result.textContent = "Bir hata oluştu. Tekrar dene.";
            console.error(error);
        }
    });
});


// Geçici yerel üretici (OpenAI yoksa boşa dönmesin)
function generateLocalIdea(text) {
    const samples = [
        `Yeni token fikri: **${text.toUpperCase()} Coin** 🚀  
Topluluk odaklı, eğlenceli ve viral olma potansiyeli yüksek.`,
        
        `⚡ **${text} Token** analizi:  
Likiditeyi artırmak için staking + ödül sistemi içeriyor.`,

        `💡 **${text}** fikrine göre token:  
Meme tarzı + faydalı kullanım alanı birleşimi. Pump potansiyeli yüksek.`,

        `📈 **${text} Coin** tahmini:  
Erken hype yakalanırsa trend olabilir. Topluluk büyümesi önemli.`
    ];

    return samples[Math.floor(Math.random() * samples.length)];
}
