import { Card, CardDescription, CardHeader } from "@heroui/react";
import { CoffeeIcon } from "@phosphor-icons/react";

export default function FraseDoDia() {
  const frases = [
  "Dias difíceis não duram para sempre. Continue, um dia de cada vez.",
  "Você não precisa ter todas as respostas hoje. Apenas continue.",
  "Mesmo quando tudo parece escuro, ainda existe um novo amanhecer esperando por você.",
  "Não desista de si mesmo por causa de uma fase difícil.",
  "Você já enfrentou dias que pareciam impossíveis e chegou até aqui.",
  "Está tudo bem não estar bem todos os dias.",
  "Às vezes, ser forte significa simplesmente encontrar forças para continuar.",
  "Tenha paciência com você. Algumas feridas precisam de tempo para cicatrizar.",
  "O que você está vivendo hoje não define toda a sua história.",
  "Um dia ruim não significa uma vida ruim.",
  "Permita-se descansar. Você não precisa ser forte o tempo todo.",
  "Ainda há coisas bonitas esperando para acontecer na sua vida.",
  "Não tenha vergonha de recomeçar. Recomeços também são sinais de coragem.",
  "Você não precisa caminhar rápido. Só não deixe de caminhar.",
  "Quando não souber o que fazer, cuide de si e dê apenas o próximo passo.",
  "Há momentos em que sobreviver ao dia já é uma grande vitória.",
  "Não se cobre tanto. Você está fazendo o melhor que consegue com o que tem.",
  "A tristeza pode visitar você, mas ela não precisa morar em você.",
  "Mesmo que hoje você não consiga enxergar uma saída, continue acreditando que ela existe.",
  "Você merece dias mais leves, e eles ainda podem chegar.",
  "Não permita que um momento doloroso faça você esquecer todos os momentos bons que já viveu.",
  "Tudo bem começar novamente, quantas vezes forem necessárias.",
  "O tempo não apaga tudo, mas pode ensinar o coração a carregar algumas coisas com mais leveza.",
  "Você não está atrasado. Cada pessoa tem seu próprio tempo.",
  "Às vezes, a vida pede uma pausa antes de mostrar um novo caminho.",
  "Não transforme uma derrota em uma sentença sobre quem você é.",
  "Você é muito mais do que aquilo que deu errado.",
  "Continue. Mesmo devagar, mesmo cansado, mesmo sem saber exatamente onde vai chegar.",
  "Alguns capítulos são difíceis, mas nenhum capítulo é o livro inteiro.",
  "A esperança pode ser pequena, mas ainda assim pode iluminar um caminho inteiro.",
  "Não desista no meio da história. Ainda existem páginas que você não leu.",
  "Você não precisa fingir que está tudo bem. Apenas não deixe de acreditar que pode ficar.",
  "Amanhã pode trazer aquilo que hoje você nem consegue imaginar.",
  "Há força em quem continua tentando, mesmo depois de se machucar.",
  "Não se culpe por precisar de tempo para se reconstruir.",
  "Você merece a mesma compreensão que oferece às pessoas que ama.",
  "Cuide do seu coração com carinho. Ele também se cansa.",
  "Nem todo silêncio significa vazio. Às vezes, é apenas o coração tentando encontrar paz.",
  "Não tenha medo de deixar para trás aquilo que já não faz bem.",
  "Algumas perdas abrem espaço para novos caminhos.",
  "Você pode sentir saudade e ainda assim seguir em frente.",
  "O passado pode fazer parte da sua história sem precisar controlar o seu futuro.",
  "Não carregue para amanhã o peso que você já não precisa carregar hoje.",
  "Respire fundo. Você não precisa resolver a vida inteira de uma vez.",
  "Quando tudo parecer demais, diminua o passo e cuide do que realmente importa.",
  "Você não precisa vencer todos os dias. Às vezes, basta não desistir.",
  "A vida pode surpreender você justamente quando tudo parece perdido.",
  "Continue acreditando em dias melhores, mesmo que hoje essa crença seja pequena.",
  "Seu valor não diminui nos momentos em que você se sente fraco.",
  "Não confunda cansaço com incapacidade. Talvez você só precise descansar.",
  "Você ainda pode encontrar motivos para sorrir depois de uma fase difícil.",
  "Toda tempestade passa. Algumas deixam marcas, mas também deixam aprendizado.",
  "Não tenha pressa para voltar a ser quem você era. Talvez você esteja se tornando alguém ainda melhor.",
  "Você não precisa carregar tudo sozinho. Permitir que alguém ajude também é coragem.",
  "Existem pessoas que se importam com você, mesmo quando a tristeza faz parecer o contrário.",
  "Falar sobre o que dói pode ser o primeiro passo para começar a aliviar o peso.",
  "Não esconda suas lágrimas. Chorar também pode ser uma forma de aliviar o coração.",
  "Você não precisa encontrar força para o resto da vida. Encontre força apenas para hoje.",
  "Quando a esperança faltar, segure-se nas pequenas coisas que ainda fazem sentido.",
  "Um pequeno motivo para continuar já é suficiente para dar o próximo passo.",
  "Não subestime a força que existe dentro de alguém que decidiu continuar.",
  "Você pode estar cansado da caminhada, mas isso não significa que precisa abandonar o destino.",
  "Algumas respostas chegam somente depois que aprendemos a esperar.",
  "Nem tudo precisa fazer sentido agora.",
  "Confie que a vida ainda pode escrever capítulos melhores.",
  "Você não perdeu a capacidade de ser feliz só porque está triste hoje.",
  "A felicidade pode voltar de maneiras que você ainda não consegue imaginar.",
  "Não deixe a dor convencer você de que não existem mais motivos para acreditar.",
  "O coração também precisa de tempo para entender aquilo que a mente já sabe.",
  "Se hoje foi difícil, amanhã você pode tentar novamente.",
  "Não existe vergonha em começar pequeno. Grandes mudanças também começam assim.",
  "Você não precisa provar sua força para ninguém.",
  "Escolha continuar cuidando de você, mesmo nos dias em que não houver vontade.",
  "A vida não exige que você tenha certeza de tudo. Às vezes, basta ter coragem para tentar.",
  "Mesmo quando você não percebe, cada dia superado está construindo uma história de resistência.",
  "Você já chegou até aqui. Não diminua a importância disso.",
  "Há beleza em continuar acreditando depois de conhecer a dor.",
  "Alguns dias pedem conquistas. Outros pedem apenas descanso. Ambos são importantes.",
  "Não se compare com quem parece estar vivendo uma vida perfeita. Você não conhece as batalhas de ninguém.",
  "Você não precisa esconder suas cicatrizes. Elas mostram que você sobreviveu.",
  "O que hoje parece o fim pode ser apenas o começo de uma nova fase.",
  "Não tenha medo de mudar de caminho quando perceber que aquele já não faz sentido.",
  "Você pode reconstruir sua vida, mesmo depois de perder aquilo que imaginava ser permanente.",
  "Não deixe que uma pessoa, uma perda ou um momento difícil faça você esquecer quem você é.",
  "Aos poucos, o coração encontra novos motivos para acreditar.",
  "Tenha fé no processo da vida, mesmo quando o caminho parecer confuso.",
  "Não precisa ser um dia extraordinário. Um dia tranquilo também pode ser uma bênção.",
  "Valorize as pequenas alegrias. Muitas vezes, elas são as que sustentam os dias difíceis.",
  "A gratidão não elimina os problemas, mas pode ajudar a enxergar que nem tudo está perdido.",
  "Você pode sentir medo e ainda assim seguir em frente.",
  "Coragem não é não sentir dor. É continuar mesmo sentindo.",
  "Não deixe o medo do amanhã roubar a paz que você pode encontrar hoje.",
  "O amanhã não precisa ser igual ao ontem.",
  "Dê ao futuro a oportunidade de surpreender você.",
  "Talvez você ainda não esteja onde gostaria, mas isso não significa que não esteja avançando.",
  "Algumas das melhores coisas da vida acontecem depois de períodos que pareciam não ter fim.",
  "Continue. Há uma versão mais tranquila de você esperando do outro lado dessa fase.",
  "Não desista da esperança só porque ela demorou para chegar.",
  "Você merece paz, descanso, amor e novos começos.",
  "Acredite: ainda existem dias que você vai agradecer por não ter desistido.",
  "Hoje pode ser difícil, mas ainda é apenas um dia.",
  "Levante quando puder, descanse quando precisar e continue quando encontrar forças.",
  "A sua história ainda está sendo escrita. Não desista do próximo capítulo.",
  "Enquanto houver um novo dia, existe uma nova possibilidade.",
  "Você não precisa saber como tudo vai terminar. Apenas continue escrevendo sua história.",
  "Um dia você olhará para trás e perceberá o quanto foi forte por ter continuado."
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
        <CardHeader className="flex flex-row items-center gap-2">
          Frase do dia <CoffeeIcon size={20} />
        </CardHeader>
        <CardDescription>{fraseDoDia()}</CardDescription>
      </Card>
    </div>
  );
}
