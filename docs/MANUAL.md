# Manual Operacional — Controle de Entregas v4.0.2
## Sistema de Logística Local para Autopeças · Nova Friburgo-RJ

Este manual orienta a equipe operacional (conferentes, expedidores, entregadores e operadores de caixa) na utilização prática do sistema.

---

## 📋 Sumário
1. [Perfil do Conferente / Expedição](#1-perfil-do-conferente--expedição)
2. [Perfil do Motoboy / Entregador](#2-perfil-do-motoboy--entregador)
3. [Gestão de Retornos de Mercadoria](#3-gestão-de-retornos-de-mercadoria)
4. [Cancelamento de Entregas](#4-cancelamento-de-entregas)
5. [Fechamento de Caixa & Acerto](#5-fechamento-de-caixa--acerto)
6. [Backup e Recuperação de Dados](#6-backup-e-recuperação-de-dados)
7. [Atalhos e Dicas de Produtividade](#7-atalhos-e-dicas-de-produtividade)

---

## 1. Perfil do Conferente / Expedição

O conferente é responsável pelo lançamento dos pedidos separados no balcão e pelo despacho das mercadorias aos motoboys.

### 1.1 Lançamento de Nova Entrega
1. No painel principal (**Painel Expedição**), clique no botão azul **Nova Entrega** ou pressione a tecla `n` no teclado.
2. Preencha os campos obrigatórios:
   * **Nº do Pedido**: Identificador do pedido gerado no balcão de vendas.
   * **Cliente**: Nome da oficina, mecânica ou pessoa física destinatária.
   * **Telefone**: Telefone celular com DDD (utilizado pelo motoboy para contato via WhatsApp).
   * **Endereço**: Rua, número e ponto de referência.
   * **Bairro**: Selecione o bairro na lista suspensa. O sistema calcula automaticamente a taxa de entrega baseada na tabela da cidade.
   * **Forma de Pagamento**:
     * Se selecionar **Dinheiro**: informe o valor total e, caso o cliente precise de troco, informe o valor no campo *Troco para*. O sistema calcula o troco a devolver imediatamente.
     * Se selecionar **Pix, Cartão de Débito, Cartão de Crédito ou Faturado**: o campo de troco é desabilitado e zerado automaticamente.
3. Clique em **Salvar Entrega**. O pedido entrará na coluna **Em Preparo** do Kanban.

### 1.2 Despacho para o Motoboy
1. Quando a mercadoria estiver embalada e com a nota/cupom, clique no botão **Pronto** no cartão. O pedido avança para a coluna **Pronto para Saída**.
2. Na lista suspensa do cartão, selecione o nome do motoboy que fará o transporte.
3. Clique em **Despachar**. O pedido passa para a coluna **Em Rota**, e o cronômetro de espera em rua é iniciado automaticamente.

---

## 2. Perfil do Motoboy / Entregador

A tela do entregador foi desenhada especificamente para smartphones, com botões grandes e de toque direto.

### 2.1 Acessando a Rota do Dia
1. No topo da tela, clique na aba **Minhas Entregas**.
2. No campo **Selecione seu nome**, escolha o seu nome cadastrado.
3. O sistema exibirá apenas as entregas atribuídas a você que estão com status **Em Rota**.

### 2.2 Utilizando as Ações Rápidas de 1 Toque
Cada cartão de entrega possui 4 botões diretos:
* **Waze**: Abre imediatamente o aplicativo Waze com as coordenadas ou endereço da entrega pronto para navegação.
* **Google Maps**: Inicia a rota detalhada ponto a ponto no Google Maps.
* **WhatsApp**: Abre conversa no WhatsApp com o cliente, contendo mensagem pré-formatada informando que a mercadoria está a caminho, o número do pedido e o valor a pagar com troco (se houver).
* **Concluir Entrega**: Pressione após entregar as peças e receber o pagamento. A entrega será movida para a etapa de conferência e acerto.

---

## 3. Gestão de Retornos de Mercadoria

Se o motoboy não encontrar o cliente, a oficina estiver fechada ou o endereço não for localizado:

1. No cartão da entrega em rota, clique no botão **Retornou**.
2. Na janela de confirmação, selecione o motivo do retorno:
   * `Destinatário ausente`
   * `Endereço não localizado`
   * `Mercadoria recusada / divergente`
   * `Problema no pagamento`
   * `Outro` (com descrição complementar)
3. Confirme o retorno. O cartão será movido para a coluna destacada **Retornos Pendentes**.
4. A expedição poderá optar por:
   * **Redespachar**: Caso o cliente faça novo contato, atribui-se um novo motoboy e reenvia-se a peça.
   * **Cancelar**: Caso o pedido tenha sido desistido, cancela-se formalmente para estorno no estoque.

---

## 4. Cancelamento de Entregas

Se um pedido precisar ser cancelado antes ou durante o trajeto:
1. No cartão do pedido, clique no botão **Cancelar**.
2. Registre obrigatoriamente a justificativa do cancelamento.
3. O sistema preserva o histórico de eventos da entrega, cancela cobranças de taxas associadas e arquiva o registro.

---

## 5. Fechamento de Caixa & Acerto

Ao término do turno ou do expediente, o operador do caixa realiza a prestação de contas com cada motoboy.

### 5.1 Conferência dos Valores
1. Acesse a aba **Acerto**.
2. Selecione a data desejada (padrão: data atual).
3. O sistema agrupa todos os pedidos finalizados pelo nome de cada motoboy e exibe:
   * **Entregas Concluídas**: Total de saídas entregues com sucesso.
   * **Dinheiro em Mãos**: Total de pagamentos em dinheiro recolhidos de clientes.
   * **Troco Fornecido pela Loja**: Dinheiro que saiu do caixa da loja para troco na partida.
   * **Taxas de Entrega Devidas**: Total acumulado das taxas de corrida a pagar ao entregador.
   * **Saldo Líquido**:
     * `MOTOBOY DEVOLVE: R$ XX,XX` (quando o valor recebido na rua supera as taxas do entregador);
     * `LOJA PAGA: R$ XX,XX` (quando a maioria das corridas foi em cartão/Pix e a loja deve pagar as taxas ao entregador);
     * `ACERTO ZERADO` (quando os créditos e débitos empatam exatamente).

### 5.2 Quitação e Comprovante
1. Clique em **Imprimir Acerto** para gerar o comprovante individual em papel da prestação de contas do motoboy.
2. Após conferir o dinheiro físico, clique no botão **Quitar Acerto**. O sistema conclui o lote e encerra as pendências financeiras do dia.

---

## 6. Backup e Recuperação de Dados

Como a aplicação funciona com banco de dados local no computador/celular da loja, a rotina de segurança é essencial:

### 6.1 Fazendo Backup Diário (Recomendado ao final do dia)
1. Na aba **Acerto**, role até a seção **Manutenção & Dados**.
2. Clique no botão **Exportar Backup (JSON)**.
3. O navegador fará o download de um arquivo com o formato:  
   `backup-logistica-friburgo-AAAA-MM-DD.json`.
4. Salve este arquivo em um pendrive ou em uma pasta de nuvem segura (ex: Google Drive, OneDrive).

### 6.2 Restaurando um Backup
1. Em caso de troca de computador ou reinstalação do navegador:
2. Acesse a aplicação, vá até **Manutenção & Dados** e clique em **Restaurar Backup**.
3. Selecione o arquivo `.json` gerado anteriormente.
4. O sistema validará a integridade do arquivo e restaurará todos os cadastros de motoboys, histórico de entregas e configurações sem duplicar dados existentes.

---

## 7. Atalhos e Dicas de Produtividade

* `n`: Abre o formulário de cadastro de Nova Entrega a partir de qualquer tela.
* `Esc`: Fecha qualquer janela modal aberta sem aplicar alterações.
* **Alternador de Tema**: O ícone no canto superior direito alterna entre o tema Claro e o tema Escuro, reduzindo o cansaço visual em ambientes de expedição com iluminação reduzida.
* **Instalação PWA**: Clique no botão **Instalar App** ou no ícone da barra do navegador para fixar o sistema como aplicativo de desktop ou aplicativo móvel na tela inicial.
