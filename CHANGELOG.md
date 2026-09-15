# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [4.0.2] - 2026-09-15

### Added
- **PWA de Produção**: Configuração de `manifest.webmanifest` com display `standalone` e ícones homologados de 192px e 512px.
- **Service Worker Offline-First**: Implementação de `sw.js` com estratégia cache-first para ativos locais e fallback offline para navegação.
- **Painel Kanban com 5 Colunas**: Fluxo operacional com colunas `Em Preparo`, `Pronto para Saída`, `Em Rota`, `Retornos Pendentes` e `Concluído / Acerto`.
- **Visão Motoboy Mobile-First**: Interface dedicada para smartphones com ações de 1 toque para Waze, Google Maps e WhatsApp pré-formatado.
- **Fechamento de Caixa & Acerto**: Módulo financeiro por entregador apurando dinheiro em mãos, trocos fornecidos e taxas devidas.
- **Backup & Restauração JSON**: Exportação e importação estruturada de todo o banco de dados IndexedDB.
- **Semáforo Logístico**: Monitoramento de tempo decorrido com cálculo de tolerância estendida para distritos remotos (>50 min) vs. perímetro urbano (>35 min).
- **Dark Mode**: Alternância e persistência de tema claro e escuro.
- **CSS Paged Media**: Formatação de impressão física limpa para relatórios gerais e comprovantes de acerto individual.

### Fixed
- **Integridade Financeira em Centavos**: Eliminação de imprecisões de ponto flutuante IEEE 754 através de armazenamento de moeda em centavos inteiros.
- **Proteção Contra Troco Fantasma**: Bloqueio e limpeza imediata de troco em pagamentos via Pix, Débito, Crédito e Faturado.
- **Migração v1→v2 Idempotente**: Preservação de dados legados em `_legacyData` e conversão automática de float para centavos.
- **State Machine Determinística**: Formalização das 8 transições válidas com bloqueio de saltos de status ilegais.
- **Tratamento de Concorrência**: Serialização de operações de mutação no IndexedDB via `AsyncMutex`.
- **Prevenção contra XSS**: Escape contextual de strings de usuários em todas as renderizações de template.
- **Otimização de Eventos**: Adoção de Event Delegation nos containers para evitar vazamento de memória.
- **Compatibilidade GitHub Pages**: Ajuste de entrypoint para `index.html` e padronização de caminhos relativos.
