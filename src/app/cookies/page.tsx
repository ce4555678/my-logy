import Link from "next/link"

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-gray-900 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-medium text-blue-700">Políticas My Logy</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Política de Cookies</h1>
          <p className="text-sm text-gray-500">Última atualização: 5 de abril de 2026</p>
          <p className="text-gray-600">
            Esta política descreve como usamos cookies e tecnologias similares para melhorar sua experiência.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. O que são cookies</h2>
          <p className="text-gray-700">
            Cookies são pequenos arquivos armazenados no seu navegador para lembrar preferências e analisar uso da
            plataforma.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Tipos de cookies usados</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>Essenciais: garantem funcionamento básico do site.</li>
            <li>Desempenho: ajudam a entender como o site está sendo usado.</li>
            <li>Funcionais: lembram preferências para melhorar sua experiência.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Como gerenciar cookies</h2>
          <p className="text-gray-700">
            Você pode configurar seu navegador para bloquear ou remover cookies, mas isso pode impactar algumas
            funcionalidades do serviço.
          </p>
        </section>

        <footer className="border-t border-gray-200 pt-6 text-sm text-gray-600">
          Para detalhes adicionais, entre em contato com nosso suporte.
        </footer>

        <Link href="/" className="inline-block text-sm font-medium text-blue-700 hover:text-blue-800">
          ← Voltar para a página inicial
        </Link>
      </article>
    </main>
  )
}
