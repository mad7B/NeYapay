async function aiRequest(prompt) {
    try {
        const response = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        return data.result || "Sunucu hatası — Vercel API yanıt vermiyor.";
    } 
    catch {
        return "Sunucu hatası — Vercel API yanıt vermiyor.";
    }
}

async function generateKripto() {
    const input = document.getElementById("tokenInput").value;
    const output = document.getElementById("tokenOutput");

    output.textContent = "Yükleniyor...";

    const result = await aiRequest("Kripto token oluştur: " + input);
    output.textContent = result;
}
