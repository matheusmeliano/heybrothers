import React from 'react'
import { Video, Camera, Play, Edit3, ArrowRight, CheckCircle2, Film } from 'lucide-react'

export default function VideoPage() {
  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-start w-full py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
            <Video size={16} className="text-[#de0303]" />
            <span className="text-sm font-medium tracking-wide uppercase text-[#de0303]">Produção Audiovisual</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Transformamos sua ideia em<br className="hidden md:block" /> um vídeo que converte.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Do roteiro à edição final, criamos vídeos profissionais para redes sociais, campanhas de tráfego pago e vídeos institucionais que geram impacto e retêm a atenção.
          </p>
        </div>

        {/* Como funciona / Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 md:gap-8 px-4 sm:px-6 md:px-8 mb-12 md:mb-20 items-center">
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Como funciona a nossa produção?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Edit3 size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Roteiro e Planejamento</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Criamos roteiros estratégicos focados em prender a atenção nos primeiros segundos e transmitir sua mensagem com clareza.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Camera size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Captação Profissional</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Filmagem com equipamentos de alta qualidade, iluminação adequada e direção de cena para um resultado impecável.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Play size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Edição Dinâmica</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Cortes precisos, legendas animadas, trilha sonora envolvente e efeitos que prendem a atenção do espectador até o fim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Film size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Vídeos Institucionais</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Apresente sua empresa, estrutura e valores de forma profissional para clientes e parceiros.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Video size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Reels e Story</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Vídeos curtos e dinâmicos (formato vertical) ideais para viralizar e engajar nas redes sociais.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Play size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Vídeos de Vendas</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Material persuasivo focado em conversão para campanhas de tráfego pago e landing pages.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Edit3 size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Edição de Material</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Você grava e nós editamos. Transformamos seus vídeos brutos em conteúdos prontos para postar.</p>
            </div>
          </div>
        </div>

        {/* Card de CTA */}
        <div className="px-4 sm:px-6 md:px-8 w-full">
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300">
            <div className="mb-6">
              <h3 className="text-lg font-bold tracking-wider mb-2 text-[#de0303]">
                PRODUÇÃO DE VÍDEO
              </h3>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-900">R$ 800,00</span>
                <span className="text-gray-500 text-sm font-medium">/ mês</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                Invista em materiais audiovisuais que prendem a atenção e convertem mais.
              </p>
            </div>

            <div className="flex-1 space-y-4 mb-8 w-full max-w-md mx-auto flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Até 2 vídeos semanais</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Captação em alta resolução</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Edição com legendas/efeitos</span>
              </div>
            </div>

            <div className="mt-auto w-full max-w-md mx-auto">
              <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-gray-200 text-center">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Objetivo</p>
                <p className="text-sm text-gray-800">Materiais audiovisuais que geram autoridade e prendam a atenção.</p>
              </div>
              
              <div className="flex justify-center">
                <a
                  href="https://wa.me/5565996933336?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20pacote%20de%20Produ%C3%A7%C3%A3o%20de%20V%C3%ADdeo%20por%20R%24%20800%2C00%2Fm%C3%AAs."
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
