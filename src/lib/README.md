# Cores do Gyst Dashboard

Super simples! Só 2 arquivos importantes.

## 📁 Arquivos

### `colors.ts` - Paleta de cores
Todas as cores do projeto em um lugar só.

```typescript
import { COLORS } from "@/lib/colors";

COLORS.green         // "#A9D615" - Verde principal
COLORS.navbarBg      // "#25252E" - Fundo do navbar
COLORS.toggleGray    // "#484851" - Cinza do toggle
COLORS.toggleButton  // "#E5E5E6" - Botão do toggle
COLORS.white         // "#FFFFFF" - Branco
```

### `gyst-constants.ts` - Tamanhos e valores
Medidas fixas dos componentes.

```typescript
import { NAVBAR } from "@/lib/gyst-constants";

NAVBAR.toggleWidth    // "52px"
NAVBAR.toggleHeight   // "25px"
NAVBAR.buttonSize     // "22px"
NAVBAR.iconSize       // "16px"
NAVBAR.minClickArea   // "44px"
```

## 🎨 Como usar

### Direto no código:
```tsx
<div style={{ 
  background: COLORS.green,
  width: NAVBAR.toggleWidth 
}} />
```

### Com light/dark mode:
```tsx
import { getColor } from "@/lib/colors";

const isDark = true;
const cores = getColor(isDark);
// cores.background
// cores.text  
// cores.accent
```

## ✅ Isso é tudo!

Não tem mistério. Importa e usa.
