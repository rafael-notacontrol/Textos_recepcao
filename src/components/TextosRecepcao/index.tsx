import { toast, ToastContainer } from "react-toastify";
import { Button, Card, CardTitle } from "@heroui/react";

interface Texto {
  id: number;
  titulo: string;
  conteudo: string;
}

export default function TextosRecepcao() {
  const textos: Texto[] = [
    {
      id: 1,
      titulo: "Bom dia",
      conteudo: `Bom dia,

Por gentileza, aguarde.

Faremos a análise de sua solicitação e atualizaremos o chamado com novas informações.

Nos colocamos à disposição.

Atenciosamente,`,
    },
    {
      id: 2,
      titulo: "Boa tarde",
      conteudo: `Boa tarde,

Por gentileza, aguarde.

Faremos a análise de sua solicitação e atualizaremos o chamado com novas informações.

Nos colocamos à disposição.

Atenciosamente,`,
    },
    {
      id: 3,
      titulo: "Select básico",
      conteudo: `
SELECT *
FROM 
WHERE
`,
    },
  ];

  const notificacao = () =>
    toast.success("Texto copiado!", {
      theme: "dark",
    });

  const copiarTexto = async (texto: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      notificacao();
    } catch (error) {
      console.error("Erro ao copiar: ", error);
    }
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-4 m-8">
        {textos.map((item) => (
          <Card key={item.id} className="w-100" variant="default">
            <CardTitle>{item.titulo}</CardTitle>
            <Card.Content>
              <p>{item.conteudo}</p>

              <Button
                onClick={() => copiarTexto(item.conteudo)}
                className="mt-2 self-center"
                size="md"
              >
                Copiar
              </Button>
              <ToastContainer
                theme="dark"
                autoClose={1500}
                position="bottom-center"
              />
            </Card.Content>
          </Card>
        ))}
      </div>
    </>
  );
}
