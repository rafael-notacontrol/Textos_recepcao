import coffeeIcon from "../../assets/cafe3.png";

export default function Header() {
  const hoje = new Date();

  const diaSemana = hoje.toLocaleDateString("pt-BR", {
    weekday: "long",
  });

  const data = hoje.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <header className="mx-auto mt-6 flex w-[95%] max-w-7xl items-center justify-between rounded-3xl bg-sky-900 px-8 py-6 shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Lado esquerdo */}
      <div className="flex items-center gap-5">
        <img
          src={coffeeIcon}
          alt="Ícone de café"
          className="h-16 w-16 object-contain"
        />

        <div className="hidden sm:block">
          <h1 className="text-2xl font-semibold text-zinc-200">Hora do Café</h1>

          <p className="text-sm text-zinc-300">Seu momento de inspiração.</p>
        </div>
      </div>

      {/* Lado direito */}
      <div className="border-l border-zinc-200 pl-6 text-right">
        <h2 className="text-2xl font-semibold capitalize text-zinc-200 md:text-3xl">
          {diaSemana}
        </h2>

        <p className="mt-1 text-base text-zinc-300 md:text-lg">{data}</p>
      </div>
    </header>
  );
}
