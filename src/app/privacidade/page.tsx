import Link from "next/link"

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-gray-900 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-medium text-blue-700">Políticas My Logy</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Política de Privacidade</h1>
          <p className="text-sm text-gray-500">Última atualização: 5 de abril de 2026</p>
          <p className="text-gray-600">
            Esta política explica como coletamos, usamos e protegemos seus dados ao usar o My Logy.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Dados que coletamos</h2>
          <p className="text-gray-700">
            Podemos coletar informações de cadastro, conteúdo enviado (como notas e áudios), dados de uso da
            plataforma e informações técnicas para melhorar desempenho e segurança.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Como usamos seus dados</h2>
          <p className="text-gray-700">
            Usamos os dados para operar o serviço, gerar funcionalidades de IA, personalizar sua experiência,
            enviar comunicações essenciais e prevenir fraudes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Compartilhamento</h2>
          <p className="text-gray-700">
            Não vendemos seus dados pessoais. Podemos compartilhar apenas com provedores necessários para operação
            do serviço e quando exigido por lei.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Seus direitos</h2>
          <p className="text-gray-700">
            Você pode solicitar acesso, correção, portabilidade e exclusão dos seus dados conforme a legislação
            aplicável.
          </p>
        </section>

        <footer className="border-t border-gray-200 pt-6 text-sm text-gray-600">
          Dúvidas sobre privacidade? Fale com nosso time de suporte.
        </footer>

        <Link href="/" className="inline-block text-sm font-medium text-blue-700 hover:text-blue-800">
          ← Voltar para a página inicial
        </Link>
      </article>
    </main>
  )
}
