# Sistema de Rastreamento de Conversões - CM² Construções

## Visão Geral

Este sistema implementa o rastreamento de conversões do Google Ads para a CM² Construções, permitindo monitorar ações importantes dos usuários no site.

## Configuração Implementada

### 1. Tag do Google Ads
- **ID da Conta**: `AW-17552993084`
- **ID do Evento de Conversão**: `i4tyCLmD7J8bELzW9bFB`
- **Localização**: `app/layout.tsx` (linhas 113-124)

### 2. Página de Conversão
- **URL**: `/conversao`
- **Arquivo**: `app/conversao/page.tsx`
- **Função**: Página de agradecimento que dispara automaticamente o evento de conversão

### 3. Sistema de Rastreamento
- **Arquivo**: `lib/conversion-tracking.ts`
- **Funções principais**:
  - `trackConversion()`: Dispara evento de conversão no Google Ads
  - `trackGTMEvent()`: Dispara evento no Google Tag Manager
  - `trackCompleteConversion()`: Combina ambos os rastreamentos

## Eventos Rastreados

### 1. Cliques no WhatsApp
- **Tipo**: `whatsapp_click`
- **Categoria**: `contact`
- **Localização**: Todos os botões de WhatsApp no site
- **Valor**: 1

### 2. Envio de Formulário
- **Tipo**: `form_submit`
- **Categoria**: `contact`
- **Localização**: Formulário de contato
- **Valor**: 1

### 3. Página de Conversão
- **Tipo**: `conversion`
- **Categoria**: `conversion`
- **Localização**: Página `/conversao`
- **Valor**: 1

## Como Usar

### Rastrear uma Conversão Simples
```typescript
import { trackConversion } from '@/lib/conversion-tracking'

// Disparar conversão básica
trackConversion()

// Disparar conversão com valor
trackConversion(100, 'BRL')
```

### Rastrear Evento no GTM
```typescript
import { trackGTMEvent } from '@/lib/conversion-tracking'

trackGTMEvent('button_click', 'contact', 'whatsapp_button', 1)
```

### Rastrear Conversão Completa
```typescript
import { trackCompleteConversion, CONVERSION_TYPES, EVENT_CATEGORIES } from '@/lib/conversion-tracking'

trackCompleteConversion(
  CONVERSION_TYPES.WHATSAPP_CLICK,
  EVENT_CATEGORIES.CONTACT,
  'header_button',
  1
)
```

## Verificação do Rastreamento

### 1. Google Tag Assistant
- Instale a extensão do Chrome
- Navegue pelo site e execute ações de conversão
- Verifique se os eventos aparecem corretamente

### 2. Google Ads
- Acesse a conta do Google Ads
- Vá em Ferramentas > Conversões
- Verifique se as conversões estão sendo registradas

### 3. Google Tag Manager
- Acesse o GTM
- Use o modo de visualização
- Execute ações no site e verifique os eventos

## Estrutura de Arquivos

```
app/
├── layout.tsx                 # Tag do Google Ads
├── page.tsx                   # Página principal com rastreamento
└── conversao/
    └── page.tsx              # Página de conversão

lib/
└── conversion-tracking.ts    # Utilitários de rastreamento
```

## Configurações Importantes

### Google Ads
- **ID da Conta**: AW-17552993084
- **ID do Evento**: i4tyCLmD7J8bELzW9bFB
- **Moeda**: BRL (Real Brasileiro)

### Google Tag Manager
- **ID do Container**: GTM-TJV4R8SF
- **DataLayer**: Configurado para receber eventos personalizados

## Monitoramento

### Métricas Importantes
1. **Taxa de Conversão**: Cliques em WhatsApp / Visualizações da página
2. **Conversões por Origem**: De onde vêm os usuários que convertem
3. **Valor por Conversão**: Valor médio das conversões

### Relatórios Recomendados
1. **Relatório de Conversões** no Google Ads
2. **Relatório de Eventos** no Google Analytics
3. **Relatório de Páginas** no Google Tag Manager

## Troubleshooting

### Eventos não aparecem
1. Verifique se a tag do Google Ads está carregada
2. Confirme se o ID da conta está correto
3. Verifique o console do navegador por erros

### Conversões duplicadas
1. Verifique se não há múltiplos disparos do mesmo evento
2. Confirme se a lógica de rastreamento está correta

### Performance
1. O rastreamento é assíncrono e não afeta a performance
2. Os eventos são enviados em background
3. Não há impacto na experiência do usuário

## Suporte

Para dúvidas ou problemas com o rastreamento, consulte:
- [Documentação do Google Ads](https://support.google.com/google-ads)
- [Documentação do Google Tag Manager](https://developers.google.com/tag-manager)
- [Google Tag Assistant](https://tagassistant.google.com/)
