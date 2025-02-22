
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sendBtn").addEventListener("click", function () {
        let telefone = "5561985945661"; 
        let mensagem = "*Pedido - Macarrão e Cia*%0A%0A";

        let tamanho = document.querySelector("input[name='tamanho']:checked")?.value || "Não informado";
        let massa = document.querySelector("input[name='massa']:checked")?.value || "Não informado";
        let molho = document.querySelector("input[name='molho']:checked")?.value || "Não informado";
        let carne = document.querySelector("input[name='carne']:checked")?.value || "Não informado";

        let acompanhamentos = Array.from(document.querySelectorAll("input[name='acompanhamento']:checked"))
            .map(item => item.value)
            .join(", ") || "Nenhum";

        let url = `https://wa.me/${telefone}?text=${mensagem}🍝 *Massa:* ${massa}%0A🥫 *Molho:* ${molho}%0A🍖 *Carne:* ${carne}%0A🍽️ *Acompanhamentos:* </br> ${acompanhamentos}`;
        window.open(url, "_blank");
    });
});