import Link from "next/link"
import { ArrowRight, Bell, Brain, CheckCircle2, Mic, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TODAY_ACTIONS = [
  "Validar proposta de assinatura da consultoria",
  "Revisar insights capturados na semana",
  "Enviar follow-up para leads prioritários",
]

const RECENT_NOTES = [
  {
    title: "Ideia: assinatura consultoria",
    summary: "Modelo mensal com onboarding de 7 dias + acompanhamento quinzenal.",
    tag: "Negócio",
  },
  {
    title: "Rotina de foco",
    summary: "Blocos de 45 min com pausa de 10 min e revisão rápida no fim do dia.",
    tag: "Produtividade",
  },
  {
    title: "Perguntas para pesquisa com clientes",
    summary: "Top 5 dores sobre organização e falta de clareza nas prioridades.",
    tag: "Pesquisa",
  },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 text-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-blue-700">Bem-vindo de volta 👋</p>
            <h1 className="text-2xl font-bold sm:text-3xl">Sua dashboard de clareza</h1>
            <p className="mt-1 text-sm text-gray-600">Capture rápido, organize com IA e execute com foco.</p>
          </div>

          <div className="flex gap-3">
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
              <Link href="#nova-captura">
                Nova captura
                <Mic className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-gray-300">
              <Bell className="mr-1 h-4 w-4" />
              Lembretes
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Brain className="h-4 w-4 text-blue-600" />
                Capturas da semana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">24</p>
              <p className="text-sm text-gray-600">+18% vs. semana passada</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Search className="h-4 w-4 text-blue-600" />
                Notas conectadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-gray-600">3 novos clusters sugeridos pela IA</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Ações concluídas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">7</p>
              <p className="text-sm text-gray-600">Hoje você está em ritmo forte 🚀</p>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2" id="nova-captura">
            <CardHeader>
              <CardTitle>Próximas ações recomendadas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {TODAY_ACTIONS.map((action) => (
                <div key={action} className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <p className="text-sm text-gray-700">{action}</p>
                </div>
              ))}
              <Button className="mt-2 bg-blue-600 text-white hover:bg-blue-700">
                Ver plano completo
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resumo de hoje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-700">
              <p>• 6 capturas novas por voz</p>
              <p>• 2 lembretes disparados no horário ideal</p>
              <p>• 1 insight recorrente detectado pela IA</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Notas recentes</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {RECENT_NOTES.map((note) => (
                <article key={note.title} className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="mb-2 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                    {note.tag}
                  </p>
                  <h3 className="mb-2 font-semibold text-gray-900">{note.title}</h3>
                  <p className="text-sm text-gray-600">{note.summary}</p>
                </article>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
