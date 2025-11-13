export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <div className="bg-gray-600 px-6 py-2 rounded">
        <span className="font-semibold">Logo</span>
      </div>
      <nav>
        <span className="font-semibold">Menu</span>
      </nav>
    </header>
  );
}
