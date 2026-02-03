export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-purple-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ryuta Ikejiri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
