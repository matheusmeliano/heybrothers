import React from 'react'
import { Monitor, Search, Layout, Settings, Zap, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function WebDesignerPage() {
  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-start w-full py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
            <Monitor size={16} className="text-[#de0303]" />
            <span className="text-sm font-medium tracking-wide uppercase text-[#de0303]">Sistemas de Gestão</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Sistemas sob medida para<br className="hidden md:block" /> automatizar sua operação.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Criamos soluções que centralizam informações, reduzem retrabalho e deixam seus processos mais rápidos e organizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 md:gap-8 px-4 sm:px-6 md:px-8 mb-12 md:mb-20 items-center">
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Como funciona o projeto?</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Search size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Diagnóstico</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Entendemos seus processos, gargalos e objetivos para definir escopo, prioridades e o que precisa ser automatizado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Layout size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Estrutura e Fluxos</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Montamos o fluxo de telas e a lógica do sistema para garantir simplicidade de uso e consistência na operação.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <Settings size={18} className="text-[#de0303]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Implementação</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Desenvolvemos o sistema, integrações e automações necessárias, com validações para garantir estabilidade e segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Zap size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Automação</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Reduza tarefas manuais com fluxos simples e integrações.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <BarChart3 size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Controle</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Tenha dados centralizados e visão clara do que está acontecendo.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Settings size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sob Medida</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Funcionalidades alinhadas ao seu processo e rotina.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                <Monitor size={20} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Interface Simples</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Design limpo e fácil de usar, pensado para o time.</p>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 md:px-8 w-full">
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300">
            <div className="mb-6">
              <h3 className="text-lg font-bold tracking-wider mb-2 text-[#de0303]">SISTEMAS</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-3xl font-bold text-gray-900">Sob Análise</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                Projeto sob medida: definimos escopo e investimento após o diagnóstico.
              </p>
            </div>

            <div className="flex-1 space-y-4 mb-8 w-full max-w-md mx-auto flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Levantamento de requisitos</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Integrações e automações</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#de0303]" />
                <span>Painel e relatórios</span>
              </div>
            </div>

            <div className="mt-auto w-full max-w-md mx-auto">
              <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-gray-200 text-center">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Objetivo</p>
                <p className="text-sm text-gray-800">Automatizar processos e ganhar eficiência com dados centralizados.</p>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://wa.me/5565996933336?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Sistemas.%20Poderia%20me%20passar%20os%20valores%3F"
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
