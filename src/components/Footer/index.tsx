export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center gap-2 py-8 text-sm text-gray-500">
        <p>&copy;{new Date().getFullYear()} Feito com ❤️ por Rafael Silva</p>
      </div>
    </footer>
  );
}
