export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50 text-slate-900">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">池尻 隆太 / Ryuta Ikejiri</h1>
        <p className="text-xl text-slate-600 mb-8">芝浦工業大学 電子情報システム専攻</p>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="leading-relaxed">
            エンジニアを目指している大学生です。
            現在は自動プログラム修正（APR）の研究に取り組んでおり、LLMやグラフ構造を用いた手法に興味があります。
          </p>
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl">
            <h3 className="font-bold text-blue-800">Skills</h3>
            <ul className="list-disc list-inside text-sm text-blue-700 mt-2">
              <li>Next.js / TypeScript</li>
              <li>Python / LLM Research</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 rounded-xl">
            <h3 className="font-bold text-purple-800">Interests</h3>
            <ul className="list-disc list-inside text-sm text-purple-700 mt-2">
              <li>K-Pop</li>
              <li>US Stock Investment</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}