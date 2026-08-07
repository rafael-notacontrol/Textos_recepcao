import { Card, CardDescription, CardHeader } from "@heroui/react";

export default function FraseDoDia() {
  const frases = [
    "Acredite em você, mesmo quando ninguém mais acreditar.",
    "Cada novo dia é uma nova oportunidade para recomeçar.",
    "Pequenos passos também levam a grandes conquistas.",
    "Não espere o momento perfeito; faça o momento acontecer.",
    "O sucesso começa quando você decide não desistir.",
    "Você é capaz de muito mais do que imagina.",
    "Continue avançando, mesmo que seja devagar.",
    "Os desafios de hoje podem se tornar a força de amanhã.",
    "Não tenha medo de começar de novo.",
    "Seu esforço de hoje constrói o resultado de amanhã.",
    "A disciplina transforma sonhos em realidade.",
    "Não compare sua caminhada com a de ninguém.",
    "Seja melhor do que você foi ontem.",
    "Acredite no processo e continue trabalhando.",
    "Grandes conquistas começam com uma pequena decisão.",
    "Você não precisa ter tudo resolvido para dar o primeiro passo.",
    "Persistir também é uma forma de coragem.",
    "O caminho pode ser difícil, mas você pode ser mais forte.",
    "Não desista apenas porque ainda não chegou onde deseja.",
    "Cada dificuldade traz uma oportunidade de crescer.",
    "Tenha coragem para fazer aquilo que você acredita.",
    "O medo não precisa desaparecer para você seguir em frente.",
    "Você não precisa ser perfeito, precisa continuar.",
    "Um passo de cada vez ainda é progresso.",
    "A mudança começa quando você decide agir.",
    "Seus sonhos merecem esforço.",
    "Não deixe um dia difícil definir toda a sua jornada.",
    "Tudo começa com uma tentativa.",
    "O que parece impossível hoje pode ser realidade amanhã.",
    "Confie na sua capacidade de superar desafios.",
    "A constância vence a falta de motivação.",
    "Quando faltar vontade, deixe a disciplina continuar.",
    "Você cresce cada vez que escolhe não desistir.",
    "O sucesso é construído nos dias em que ninguém está olhando.",
    "Não procure atalhos quando pode construir um caminho sólido.",
    "Faça o melhor que puder com aquilo que tem hoje.",
    "Seu futuro agradece pelas escolhas que você faz agora.",
    "Não permita que uma falha seja o fim da sua história.",
    "Errar faz parte de aprender.",
    "Recomeçar não significa voltar ao início; significa continuar com mais experiência.",
    "Acredite que ainda há muito para conquistar.",
    "Você pode começar pequeno e terminar grande.",
    "Não subestime o poder de um dia bem aproveitado.",
    "Foco no que você pode controlar.",
    "Não gaste energia tentando controlar aquilo que está fora do seu alcance.",
    "Escolha continuar, mesmo quando for difícil.",
    "A coragem cresce toda vez que você enfrenta seus medos.",
    "Seu potencial aumenta quando você decide explorá-lo.",
    "Não deixe a dúvida decidir o seu futuro.",
    "Sonhe alto, mas comece pelo próximo passo.",
    "O esforço de hoje pode ser a conquista que você procura amanhã.",
    "Faça acontecer em vez de esperar acontecer.",
    "Você não precisa de permissão para acreditar em si mesmo.",
    "A persistência transforma obstáculos em aprendizado.",
    "Toda jornada começa com uma decisão.",
    "Não tenha pressa; tenha direção.",
    "Quem continua aprendendo continua crescendo.",
    "Sua atitude pode mudar completamente o seu dia.",
    "Comece com o que você sabe e aprenda o restante no caminho.",
    "A vida muda quando suas escolhas mudam.",
    "Não permita que o passado limite o seu futuro.",
    "Você sempre pode escolher tentar mais uma vez.",
    "A esperança é uma razão para continuar.",
    "Mesmo nos dias difíceis, ainda existe um próximo passo.",
    "Não confunda uma pausa com desistência.",
    "Descansar também faz parte da jornada.",
    "Cuide do seu presente enquanto constrói o seu futuro.",
    "A gratidão transforma a maneira como enxergamos o caminho.",
    "Valorize o progresso que muitas vezes passa despercebido.",
    "Você já superou dias que achou que não conseguiria superar.",
    "Lembre-se de tudo o que já conquistou.",
    "Não deixe pequenas derrotas apagarem grandes vitórias.",
    "O seu ritmo não precisa ser igual ao de ninguém.",
    "Continue mesmo quando os resultados demorarem.",
    "A paciência também é parte do sucesso.",
    "Grandes mudanças são construídas por pequenas escolhas.",
    "Faça hoje algo pelo qual seu futuro eu será grato.",
    "Escolha coragem em vez de desculpas.",
    "Transforme seus planos em ações.",
    "Um sonho sem ação continua sendo apenas um sonho.",
    "A melhor hora para começar é quando você decide começar.",
    "Não espere motivação para agir; muitas vezes, a ação traz a motivação.",
    "Sua determinação pode ser maior que qualquer obstáculo.",
    "Aprenda com ontem, viva o hoje e prepare-se para amanhã.",
    "Não tenha medo de crescer além daquilo que você conhece.",
    "Você não precisa enxergar todo o caminho para dar o primeiro passo.",
    "Acredite no processo, mesmo quando os resultados ainda não apareceram.",
    "Não permita que o fracasso seja maior que a sua vontade de vencer.",
    "Cada tentativa aumenta sua experiência.",
    "A força que você procura pode estar na decisão de continuar.",
    "Seja paciente com seu crescimento.",
    "Não desista de algo importante apenas porque está difícil.",
    "O esforço silencioso também produz grandes resultados.",
    "Seu futuro é construído pelas decisões que você toma hoje.",
    "Levante, respire fundo e tente novamente.",
    "Você pode não estar onde gostaria, mas já está mais longe do que estava.",
    "Continue acreditando, trabalhando e aprendendo.",
    "O próximo capítulo da sua história ainda pode ser extraordinário.",
  ];

  const fraseDoDia = () => {
    const hoje = new Date();

    const diaDoAno = Math.floor(
      (hoje.getTime() - new Date(hoje.getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24),
    );

    return frases[diaDoAno % frases.length];
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 m-8">
      <Card className="w-100" variant="default">
        <CardHeader>Frase do dia</CardHeader>
        <CardDescription>{fraseDoDia()}</CardDescription>
      </Card>
    </div>
  );
}
