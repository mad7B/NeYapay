// kripto.js — Vercel backend ile çalışan AI sistemi

async function uretilenTokenFikri() {
    const inputEl = document.getElementById("tokenInput");
    const resultEl = document.getElementById("tokenResult");

    const userText = inputEl.value.trim();
    if (!userText) {
        resultEl.textContent = "Lütfen bir token fikri yaz.";
        return;
    }

    resultEl.textContent = "⏳ Yapay zeka düşünüyor...";

    try {
        const response = await fetch("/api/openai", {   // index.html ile aynı backend
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "gpt-4.1-mini",
                input: `Kullanıcının verdiği tema için yaratıcı bir token fikri üret: ${userText}`
            })
        });

        const data = await response.json();

        if (data.output_text) {
            resultEl.textContent = data.output_text;
        } else {
            resultEl.textContent = "❌ API dönüşü beklenen formatta değil.";
            console.log(data);
        }

    } catch (err) {
        resultEl.textContent = "❌ Sunucuyla bağlantı kurulamadı.";
        console.error(err);
    }
}
