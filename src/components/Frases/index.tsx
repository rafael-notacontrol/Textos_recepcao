import { Card, CardDescription, CardHeader } from "@heroui/react";
import { CoffeeIcon } from "@phosphor-icons/react";

export default function FraseDoDia() {
  const frases = [
  "O Senhor é meu pastor, nada me faltará. Salmo 23:1",
  "Tudo posso naquele que me fortalece. Filipenses 4:13",
  "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus. Isaías 41:10",
  "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará. Salmo 37:5",
  "Espera no Senhor, anima-te, e ele fortalecerá o teu coração. Salmo 27:14",
  "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia. Salmo 46:1",
  "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós. 1 Pedro 5:7",
  "Os que esperam no Senhor renovarão as suas forças. Isaías 40:31",
  "O choro pode durar uma noite, mas a alegria vem pela manhã. Salmo 30:5",
  "O Senhor está perto dos que têm o coração quebrantado. Salmo 34:18",
  "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Provérbios 3:5",
  "Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas. Provérbios 3:6",
  "O Senhor pelejará por vós, e vós vos calareis. Êxodo 14:14",
  "Se Deus é por nós, quem será contra nós? Romanos 8:31",
  "Porque para Deus nada será impossível. Lucas 1:37",
  "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. 2 Coríntios 12:9",
  "O Senhor sustenta a todos os que caem e levanta a todos os abatidos. Salmo 145:14",
  "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo. Salmo 23:4",
  "O Senhor é bom, uma fortaleza no dia da angústia; e conhece os que confiam nele. Naum 1:7",
  "Sede fortes e corajosos; não temais, nem vos atemorizeis. Deuteronômio 31:6",
  "Não vos inquieteis, pois, pelo dia de amanhã. Mateus 6:34",
  "Buscai primeiro o Reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas. Mateus 6:33",
  "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará. Salmo 91:1",
  "Ele te cobrirá com as suas penas, e debaixo das suas asas estarás seguro. Salmo 91:4",
  "O Senhor é a minha luz e a minha salvação; a quem temerei? Salmo 27:1",
  "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração. Romanos 12:12",
  "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus. Romanos 8:28",
  "As misericórdias do Senhor são a causa de não sermos consumidos; porque as suas misericórdias não têm fim. Lamentações 3:22",
  "Novas são cada manhã; grande é a tua fidelidade. Lamentações 3:23",
  "Bom é ter esperança e aguardar em silêncio a salvação do Senhor. Lamentações 3:26",
  "O Senhor firma os passos de um homem bom e deleita-se no seu caminho. Salmo 37:23",
  "Quando passares pelas águas, estarei contigo. Isaías 43:2",
  "Não temas, porque eu te remi; chamei-te pelo teu nome, tu és meu. Isaías 43:1",
  "Eu bem sei os pensamentos que penso de vós, pensamentos de paz e não de mal. Jeremias 29:11",
  "Clama a mim, e responder-te-ei e anunciar-te-ei coisas grandes e firmes. Jeremias 33:3",
  "Perto está o Senhor de todos os que o invocam. Salmo 145:18",
  "A minha carne e o meu coração desfalecem; mas Deus é a fortaleza do meu coração. Salmo 73:26",
  "O Senhor dará força ao seu povo; o Senhor abençoará o seu povo com paz. Salmo 29:11",
  "O Senhor é a minha força e o meu escudo; nele confiou o meu coração. Salmo 28:7",
  "O Senhor é a minha luz e a minha salvação; a quem temerei? Salmo 27:1",
  "Não te deixarei, nem te desampararei. Hebreus 13:5",
  "Jesus Cristo é o mesmo ontem, e hoje, e eternamente. Hebreus 13:8",
  "A paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos pensamentos. Filipenses 4:7",
  "Não andeis ansiosos por coisa alguma; antes, em tudo, sejam conhecidas diante de Deus as vossas petições. Filipenses 4:6",
  "Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos. Filipenses 4:4",
  "O meu Deus suprirá todas as vossas necessidades segundo as suas riquezas em glória, por Cristo Jesus. Filipenses 4:19",
  "Aquele que começou boa obra em vós há de completá-la até ao Dia de Cristo Jesus. Filipenses 1:6",
  "Tudo tem o seu tempo determinado, e há tempo para todo propósito debaixo do céu. Eclesiastes 3:1",
  "Há esperança para o teu futuro, diz o Senhor. Jeremias 31:17",
  "Bendito o homem que confia no Senhor, e cuja esperança é o Senhor. Jeremias 17:7",
  "O Senhor é a minha força, e o meu cântico; ele se tornou a minha salvação. Êxodo 15:2",
  "O Senhor é quem vai adiante de ti; ele será contigo, não te deixará, nem te desamparará. Deuteronômio 31:8",
  "Sê forte e corajoso; não temas, nem te espantes, porque o Senhor teu Deus é contigo por onde quer que andares. Josué 1:9",
  "Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele. Salmo 118:24",
  "O Senhor é a minha força e o meu escudo; o meu coração nele confia, e fui socorrido. Salmo 28:7",
  "O Senhor é bom para os que esperam por ele, para a alma que o busca. Lamentações 3:25",
  "Aquietai-vos e sabei que eu sou Deus. Salmo 46:10",
  "Descansa no Senhor e espera nele com paciência. Salmo 37:7",
  "Entrega as tuas obras ao Senhor, e os teus pensamentos serão estabelecidos. Provérbios 16:3",
  "O coração do homem pode fazer planos, mas a resposta certa vem do Senhor. Provérbios 16:1",
  "O nome do Senhor é uma torre forte; o justo corre para ela e está seguro. Provérbios 18:10",
  "O temor do Senhor conduz à vida; aquele que o tem ficará satisfeito. Provérbios 19:23",
  "Melhor é o fim das coisas do que o princípio delas; melhor é o paciente de espírito do que o altivo de espírito. Eclesiastes 7:8",
  "Não te deixes vencer do mal, mas vence o mal com o bem. Romanos 12:21",
  "A esperança não traz confusão, porque o amor de Deus está derramado em nossos corações. Romanos 5:5",
  "E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido. Gálatas 6:9",
  "Tudo o que fizerdes, fazei-o de todo o coração, como ao Senhor. Colossenses 3:23",
  "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito. Colossenses 3:14",
  "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele. Romanos 15:13",
  "O Deus de toda graça, que vos chamou à sua eterna glória em Cristo Jesus, depois de haverdes sofrido por um pouco, ele mesmo vos aperfeiçoará, confirmará, fortificará e fortalecerá. 1 Pedro 5:10",
  "Humilhai-vos, pois, debaixo da poderosa mão de Deus, para que ele, em tempo oportuno, vos exalte. 1 Pedro 5:6",
  "Chegai-vos a Deus, e ele se chegará a vós. Tiago 4:8",
  "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente. Tiago 1:5",
  "Bem-aventurado o homem que suporta a provação; porque, depois de aprovado, receberá a coroa da vida. Tiago 1:12",
  "Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai das luzes. Tiago 1:17",
  "O Senhor é misericordioso e compassivo, longânimo e rico em amor. Salmo 145:8",
  "Porque o Senhor é bom; a sua misericórdia dura para sempre. Salmo 100:5",
  "Provai e vede que o Senhor é bom; bem-aventurado o homem que nele se refugia. Salmo 34:8",
  "Busquei o Senhor, e ele me respondeu; livrou-me de todos os meus temores. Salmo 34:4",
  "O anjo do Senhor acampa-se ao redor dos que o temem e os livra. Salmo 34:7",
  "Muitas são as aflições do justo, mas o Senhor o livra de todas. Salmo 34:19",
  "O Senhor é a minha rocha, a minha fortaleza e o meu libertador. Salmo 18:2",
  "Invoca-me no dia da angústia; eu te livrarei, e tu me glorificarás. Salmo 50:15",
  "Lança o teu fardo sobre o Senhor, e ele te susterá. Salmo 55:22",
  "Somente em Deus espera silenciosa a minha alma; dele vem a minha salvação. Salmo 62:1",
  "Em Deus tenho posto a minha confiança; não temerei o que me possa fazer o homem. Salmo 56:11",
  "Quando eu estiver com medo, confiarei em ti. Salmo 56:3",
  "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia. Salmo 46:1",
  "O Senhor dará graça e glória; nenhum bem sonega aos que andam retamente. Salmo 84:11",
  "Aquele que te guarda não dormitará. Salmo 121:3",
  "O Senhor te guardará de todo mal; guardará a tua alma. Salmo 121:7",
  "O meu socorro vem do Senhor, que fez o céu e a terra. Salmo 121:2",
  "O Senhor aperfeiçoará o que me concerne; a tua misericórdia, Senhor, dura para sempre. Salmo 138:8",
  "Sonda-me, ó Deus, e conhece o meu coração; prova-me e conhece os meus pensamentos. Salmo 139:23",
  "Grandes coisas fez o Senhor por nós, e por isso estamos alegres. Salmo 126:3",
  "Os que semeiam com lágrimas segarão com alegria. Salmo 126:5",
  "Aqueles que confiam no Senhor são como o monte Sião, que não se abala, mas permanece para sempre. Salmo 125:1",
  "O Senhor é a minha porção; portanto, esperarei nele. Lamentações 3:24",
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
