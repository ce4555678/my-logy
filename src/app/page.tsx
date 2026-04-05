import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  Mic,
  Search,
  Network,
  MessageSquare,
  ArrowRight,
  Check,
} from "lucide-react"

const HERO = {
  pretitle: "Organização Inteligente",
  title: "Sua mente não tem botão de 'Pause'",
  subtitle: "mas agora tem um de 'Salvar'",
  description: "O único diário por voz que entende o caos do TDAH. Fale o que vier à cabeça via WhatsApp, e deixe nossa IA organizar, conectar e te lembrar do que importa.",
}

const METHODS = [
  {
    icon: Mic,
    title: "Capture em 5 segundos",
    description: "Fale, não digite. A ideia não foge.",
  },
  {
    icon: Search,
    title: "Busca por Contexto",
    description: 'Encontre ideias por significado: "O que eu decidi sobre aquela solução?"',
  },
  {
    icon: Network,
    title: "Conexões Automáticas",
    description: "A IA conecta pensamentos relacionados de forma inteligente.",
  },
]

export default function Home() {
  const plans = [
    {
      name: "My Logy Premium",
      price: "R$ 9,90",
      period: "/mês",
      popular: true,
      ideal: "Lembretes rápidos",
      description: "Perfeito para capturar ideias rapidamente",
      features: {
        ia: "Básica",
        capture: true,
        search: true,
        connections: false,
      },
    },
    {
      name: "Goodnotes IA",
      price: "R$ 59,90",
      period: "/ano",
      popular: false,
      ideal: "Estudo visual",
      description: "Para quem prefere anotações estruturadas",
      features: {
        ia: "Escrita/Resumo",
        capture: false,
        search: true,
        connections: false,
      },
    },
    {
      name: "Digital Planner",
      price: "R$ 50,00",
      period: "(Único)",
      popular: false,
      ideal: "Estrutura manual",
      description: "Sem IA, apenas organização manual",
      features: {
        ia: "Nenhuma",
        capture: false,
        search: false,
        connections: false,
      },
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">My Logy</span>
            </div>
            <nav className="hidden items-center gap-8 sm:flex">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Método
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Preços
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Contato
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm h-9 px-4">
              Começar Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-blue-700">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              {HERO.pretitle}
            </span>
          </div>

          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            {HERO.title}
            <span className="block text-blue-600">
              {HERO.subtitle}
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 leading-relaxed">
            {HERO.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Começar Agora - Grátis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-gray-500">Sem cartão de crédito. Cancele quando quiser.</p>
          </div>

          {/* WhatsApp Mockup */}
          <div className="relative mx-auto max-w-2xl rounded-2xl bg-linear-to-b from-gray-50 to-gray-100 p-8 shadow-lg">
            <div className="space-y-4 text-left">
              <div className="flex justify-end">
                <div className="max-w-xs rounded-2xl rounded-tr-sm bg-blue-600 text-white px-4 py-2 text-sm">
                  Preciso lembrar de validar aquela ideia de negócio que tive no chuveiro
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-xs rounded-2xl rounded-tl-sm bg-gray-200 text-gray-900 px-4 py-2 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="h-3 w-3" />
                    <span className="font-semibold text-xs">My Logy</span>
                  </div>
                  "Organização com voz" - encontrei essa ideia de 2 semanas atrás. Quer conectar?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-xs rounded-2xl rounded-tr-sm bg-blue-600 text-white px-4 py-2 text-sm">
                  Sim! Mostra mais
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Método Zero Atrito
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Três passos simples que funcionam com seu cérebro, não contra ele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {METHODS.map((method, index) => {
              const Icon = method.icon
              return (
                <div key={index} className="group">
                  <Card className="border border-gray-200 bg-white hover:shadow-md transition-all h-full">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-600 transition-colors">
                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Planos Simples e Transparentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o plano que melhor se adapta ao seu estilo de trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col rounded-lg border transition-all ${
                  plan.popular
                    ? "border-blue-600 shadow-lg md:scale-105 bg-blue-50"
                    : "border-gray-200 hover:shadow-md bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-semibold">
                      <Check className="h-3 w-3" /> Mais Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mb-6 text-sm text-gray-600">{plan.description}</p>

                  <div className="mb-6 border-b border-gray-200 pb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-500 italic">Ideal para: {plan.ideal}</p>
                  </div>

                  <div className="mb-8 space-y-3">
                    {plan.features.capture && (
                      <div className="flex items-center gap-3 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Captura por voz</span>
                      </div>
                    )}
                    {plan.features.search && (
                      <div className="flex items-center gap-3 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Busca inteligente</span>
                      </div>
                    )}
                    {plan.features.connections && (
                      <div className="flex items-center gap-3 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Conexões automáticas</span>
                      </div>
                    )}
                    <div className={`text-sm ${!plan.features.ia || plan.features.ia === "Nenhuma" ? "text-gray-400" : "text-gray-700"}`}>
                      {plan.features.ia && plan.features.ia !== "Nenhuma" ? (
                        <div className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-green-600" />
                          <span>IA: {plan.features.ia}</span>
                        </div>
                      ) : (
                        <span>IA: {plan.features.ia}</span>
                      )}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900"
                    }`}
                  >
                    Começar Agora
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:py-32 bg-blue-600 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl sm:text-4xl font-bold">
            Pronto para organizar seus pensamentos?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Comece com acesso grátis e veja a diferença que uma ferramenta inteligente faz.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
            Começar Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-900 text-gray-400 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-white">My Logy</span>
              </div>
              <p className="text-sm text-gray-500">
                Organize pensamentos com IA.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white text-sm">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Recursos</a></li>
                <li><a href="#" className="text-sm hover:text-white">Preços</a></li>
                <li><a href="#" className="text-sm hover:text-white">Segurança</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white text-sm">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Sobre</a></li>
                <li><a href="#" className="text-sm hover:text-white">Blog</a></li>
                <li><a href="#" className="text-sm hover:text-white">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white text-sm">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Privacidade</a></li>
                <li><a href="#" className="text-sm hover:text-white">Termos</a></li>
                <li><a href="#" className="text-sm hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-500">
              &copy; 2026 My Logy. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
