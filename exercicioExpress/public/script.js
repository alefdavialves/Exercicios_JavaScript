async function carregarFeedbacks() {
  try {

    const resposta = await fetch("/feedbacks/dados");

    const feedbacks = await resposta.json();

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    feedbacks.forEach((feedback, index) => {

      lista.innerHTML += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
          
          <h3>${feedback.nome}</h3>

          <p>${feedback.comentario}</p>

          <form action="/feedbacks/remover" method="POST">

            <input type="hidden" name="index" value="${index}">

            <button type="submit">
              Remover
            </button>

          </form>

        </div>
      `;
    });

  } catch (erro) {
    console.log("Erro:", erro);
  }
}

carregarFeedbacks();