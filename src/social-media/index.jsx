import React from 'react'
import { Share2, PenTool, TrendingUp, Users, Calendar, Target, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function SocialMediaPage() {
  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-start w-full py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
            <Share2 size={16} className="text-[#de0303]" />
            <span className="text-sm font-medium tracking-wide uppercase text-[#de0303]">Gestão de Redes Sociais</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Sua marca não pode ser<br className="hidden md:block" /> apenas mais uma no feed.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transformamos seu Instagram e Facebook em canais reais de atração, relacionamento e vendas. Criamos conteúdo que conecta com o seu público e posiciona sua empresa como autoridade no mercado.
          </p>
        </div>

        {/* Como funciona / Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 md:gap-8 px-4 sm:px-6 md:px-8 mb-12 md:mb-20 items-center">
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Como funciona a nossa gestão?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Target size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Estratégia e Posicionamento</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Estudamos seu negócio e concorrentes para definir a melhor linha editorial e o tom de voz da sua marca.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <PenTool size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Criação de Conteúdo e Design</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Desenvolvemos artes profissionais, carrosséis e roteiros para vídeos que chamam a atenção e retêm o usuário.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Calendar size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Calendário e Publicações</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Organizamos os dias e horários das postagens para você não precisar se preocupar com o que postar amanhã.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Users size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Engajamento</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Aumento da interação real com seus seguidores e clientes potenciais.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <TrendingUp size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Autoridade</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Sua marca percebida como referência no seu segmento de atuação.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Share2 size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Alcance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Conteúdos otimizados para chegar a mais pessoas de forma orgânica.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <PenTool size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Identidade</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Design único e profissional que transmite confiança e credibilidade.</p>
            </div>
          </div>
        </div>

        {/* Card de Preço / CTA */}
        <div className="px-4 sm:px-6 md:px-8 w-full">
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300">
            <div className="mb-6">
              <h3 className="text-lg font-bold tracking-wider mb-2 text-[#de0303]">
                SOCIAL MEDIA
              </h3>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-900">R$ 400,00</span>
                <span className="text-gray-500 text-sm font-medium">/ mês</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                Foque no seu negócio e deixe a comunicação digital com a gente.
              </p>
            </div>

            <div className="flex-1 space-y-4 mb-8 w-full max-w-md mx-auto flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Planejamento de conteúdo</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Criação de artes exclusivas</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Agendamento de posts</span>
              </div>
            </div>

            <div className="mt-auto w-full max-w-md mx-auto">
              <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-gray-200 text-center">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Objetivo</p>
                <p className="text-sm text-gray-800">Manter a constância, qualidade e o engajamento das suas redes.</p>
              </div>
              
              <div className="flex justify-center">
                <a
                  href="https://wa.me/5565996933336?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20pacote%20de%20Social%20Media%20por%20R%24%20400%2C00%2Fm%C3%AAs."
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
