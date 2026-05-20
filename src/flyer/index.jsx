import React from 'react'
import { FileText, PenTool, Layout, Send, Image, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function FlyerPage() {
  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-start w-full py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
            <FileText size={16} className="text-[#de0303]" />
            <span className="text-sm font-medium tracking-wide uppercase text-[#de0303]">Materiais Gráficos</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Comunicação visual que<br className="hidden md:block" /> destaca sua marca.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Criamos flyers, banners e artes digitais com design profissional e estratégico. Feitos sob medida para atrair a atenção do seu público, seja no digital ou no impresso.
          </p>
        </div>

        {/* Como funciona / Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 md:gap-8 px-4 sm:px-6 md:px-8 mb-12 md:mb-20 items-center">
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Como funciona a criação?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <MessageSquare size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Briefing e Ideação</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Entendemos o objetivo da sua campanha, a mensagem principal e o público-alvo para direcionar a arte.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Layout size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Design e Diagramação</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Aplicamos sua identidade visual criando um layout atrativo, limpo e focado na leitura da informação.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Send size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Aprovação e Entrega</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Você avalia a arte e, após aprovada, entregamos nos formatos corretos para impressão ou redes sociais.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <FileText size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Flyers Digitais</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Artes otimizadas para WhatsApp, Stories e disparos em listas de transmissão.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Image size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Materiais Impressos</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Panfletos, cartões de visita e banners com as especificações exatas para a gráfica.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <PenTool size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Identidade Visual</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Respeitamos as cores e fontes da sua marca para gerar reconhecimento imediato.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Layout size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Alta Qualidade</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Arquivos entregues em alta resolução para garantir a melhor legibilidade e acabamento.</p>
            </div>
          </div>
        </div>

        {/* Card de CTA */}
        <div className="px-4 sm:px-6 md:px-8 w-full">
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300">
            <div className="mb-6">
              <h3 className="text-lg font-bold tracking-wider mb-2 text-[#de0303]">
                CRIAÇÃO DE FLYERS
              </h3>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-900">R$ 600,00</span>
                <span className="text-gray-500 text-sm font-medium">/ mês</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                Artes avulsas ou pacote mensal. Fale com a gente e solicite a sua.
              </p>
            </div>

            <div className="flex-1 space-y-4 mb-8 w-full max-w-md mx-auto flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Até 4 artes semanais</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Formatos para web</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Design profissional</span>
              </div>
            </div>

            <div className="mt-auto w-full max-w-md mx-auto">
              <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-gray-200 text-center">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Objetivo</p>
                <p className="text-sm text-gray-800">Garantir que a comunicação visual da sua empresa seja atrativa.</p>
              </div>
              
              <div className="flex justify-center">
                <a
                  href="https://wa.me/5565996933336?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20pacote%20de%20Cria%C3%A7%C3%A3o%20de%20Flyers%20por%20R%24%20600%2C00%2Fm%C3%AAs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-6 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 bg-[#de0303] hover:bg-[#b80202] text-white"
                >
                  Quero este plano
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
