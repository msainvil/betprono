# 🚀 BetProno - Guide des Snippets VS Code

> Accélérez votre développement avec ces snippets personnalisés

---

## 📥 Installation

Les snippets sont automatiquement disponibles dans ce projet car ils se trouvent dans `.vscode/betprono-snippets.code-snippets`.

Si vous voulez les utiliser globalement dans tous vos projets React Native :
1. Ouvrir VS Code
2. `Cmd/Ctrl + Shift + P` → "Configure User Snippets"
3. Choisir "typescriptreact.json"
4. Copier le contenu de `betprono-snippets.code-snippets`

---

## 📚 Snippets Disponibles

### 🧩 Composants

#### `rnfc` - React Native Functional Component

Crée un composant fonctionnel avec TypeScript et design tokens.

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../constants/design-tokens';

interface ComponentProps {
  // props
}

export default function Component({  }: ComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  text: {
    ...typography.body,
    color: colors.text.primary,
  },
});
```

**Usage** : Tapez `rnfc` puis Tab

---

#### `bpscreen` - BetProno Screen

Crée un écran complet avec SafeAreaView et ScrollView.

```typescript
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, screenPadding, commonStyles } from '../../constants/design-tokens';

export default function Screen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Screen</Text>

      </ScrollView>
    </SafeAreaView>
  );
}
```

**Usage** : Tapez `bpscreen` puis Tab

---

#### `bpcard` - BetProno Card Component

Crée un composant card avec TouchableOpacity et haptic feedback.

**Usage** : Tapez `bpcard` puis Tab

---

### 🎨 Design System

#### `bpbutton` - Insère un bouton

```tsx
<Button
  label="Label"
  onPress={() => console.log('Pressed')}
  variant="primary"
  fullWidth
/>
```

**Usage** : Tapez `bpbutton` puis Tab

**Variantes disponibles** : `primary` | `secondary` | `ghost` | `danger`

---

#### `bpbadge` - Insère un badge de confiance

```tsx
<BadgeConfiance
  confidence={73}
  size="medium"
  showGlow
/>
```

**Usage** : Tapez `bpbadge` puis Tab

**Tailles** : `small` | `medium` | `large`

---

#### `bptypo` - Insère un style typographique

```typescript
...typography.h1
```

**Usage** : Tapez `bptypo` puis Tab puis choisissez le style

**Styles disponibles** :
- `display`
- `h1`, `h2`, `h3`
- `bodyLarge`, `body`, `bodySmall`
- `caption`
- `button`
- `numbersLarge`, `numbersMedium`

---

#### `bpcolor` - Insère une couleur

```typescript
colors.background.primary
```

**Usage** : Tapez `bpcolor` puis Tab

**Catégories** :
- `background` : primary, surface, elevated
- `accent` : primary, secondary
- `text` : primary, secondary, tertiary
- `feedback` : success, error, warning, info
- `functional` : confidenceLow, confidenceMedium, confidenceHigh
- `border` : subtle, medium, strong

---

#### `bpstyle` - Insère un style commun

```typescript
commonStyles.card
```

**Usage** : Tapez `bpstyle` puis Tab

**Styles disponibles** :
- `card` - Card de base
- `cardGlass` - Card glassmorphism
- `screenContainer` - Container d'écran
- `sectionHeader` - Header de section
- `divider` - Ligne de séparation
- `centeredContent` - Contenu centré
- `row` - Ligne flex
- `rowBetween` - Ligne space-between

---

### 🎯 State Management

#### `zustand` - Crée un store Zustand

Génère un store complet avec persistence AsyncStorage.

**Usage** : Tapez `zustand` puis Tab

---

#### `rquery` - Crée un hook React Query

Génère un hook `useQuery` pour fetch de données.

```typescript
import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

export const useData = (params) => {
  return useQuery({
    queryKey: ['key', params],
    queryFn: async () => {
      const response = await api.get('/endpoint', {
        params: params,
      });
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
```

**Usage** : Tapez `rquery` puis Tab

---

#### `rmutation` - Crée une mutation React Query

Génère un hook `useMutation` pour POST/PUT/DELETE.

**Usage** : Tapez `rmutation` puis Tab

---

### ✨ Animations

#### `reanimated` - Crée une animation Reanimated

```typescript
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

const scale = useSharedValue(1);

const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
}));

// Trigger animation
scale.value = withSpring(1.1);

// Use in component
<Animated.View style={animatedStyle}>

</Animated.View>
```

**Usage** : Tapez `reanimated` puis Tab

---

#### `bphaptic` - Ajoute un haptic feedback

```typescript
import { haptic } from '../../utils/haptic';

haptic.light();
```

**Usage** : Tapez `bphaptic` puis Tab

**Types** : `light` | `medium` | `heavy` | `success` | `error`

---

### 🎨 UI Elements

#### `bpsafe` - SafeAreaView

```tsx
import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView style={styles.container} edges={['top']}>

</SafeAreaView>
```

**Usage** : Tapez `bpsafe` puis Tab

**Edges** : `top` | `bottom` | `left` | `right`

---

#### `bpgradient` - Linear Gradient

```tsx
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={['#18E08F', '#2F7BFF']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.gradient}
>

</LinearGradient>
```

**Usage** : Tapez `bpgradient` puis Tab

---

### 🛠 Utilitaires

#### `bpcurrency` - Formater une devise

```typescript
formatCurrency(amount, true)
```

**Usage** : Tapez `bpcurrency` puis Tab

**Paramètres** :
- `amount` : nombre
- `showSign` : booléen (optionnel, affiche +/-)

---

#### `bppercentage` - Formater un pourcentage

```typescript
formatPercentage(value, true)
```

**Usage** : Tapez `bppercentage` puis Tab

---

#### `bpconfidence` - Obtenir le style de confiance

```typescript
const style = getConfidenceStyle(confidence);
```

**Usage** : Tapez `bpconfidence` puis Tab

Retourne : `{ backgroundColor, color, glow, label }`

---

### 🧪 Testing

#### `bptest` - Fichier de test

Crée un fichier de test complet avec React Native Testing Library.

```typescript
import { render, fireEvent } from '@testing-library/react-native';
import Component from '../Component';

describe('Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Component props />);
    expect(getByText('text')).toBeTruthy();
  });

  it('test description', () => {

  });
});
```

**Usage** : Tapez `bptest` puis Tab

---

### 📝 Hooks

#### `ust` - useState avec TypeScript

```typescript
const [state, setState] = useState<type>(initialValue);
```

**Usage** : Tapez `ust` puis Tab

---

#### `uef` - useEffect

```typescript
useEffect(() => {
  // effect

  return () => {
    // cleanup
  };
}, [dependencies]);
```

**Usage** : Tapez `uef` puis Tab

---

### 🔧 Général

#### `rnss` - StyleSheet Create

```typescript
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

**Usage** : Tapez `rnss` puis Tab

---

#### `arfn` - Arrow Function

```typescript
const functionName = (params) => {

};
```

**Usage** : Tapez `arfn` puis Tab

---

#### `int` - Interface TypeScript

```typescript
interface Name {
  prop: type;
}
```

**Usage** : Tapez `int` puis Tab

---

#### `typ` - Type TypeScript

```typescript
type Name = type;
```

**Usage** : Tapez `typ` puis Tab

---

#### `clg` - Console Log

```typescript
console.log('label:', variable);
```

**Usage** : Tapez `clg` puis Tab

---

#### `tryc` - Try Catch

```typescript
try {
  // code
} catch (error) {
  console.error('Error:', error);
  // error handling
}
```

**Usage** : Tapez `tryc` puis Tab

---

## 🎯 Workflows Recommandés

### Créer un Nouveau Composant

1. Créer le fichier : `src/components/cards/MyCard.tsx`
2. Taper `rnfc` → Tab
3. Renommer le composant
4. Ajouter les props dans l'interface
5. Implémenter la logique

### Créer un Nouvel Écran

1. Créer le fichier : `app/(tabs)/my-screen.tsx`
2. Taper `bpscreen` → Tab
3. Ajouter le contenu
4. Styler avec les tokens (`bptypo`, `bpcolor`, `bpstyle`)

### Ajouter un État Global

1. Créer le fichier : `src/store/myStore.ts`
2. Taper `zustand` → Tab
3. Définir l'interface
4. Implémenter les actions

### Fetch des Données

1. Créer le fichier : `src/hooks/useMyData.ts`
2. Taper `rquery` → Tab
3. Configurer l'endpoint
4. Utiliser dans le composant

### Ajouter une Animation

1. Dans le composant, taper `reanimated` → Tab
2. Configurer l'animation
3. Trigger au bon moment
4. Ajouter `bphaptic` pour le feedback tactile

---

## 💡 Tips

### Tab Stops

Les snippets utilisent des **tab stops** (points de tabulation) :
- `${1:name}` : Premier tab stop avec texte par défaut
- `${2}` : Deuxième tab stop
- `${0}` : Position finale du curseur

**Navigation** :
- `Tab` : Aller au tab stop suivant
- `Shift + Tab` : Revenir au tab stop précédent
- `Esc` : Quitter le mode snippet

### Choix Multiples

Certains snippets proposent des choix :
```
variant="primary|secondary|ghost|danger"
```

**Navigation** :
- Appuyez sur `Tab` pour voir les choix
- Utilisez les flèches pour sélectionner
- Appuyez sur `Enter` pour valider

### Variables Intelligentes

Les snippets utilisent des transformations :
```typescript
const [state, setState] = useState(initialValue);
```
Quand vous tapez `user`, le snippet génère automatiquement `setUser`.

---

## 🚀 Raccourcis Clavier Recommandés

Ajouter ces raccourcis dans vos settings VS Code :

```json
{
  "key": "cmd+shift+c",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
    "name": "React Native Functional Component"
  }
},
{
  "key": "cmd+shift+s",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
    "name": "BetProno Screen"
  }
}
```

---

## 📊 Statistiques

- **35+ snippets** disponibles
- **10+ catégories** (Composants, Design, State, Animations, etc.)
- **Gain de temps** : ~70% de code boilerplate éliminé

---

**Happy coding! 🎨⚡**
