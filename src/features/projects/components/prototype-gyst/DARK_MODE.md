# Dark Mode no Dashboard Gyst

✅ **Dark mode independente - só afeta o dashboard do Gyst!**

## Como funciona

### 1. Context próprio do Gyst
O dashboard tem seu **próprio tema independente** do resto do site.

Arquivo: `gyst-theme-context.tsx`

```tsx
"use client";
import { useGystTheme } from "./gyst-theme-context";

export function MeuComponenteGyst() {
  const { theme, toggleTheme, isDark } = useGystTheme();
  
  return (
    <div className={isDark ? "bg-dark" : "bg-light"}>
      Tema do Gyst: {theme}
    </div>
  );
}
```

### 2. Provider envolve todo o dashboard
No `gyst-dashboard.tsx`:

```tsx
<GystThemeProvider>
  <GystDashboardInner />
</GystThemeProvider>
```

### 3. Toggle muda apenas o tema do Gyst
O componente `Toggle` usa `useGystTheme()` ao invés de `useTheme()` do next-themes.

```tsx
const { isDark, toggleTheme } = useGystTheme();

<button onClick={toggleTheme}>
  {/* Muda só o Gyst, não o site! */}
</button>
```

## Componentes atualizados

✅ **gyst-theme-context.tsx** - Context com estado do tema  
✅ **Toggle** - Usa `useGystTheme()` (não `useTheme()`)  
✅ **GystDashboard** - Wrapper com Provider e tema aplicado  
✅ **GystNavbar** - Cor fixa do navbar  
✅ **DashboardContent** - Herda cor do pai  

## API do useGystTheme()

```tsx
const { 
  theme,        // "light" | "dark"
  toggleTheme,  // () => void
  isDark        // boolean
} = useGystTheme();
```

## Diferença do tema global

| Tema | Escopo | Hook |
|------|---------|------|
| **Site** | Todo o portfolio | `useTheme()` from next-themes |
| **Gyst** | Só o dashboard | `useGystTheme()` from context |

## Exemplo completo

```tsx
"use client";

import { useGystTheme } from "./gyst-theme-context";

export function MeuCard() {
  const { isDark } = useGystTheme();
  
  return (
    <div className={`p-4 rounded ${
      isDark 
        ? "bg-gray-800 text-white" 
        : "bg-white text-gray-900"
    }`}>
      Conteúdo do card
    </div>
  );
}
```

## Importante!

- ✅ Toggle do Gyst **NÃO** afeta o resto do site
- ✅ Cada dashboard pode ter seu próprio tema
- ✅ O tema do Gyst **NÃO** persiste (reinicia em "light" ao recarregar)
- ✅ Use `useGystTheme()` dentro do Gyst, **não** `useTheme()`

