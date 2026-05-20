import React from 'react'
import { Link } from 'react-router-dom'

export default function TermosCondicoesPage() {
  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-center w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Termos & Condições
          </h1>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Regras e responsabilidades para uso dos serviços e plataformas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-8 md:gap-x-8">
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Como atuamos</h2>
              <div className="h-px bg-gray-200 mb-3"></div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Prestamos serviços de marketing digital com foco em crescimento previsível: campanhas em plataformas de tráfego pago, produção de conteúdo, otimização de funil e mensuração por métricas reais. Cada projeto tem escopo definido em proposta e pode ser ajustado conforme resultados.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                A comunicação é contínua e transparente. Relatórios e reuniões de performance são utilizados para orientar decisões e otimizações.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Responsabilidades do cliente</h2>
              <div className="h-px bg-gray-200 mb-3"></div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Fornecer informações corretas e materiais necessários em tempo hábil.</li>
                <li>Garantir acesso às contas de anúncios e plataformas contratadas.</li>
                <li>Cumprir políticas das plataformas (Google, Meta, etc.).</li>
                <li>Aprovar conteúdos e campanhas dentro de prazos acordados.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Termos do serviço</h2>
              <div className="h-px bg-gray-200 mb-3"></div>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Escopo: definido em proposta e contrato, incluindo entregas, prazos e indicadores.
                </p>
                <p>
                  Pagamentos: conforme condições comerciais acordadas; valores de mídia são pagos à parte diretamente às plataformas.
                </p>
                <p>
                  Propriedade: materiais produzidos pertencem ao cliente após quitação, exceto bibliotecas e modelos internos.
                </p>
                <p>
                  Limitações: resultados dependem de fatores externos (mercado, concorrência, sazonalidade). Não há garantias de faturamento específico.
                </p>
                <p>
                  Rescisão: possível conforme contrato, com aviso prévio e entrega do que estiver concluído.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/politica-de-privacidade"
                  className="inline-flex items-center gap-3 bg-[#de0303] hover:bg-[#b80202] text-white rounded-full pl-6 pr-4 py-2 transition-all"
                >
                  <span className="text-xs font-bold tracking-widest uppercase">Política de Privacidade</span>
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Suporte e contato</h2>
              <div className="h-px bg-gray-200 mb-3"></div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Para dúvidas sobre estes Termos ou pontos contratuais, utilize a seção de Atendimento disponível no site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
