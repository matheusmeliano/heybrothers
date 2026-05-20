import React from 'react'
import { Camera, Image as ImageIcon, MapPin, Users, Package, Settings, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function FotografiaPage() {
  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-start w-full py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
            <Camera size={16} className="text-[#de0303]" />
            <span className="text-sm font-medium tracking-wide uppercase text-[#de0303]">Fotografia Profissional</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Imagens que valorizam<br className="hidden md:block" /> o seu negócio.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Fotografia comercial de alta qualidade para produtos, ambientes e equipe. Transmita profissionalismo e gere mais confiança para a sua marca através de imagens bem produzidas.
          </p>
        </div>

        {/* Como funciona / Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 md:gap-8 px-4 sm:px-6 md:px-8 mb-12 md:mb-20 items-center">
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Como funciona a sessão?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Settings size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Alinhamento Prévio</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Definimos juntos o objetivo das fotos, referências de estilo, cenário e o que precisa ser destacado.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Camera size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Captação no Local</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Levamos equipamento profissional de iluminação e câmera para realizar a sessão fotográfica no seu ambiente.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <ImageIcon size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Edição e Tratamento</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Todas as fotos passam por tratamento de cor, contraste e ajustes finos para garantir um resultado impecável.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Package size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fotos de Produtos</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Imagens detalhadas e atrativas para cardápios, catálogos e lojas virtuais (e-commerce).</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <MapPin size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fotos de Ambientes</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Valorize a estrutura da sua clínica, escritório, loja ou restaurante com ângulos que ampliam o espaço.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Users size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Retratos Corporativos</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Fotos profissionais da sua equipe e diretoria para usar no site, LinkedIn e materiais de apresentação.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <ImageIcon size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Alta Resolução</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Arquivos entregues em máxima qualidade, prontos para uso em mídias impressas ou digitais.</p>
            </div>
          </div>
        </div>

        {/* Card de CTA */}
        <div className="px-4 sm:px-6 md:px-8 w-full">
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300">
            <div className="mb-6">
              <h3 className="text-lg font-bold tracking-wider mb-2 text-[#de0303]">
                SESSÃO DE FOTOS
              </h3>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-900">Sob Análise</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                Pacotes de fotos variam de acordo com a quantidade e tempo de sessão.
              </p>
            </div>

            <div className="flex-1 space-y-4 mb-8 w-full max-w-md mx-auto flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Captação no local do cliente</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Tratamento profissional</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Entrega via link em nuvem</span>
              </div>
            </div>

            <div className="mt-auto w-full max-w-md mx-auto">
              <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-gray-200 text-center">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Objetivo</p>
                <p className="text-sm text-gray-800">Elevar a percepção de valor da sua marca com imagens profissionais.</p>
              </div>
              
              <div className="flex justify-center">
                <a
                  href="https://wa.me/5565996933336?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20uma%20Sess%C3%A3o%20de%20Fotos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-6 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 bg-[#de0303] hover:bg-[#b80202] text-white"
                >
                  Solicitar Orçamento
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
