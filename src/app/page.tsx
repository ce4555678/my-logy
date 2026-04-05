import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Brain,
  Check,
  Clock3,
  MessageSquare,
  Mic,
  Network,
  Search,
  Shield,
  Sparkles,
} from "lucide-react"

const HERO = {
  pretitle: "Feito para cérebros acelerados",
  title: "Transforme pensamentos soltos",
  subtitle: "em plano de ação",
  description:
    "O diário por voz no WhatsApp que organiza suas ideias automaticamente, cria conexões entre elas e te lembra do que realmente importa.",
  socialProof: "+2.000 capturas por semana por pessoas com rotina corrida",
}

const BENEFITS = [
  "Capture uma ideia em até 5 segundos",
  "Revise decisões sem precisar procurar em chats antigos",
  "Receba lembretes úteis no momento certo",
]

const METHODS = [
  {
    icon: Mic,
    title: "1. Fale no WhatsApp",
    description: "Mandou áudio ou texto? O My Logy salva instantaneamente sem interromper seu fluxo.",
  },
  {
    icon: Search,
    title: "2. A IA organiza tudo",
    description: "Cada nota vira um item pesquisável com contexto, tags e resumo automático.",
  },
  {
    icon: Network,
    title: "3. Reencontre e execute",
    description: "Descubra conexões entre ideias e transforme pensamentos em próximas ações.",
  },
]

const PLANS = [
  {
    name: "Plano Essencial",
    price: "R$ 9,90",
    period: "/mês",
    popular: true,
    highlight: "Melhor custo-benefício",
    description: "Para quem quer capturar rápido e manter a rotina em ordem.",
    cta: "Começar no Essencial",
    features: [
      "Captura por voz e texto no WhatsApp",
      "Busca inteligente por tema e contexto",
      "Resumo automático das ideias",
      "Lembretes semanais",
    ],
  },
  {
    name: "Goodnotes IA",
    price: "R$ 59,90",
    period: "/ano",
    popular: false,
    highlight: "Bom para estudo visual",
    description: "Melhor para quem prefere escrever manualmente em páginas estruturadas.",
    cta: "Escolher Goodnotes IA",
    features: [
      "Anotações com suporte de IA",
      "Resumos e revisão de conteúdo",
      "Busca por palavras-chave",
      "Sem captura por WhatsApp",
    ],
  },
  {
    name: "Planner Digital",
    price: "R$ 50,00",
    period: "pagamento único",
    popular: false,
    highlight: "Organização manual",
    description: "Para quem quer apenas um template estático sem recursos inteligentes.",
    cta: "Usar Planner",
    features: [
      "Estrutura visual pronta",
      "Checklists e calendário manual",
      "Sem IA",
      "Sem lembretes automáticos",
    ],
  },
]

const COMPARISON = [
  {
    label: "Captura por voz no WhatsApp",
    myLogy: true,
    goodnotes: false,
    planner: false,
  },
  {
    label: "Busca por significado (não só palavra)",
    myLogy: true,
    goodnotes: true,
    planner: false,
  },
  {
    label: "Conexões automáticas entre ideias",
    myLogy: true,
    goodnotes: false,
    planner: false,
  },
  {
    label: "Setup em menos de 3 minutos",
    myLogy: true,
    goodnotes: false,
    planner: true,
  },
]

function ComparisonValue({ value }: { value: boolean }) {
  if (value) {
    return <Check className="mx-auto h-4 w-4 text-emerald-600" />
  }

  return <span className="block text-center text-gray-300">—</span>
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">My Logy</span>
          </div>

          <nav className="hidden items-center gap-8 sm:flex">
            <a href="#features" className="text-sm text-gray-600 transition hover:text-gray-900">
              Como Funciona
            </a>
            <a href="#pricing" className="text-sm text-gray-600 transition hover:text-gray-900">
              Planos
            </a>
            <a href="#comparison" className="text-sm text-gray-600 transition hover:text-gray-900">
              Comparar
            </a>
          </nav>

          <Button className="h-9 bg-blue-600 px-4 text-sm text-white hover:bg-blue-700">Testar grátis</Button>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-20 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-56 max-w-3xl rounded-full bg-blue-100 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              {HERO.pretitle}
            </span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {HERO.title}
            <span className="block text-blue-600">{HERO.subtitle}</span>
          </h1>

          <p className="mx-auto mb-5 max-w-3xl text-lg leading-relaxed text-gray-600">{HERO.description}</p>
          <p className="mb-10 text-sm font-medium text-blue-700">{HERO.socialProof}</p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Começar agora — 7 dias grátis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              Sem cartão de crédito • Cancele quando quiser
            </div>
          </div>

          <div className="mx-auto mb-14 grid max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div key={benefit} className="rounded-xl border border-gray-200 bg-white/90 p-3 text-sm text-gray-700 shadow-xs">
                {benefit}
              </div>
            ))}
          </div>

          <div className="relative mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100 p-8 shadow-xl">
            <div className="mb-5 flex items-center justify-between border-b border-gray-200 pb-3 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" />
                Captura em tempo real
              </span>
              <span>WhatsApp + IA</span>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex justify-end">
                <div className="max-w-xs rounded-2xl rounded-tr-sm bg-blue-600 px-4 py-2 text-sm text-white">
                  Lembrar de validar a ideia de assinatura para consultoria.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-xs rounded-2xl rounded-tl-sm bg-gray-200 px-4 py-2 text-sm text-gray-900">
                  <div className="mb-1 flex items-center gap-2">
                    <MessageSquare className="h-3 w-3" />
                    <span className="text-xs font-semibold">My Logy</span>
                  </div>
                  Encontrei 3 notas parecidas sobre esse tema. Quer ver os próximos passos sugeridos?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-xs rounded-2xl rounded-tr-sm bg-blue-600 px-4 py-2 text-sm text-white">
                  Sim, me manda um plano de execução para amanhã.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-gray-50 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Como funciona na prática</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Um fluxo simples para você registrar mais, esquecer menos e agir com clareza.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {METHODS.map((method) => {
              const Icon = method.icon

              return (
                <Card key={method.title} className="h-full border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-gray-600">{method.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Planos fáceis de entender</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Compare rapidamente e escolha o nível de suporte que você precisa hoje.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                  plan.popular ? "border-blue-600 bg-blue-50 shadow-lg" : "border-gray-200 bg-white hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      <Check className="h-3 w-3" />
                      Mais escolhido
                    </span>
                  </div>
                )}

                <p className="mb-2 text-xs font-semibold tracking-wide text-blue-700 uppercase">{plan.highlight}</p>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mb-5 text-sm text-gray-600">{plan.description}</p>

                <div className="mb-6 border-y border-gray-200 py-5">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="pb-1 text-sm text-gray-500">{plan.period}</span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3 text-sm text-gray-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={`mt-auto w-full ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="bg-gray-50 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Comparativo rápido</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Veja por que o My Logy tende a converter melhor para quem quer velocidade com inteligência.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Recurso</th>
                  <th className="px-4 py-3 text-center font-semibold">My Logy</th>
                  <th className="px-4 py-3 text-center font-semibold">Goodnotes IA</th>
                  <th className="px-4 py-3 text-center font-semibold">Planner</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label} className="border-t border-gray-100">
                    <td className="px-4 py-3 text-gray-700">{row.label}</td>
                    <td className="px-4 py-3">
                      <ComparisonValue value={row.myLogy} />
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonValue value={row.goodnotes} />
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonValue value={row.planner} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Sua próxima ideia não pode se perder.</h2>
          <p className="mb-8 text-lg opacity-90">
            Ative seu teste grátis agora e veja sua rotina ficar mais clara já nos primeiros dias.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
            Ativar teste gratuito
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-gray-900 px-4 py-12 text-gray-400 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-white">My Logy</span>
              </div>
              <p className="text-sm text-gray-500">Organização mental com IA, no ritmo da sua rotina.</p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm hover:text-white">Como funciona</a></li>
                <li><a href="#pricing" className="text-sm hover:text-white">Planos</a></li>
                <li><a href="#comparison" className="text-sm hover:text-white">Comparativo</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Sobre</a></li>
                <li><a href="#" className="text-sm hover:text-white">Depoimentos</a></li>
                <li><a href="#" className="text-sm hover:text-white">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Privacidade</a></li>
                <li><a href="#" className="text-sm hover:text-white">Termos</a></li>
                <li><a href="#" className="text-sm hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-500">© 2026 My Logy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
