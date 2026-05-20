import React from 'react'
import { Megaphone, Target, BarChart3, Sliders, Search, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function TrafegoPagoPage() {
  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-start w-full py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
            <Megaphone size={16} className="text-[#de0303]" />
              <span className="text-sm font-medium tracking-wide uppercase text-[#de0303]">Gestão de Tráfego Pago</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Anúncios com estratégia para<br className="hidden md:block" /> vender com previsibilidade.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Gestão de campanhas no Google e Meta (Instagram/Facebook) para atrair clientes qualificados, reduzir desperdício e transformar investimento em resultado.
          </p>
          <div className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-yellow-400/60 text-black text-sm font-medium max-w-3xl mx-auto">
            Os investimentos nas campanhas são de responsabilidade do contratante e tratados separadamente.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 md:gap-8 px-4 sm:px-6 md:px-8 mb-12 md:mb-20 items-center">
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Como funciona a gestão?</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Target size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Estratégia e Estrutura</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Definimos objetivos, segmentação, oferta e páginas de destino para construir campanhas que fazem sentido para o seu negócio.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Search size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Criação e Testes</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Desenvolvemos variações de anúncios e criativos, testamos e validamos o que dá mais retorno, com otimizações contínuas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Sliders size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Otimização e Escala</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Ajustamos lances, público, orçamento e anúncios para reduzir custo por resultado e escalar com segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <BarChart3 size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Métricas Reais</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Acompanhamento de leads, vendas e custos para decidir com base em dados.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <TrendingUp size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Performance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Otimizações para diminuir desperdício e aumentar o retorno do investimento.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Target size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Clientes Certos</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Segmentação precisa para atrair quem já tem intenção de compra.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Megaphone size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Escala</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Aumente o investimento com controle e previsibilidade de resultado.</p>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 md:px-8 w-full">
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300">
            <div className="mb-6">
              <h3 className="text-lg font-bold tracking-wider mb-2 text-[#de0303]">TRÁFEGO PAGO</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-3xl font-bold text-gray-900">Sob Análise</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                Campanhas no Google e Meta: leads, vendas, visitas e mensagens.
              </p>
            </div>

            <div className="flex-1 space-y-4 mb-8 w-full max-w-md mx-auto flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Estruturação das campanhas</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Testes contínuos</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Relatórios mensais</span>
              </div>
            </div>

            <div className="mt-auto w-full max-w-md mx-auto">
              <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-gray-200 text-center">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Objetivo</p>
                <p className="text-sm text-gray-800">Atrair clientes qualificados e gerar vendas previsíveis.</p>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://wa.me/5565996933336?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Tr%C3%A1fego%20Pago.%20Poderia%20me%20passar%20os%20valores%3F"
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
