import React from 'react'
import { Link } from 'react-router-dom'

export default function PoliticaPrivacidadePage() {
  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-center w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Transparência sobre como coletamos, utilizamos e protegemos seus dados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-8 md:gap-x-8">
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Marketing Digital com Responsabilidade</h2>
              <div className="h-px bg-gray-200 mb-3"></div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Utilizamos estratégias de marketing digital para aumentar visibilidade, gerar leads qualificados e impulsionar vendas. Isso inclui campanhas em plataformas como Google Ads e Meta Ads, otimização de funil e acompanhamento de métricas como CAC, LTV e ROAS.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                Priorizamos experiências relevantes e mensuração precisa. Para isso, podemos usar cookies, identificadores anônimos e pixels de rastreamento que permitem analisar desempenho de campanhas e melhorar a comunicação.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                Respeitamos escolhas de privacidade e oferecemos mecanismos para controle de preferências. Você pode a qualquer momento solicitar revisão, correção ou exclusão dos seus dados.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Boas Práticas</h2>
              <div className="h-px bg-gray-200 mb-3"></div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Mensuração baseada em dados reais e objetivos.</li>
                <li>Segmentação responsável e comunicação adequada ao público.</li>
                <li>Proteção de informações sensíveis e acesso restrito.</li>
                <li>Revisões periódicas das campanhas e otimizações contínuas.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Como tratamos seus dados</h2>
              <div className="h-px bg-gray-200 mb-3"></div>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Coleta: dados fornecidos por você e dados gerados pelo uso de nossos canais, como nome, e-mail, telefone, preferências e interações.
                </p>
                <p>
                  Uso: comunicação, atendimento, execução de campanhas e melhoria de produtos e serviços.
                </p>
                <p>
                  Base legal: consentimento, execução de contratos e legítimo interesse, quando aplicável.
                </p>
                <p>
                  Compartilhamento: com parceiros estritamente necessários para operação de marketing e tecnologia, sempre sob acordos de proteção de dados.
                </p>
                <p>
                  Cookies e pixels: utilizados para análise, personalização e mensuração de campanhas. Você pode desativá-los nas configurações do seu navegador.
                </p>
                <p>
                  Retenção: mantemos dados pelo período necessário ao propósito declarado e conforme requisitos legais.
                </p>
                <p>
                  Direitos: acesso, correção, portabilidade, oposição e exclusão. Para exercer, entre em contato pelos nossos canais de atendimento.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/termos-e-condicoes"
                  className="inline-flex items-center gap-3 bg-[#de0303] hover:bg-[#b80202] text-white rounded-full pl-6 pr-4 py-2 transition-all"
                >
                  <span className="text-xs font-bold tracking-widest uppercase">Termos & Condições</span>
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Contato</h2>
              <div className="h-px bg-gray-200 mb-3"></div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Para dúvidas sobre esta Política de Privacidade ou solicitações relacionadas aos seus dados, utilize a seção de Atendimento disponível no site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
