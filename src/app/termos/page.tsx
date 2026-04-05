import Link from "next/link"

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-gray-900 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-medium text-blue-700">Políticas My Logy</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Termos de Uso</h1>
          <p className="text-sm text-gray-500">Última atualização: 5 de abril de 2026</p>
          <p className="text-gray-600">
            Ao utilizar o My Logy, você concorda com os termos abaixo. Leia com atenção antes de usar a
            plataforma.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Uso da plataforma</h2>
          <p className="text-gray-700">
            O serviço é destinado a organização pessoal e produtividade. Você se compromete a usar a plataforma
            de forma legal e responsável.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Conta e acesso</h2>
          <p className="text-gray-700">
            Você é responsável por manter suas credenciais seguras e por toda atividade realizada em sua conta.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Propriedade intelectual</h2>
          <p className="text-gray-700">
            Todo o conteúdo da plataforma, exceto os dados enviados por você, é protegido por direitos de
            propriedade intelectual.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Limitação de responsabilidade</h2>
          <p className="text-gray-700">
            O My Logy é fornecido no estado em que se encontra e pode evoluir continuamente. Não garantimos
            disponibilidade ininterrupta.
          </p>
        </section>

        <footer className="border-t border-gray-200 pt-6 text-sm text-gray-600">
          Podemos atualizar estes termos periodicamente para refletir melhorias do produto e exigências legais.
        </footer>

        <Link href="/" className="inline-block text-sm font-medium text-blue-700 hover:text-blue-800">
          ← Voltar para a página inicial
        </Link>
      </article>
    </main>
  )
}
