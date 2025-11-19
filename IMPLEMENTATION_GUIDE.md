# 🚀 BetProno - Guide d'Implémentation

> Du design au code : guide complet pour implémenter l'application React Native

---

## 📖 Table des matières

1. [Setup Initial](#setup-initial)
2. [Structure du Projet](#structure-du-projet)
3. [Installation des Dépendances](#installation-des-dépendances)
4. [Configuration des Fonts](#configuration-des-fonts)
5. [Setup Navigation](#setup-navigation)
6. [Implémentation des Composants](#implémentation-des-composants)
7. [Implémentation des Écrans](#implémentation-des-écrans)
8. [State Management](#state-management)
9. [API Integration](#api-integration)
10. [Animations & Polish](#animations--polish)
11. [Testing](#testing)
12. [Déploiement](#déploiement)

---

## Setup Initial

### 1. Créer le Projet Expo

```bash
# Créer un nouveau projet Expo avec TypeScript
npx create-expo-app betprono --template expo-template-blank-typescript

cd betprono
```

### 2. Vérifier que tout fonctionne

```bash
# Lancer le projet
npx expo start

# Scanner le QR code avec Expo Go (iOS/Android)
```

---

## Structure du Projet

Créer la structure de dossiers suivante :

```
betprono/
├── app/                        # App Router (Expo Router) OU screens/
│   ├── (auth)/
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── index.tsx          # HomeScreen
│   │   ├── bets.tsx           # MyBetsScreen
│   │   ├── leaderboard.tsx
│   │   └── profile.tsx
│   └── match/[id].tsx         # MatchDetailScreen
│
├── src/
│   ├── components/
│   │   ├── badges/
│   │   │   ├── BadgeConfiance.tsx
│   │   │   ├── BadgeStatus.tsx
│   │   │   └── Chip.tsx
│   │   ├── buttons/
│   │   │   ├── Button.tsx
│   │   │   ├── ButtonGroup.tsx
│   │   │   └── IssueSelector.tsx
│   │   ├── cards/
│   │   │   ├── CardMatch.tsx
│   │   │   ├── CardPronostic.tsx
│   │   │   ├── CardBet.tsx
│   │   │   └── CardStat.tsx
│   │   ├── inputs/
│   │   │   ├── Input.tsx
│   │   │   └── AmountInput.tsx
│   │   ├── navigation/
│   │   │   ├── DateSelector.tsx
│   │   │   └── TabFilter.tsx
│   │   ├── feedback/
│   │   │   ├── SkeletonCard.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   └── Toast.tsx
│   │   └── data/
│   │       ├── ProgressBar.tsx
│   │       ├── Sparkline.tsx
│   │       └── FormIndicator.tsx
│   │
│   ├── constants/
│   │   ├── design-tokens.ts   # Copier depuis la racine
│   │   └── types.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useMatches.ts
│   │   ├── useBets.ts
│   │   └── useHaptic.ts
│   │
│   ├── services/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── storage.ts
│   │
│   ├── store/                  # Si vous utilisez Zustand/Redux
│   │   ├── authStore.ts
│   │   ├── betsStore.ts
│   │   └── matchesStore.ts
│   │
│   └── utils/
│       ├── formatters.ts
│       ├── validators.ts
│       └── haptic.ts
│
├── assets/
│   ├── fonts/
│   │   ├── Poppins-Bold.ttf
│   │   ├── Poppins-SemiBold.ttf
│   │   ├── Poppins-Medium.ttf
│   │   ├── Inter-Regular.ttf
│   │   └── Inter-Medium.ttf
│   └── images/
│
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## Installation des Dépendances

### Dépendances Principales

```bash
# Navigation
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack

# OU si vous utilisez Expo Router (recommandé)
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

# Gestion d'état
npm install zustand                    # OU redux toolkit

# Formulaires
npm install react-hook-form zod @hookform/resolvers

# API
npm install axios @tanstack/react-query

# Animations
npm install react-native-reanimated
npm install react-native-gesture-handler

# Haptic Feedback
npx expo install expo-haptics

# Linear Gradient
npx expo install expo-linear-gradient

# Blur (pour glassmorphism)
npx expo install expo-blur

# Fonts
npx expo install expo-font

# AsyncStorage
npx expo install @react-native-async-storage/async-storage

# Icons
# Déjà inclus avec Expo : @expo/vector-icons

# Date handling
npm install date-fns

# Charts (pour Sparkline)
npm install react-native-svg
npm install react-native-chart-kit  # OU d3 si vous voulez du custom
```

### Dépendances de Dev

```bash
npm install --save-dev @types/react @types/react-native
npm install --save-dev eslint prettier
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

---

## Configuration des Fonts

### 1. Télécharger les Fonts

- **Poppins** : [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
  - Télécharger : Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Inter** : [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
  - Télécharger : Regular (400), Medium (500)

### 2. Placer les Fonts

Copier les fichiers `.ttf` dans `assets/fonts/`

### 3. Charger les Fonts

Créer `src/hooks/useFonts.ts` :

```typescript
import { useFonts as useExpoFonts } from 'expo-font';

export const useFonts = () => {
  const [fontsLoaded] = useExpoFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
  });

  return fontsLoaded;
};
```

### 4. Utiliser dans App.tsx

```typescript
import { useFonts } from './src/hooks/useFonts';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = useFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <RootNavigator />;
}
```

---

## Setup Navigation

### Option 1 : React Navigation (classique)

#### 1. Créer les Navigators

**`src/navigation/types.ts`** :

```typescript
export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AppTabsParamList = {
  Home: undefined;
  Bets: undefined;
  Leaderboard: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  MatchDetail: { matchId: string };
};
```

**`src/navigation/RootNavigator.tsx`** :

```typescript
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../store/authStore';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { isAuthenticated } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <Stack.Screen name="App" component={AppNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

**`src/navigation/AppNavigator.tsx`** (Bottom Tabs) :

```typescript
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, navigation, iconSizes } from '../constants/design-tokens';

import HomeStack from './HomeStack';
import BetsStack from './BetsStack';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...navigation.tabBar,
        },
        tabBarActiveTintColor: colors.accent.primary,
        tabBarInactiveTintColor: colors.text.tertiary,
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'Inter-Medium',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={iconSizes.lg}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bets"
        component={BetsStack}
        options={{
          tabBarLabel: 'Paris',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'ticket' : 'ticket-outline'}
              size={iconSizes.lg}
              color={color}
            />
          ),
          // Badge si items dans le ticket
          // tabBarBadge: ticketCount > 0 ? ticketCount : undefined,
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          tabBarLabel: 'Classement',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'trophy' : 'trophy-outline'}
              size={iconSizes.lg}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={iconSizes.lg}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
```

### Option 2 : Expo Router (recommandé pour nouveau projet)

Structure avec app directory (voir structure de dossiers ci-dessus).

---

## Implémentation des Composants

### Ordre Recommandé

#### Phase 1 : Composants de Base (Semaine 1)

1. **Button** ⭐ (le plus utilisé)
2. **Input**
3. **BadgeConfiance**
4. **BadgeStatus**
5. **Chip**

#### Phase 2 : Cards (Semaine 2)

6. **CardMatch** ⭐⭐⭐
7. **CardBet**
8. **CardStat**
9. **CardPronostic** (glassmorphism)

#### Phase 3 : Inputs & Sélecteurs (Semaine 2)

10. **AmountInput**
11. **IssueSelector** ⭐⭐
12. **ButtonGroup**
13. **DateSelector**
14. **TabFilter**

#### Phase 4 : Data & Feedback (Semaine 3)

15. **ProgressBar**
16. **FormIndicator**
17. **LeaderboardRow**
18. **SkeletonCard**
19. **EmptyState**
20. **Toast**

#### Phase 5 : Advanced (Semaine 3)

21. **Sparkline** (charts)

---

## Implémentation des Écrans

### Ordre Recommandé

#### Sprint 1 : Auth & Navigation (Semaine 1)

1. **LoginScreen**
2. **RegisterScreen**
3. Bottom Tab Navigator

#### Sprint 2 : Home & Matchs (Semaine 2-3)

4. **HomeScreen** ⭐⭐⭐
   - Liste des matchs
   - Filtres (date, compétition, confiance)
   - Pull to refresh
5. **MatchDetailScreen** ⭐⭐
   - Hero section
   - Card pronostic
   - Stats tabs
   - Bottom sheet pronostiquer

#### Sprint 3 : Paris (Semaine 4)

6. **NewBetScreen** (Ticket) ⭐⭐
   - Liste sélections
   - AmountInput
   - Calcul gain potentiel
7. **MyBetsScreen**
   - Historique avec filtres
   - Card par pari

#### Sprint 4 : Social & Profil (Semaine 5)

8. **LeaderboardScreen**
   - Podium top 3
   - Liste classement
9. **ProfileScreen**
   - Banque virtuelle
   - Stats
   - Suivi algo
10. **SettingsScreen**

---

## State Management

### Option 1 : Zustand (Recommandé - Simple & Performant)

**`src/store/authStore.ts`** :

```typescript
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  pseudo: string;
  email: string;
  balance: number;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateBalance: (newBalance: number) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: async (email, password) => {
        // API call
        const response = await loginAPI(email, password);
        set({
          user: response.user,
          token: response.token,
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },

      updateBalance: (newBalance) => {
        set((state) => ({
          user: state.user ? { ...state.user, balance: newBalance } : null,
        }));
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

**`src/store/betsStore.ts`** :

```typescript
import { create } from 'zustand';

interface BetSelection {
  matchId: string;
  match: string; // "PSG vs Lyon"
  issue: '1' | 'N' | '2';
  confidence: number;
}

interface BetsState {
  currentTicket: BetSelection[];
  addSelection: (selection: BetSelection) => void;
  removeSelection: (matchId: string) => void;
  clearTicket: () => void;
}

export const useBetsStore = create<BetsState>((set) => ({
  currentTicket: [],

  addSelection: (selection) =>
    set((state) => ({
      currentTicket: [...state.currentTicket, selection],
    })),

  removeSelection: (matchId) =>
    set((state) => ({
      currentTicket: state.currentTicket.filter((s) => s.matchId !== matchId),
    })),

  clearTicket: () => set({ currentTicket: [] }),
}));
```

### Usage dans un Composant

```typescript
import { useAuthStore } from '../store/authStore';
import { useBetsStore } from '../store/betsStore';

export default function MyComponent() {
  const { user, logout } = useAuthStore();
  const { currentTicket, addSelection } = useBetsStore();

  return (
    <View>
      <Text>Solde: {user?.balance}€</Text>
      <Text>Ticket: {currentTicket.length} sélections</Text>
    </View>
  );
}
```

---

## API Integration

### Setup Axios

**`src/services/api.ts`** :

```typescript
import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.betprono.com';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor pour ajouter le token
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor pour gérer les erreurs
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expiré, logout
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default api;
```

### React Query Setup

**`App.tsx`** :

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
}
```

### Exemple de Hook avec React Query

**`src/hooks/useMatches.ts`** :

```typescript
import { useQuery } from '@tanstack/react-query';
import api from '../services/api';
import { Match } from '../constants/types';

export const useMatches = (date: Date, competition?: string) => {
  return useQuery({
    queryKey: ['matches', date.toISOString(), competition],
    queryFn: async () => {
      const response = await api.get<Match[]>('/matches', {
        params: {
          date: date.toISOString().split('T')[0],
          competition,
        },
      });
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 min
  });
};

export const useMatchDetail = (matchId: string) => {
  return useQuery({
    queryKey: ['match', matchId],
    queryFn: async () => {
      const response = await api.get(`/matches/${matchId}`);
      return response.data;
    },
  });
};
```

---

## Animations & Polish

### Haptic Feedback

**`src/utils/haptic.ts`** :

```typescript
import * as Haptics from 'expo-haptics';

export const haptic = {
  light: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
  medium: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
  heavy: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
  success: () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),
  error: () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),
};
```

### Animations avec Reanimated

Exemple pour un badge qui pulse :

```typescript
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const PulsingBadge = ({ confidence }: { confidence: number }) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    if (confidence > 80) {
      scale.value = withRepeat(
        withTiming(1.1, { duration: 1000 }),
        -1,
        true
      );
    }
  }, [confidence]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <BadgeConfiance confidence={confidence} />
    </Animated.View>
  );
};
```

---

## Testing

### Jest & React Native Testing Library

```bash
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
```

**Exemple de test** `src/components/buttons/__tests__/Button.test.tsx` :

```typescript
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button label="Test" onPress={() => {}} />);
    expect(getByText('Test')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button label="Test" onPress={onPress} />);
    fireEvent.press(getByText('Test'));
    expect(onPress).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button label="Test" onPress={onPress} disabled />
    );
    fireEvent.press(getByText('Test'));
    expect(onPress).not.toHaveBeenCalled();
  });
});
```

---

## Déploiement

### Build pour Production

#### iOS (App Store)

```bash
# Build iOS
eas build --platform ios

# Submit to App Store
eas submit --platform ios
```

#### Android (Google Play)

```bash
# Build Android
eas build --platform android

# Submit to Google Play
eas submit --platform android
```

### Configuration EAS

**`eas.json`** :

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

---

## Checklist Avant Release

### Fonctionnalités

- [ ] Authentification (login, register, logout)
- [ ] Liste des matchs avec filtres
- [ ] Détail match avec stats
- [ ] Création de paris
- [ ] Historique des paris
- [ ] Classement
- [ ] Profil utilisateur
- [ ] Paramètres

### UX/UI

- [ ] Toutes les animations sont fluides (60fps)
- [ ] Haptic feedback sur toutes les actions importantes
- [ ] Loading states partout
- [ ] Empty states partout
- [ ] Error handling avec messages clairs
- [ ] Pull to refresh sur les listes
- [ ] Skeleton loaders

### Performance

- [ ] Images optimisées
- [ ] API calls avec cache (React Query)
- [ ] Pas de re-renders inutiles
- [ ] Bundle size optimisé

### Accessibilité

- [ ] Tous les boutons ont un accessibilityLabel
- [ ] Contraste WCAG AA respecté
- [ ] Taille de tap minimum 44x44

### Sécurité

- [ ] Tokens stockés de manière sécurisée
- [ ] HTTPS uniquement
- [ ] Validation côté client ET serveur
- [ ] Pas de données sensibles dans les logs

---

## 🎯 Timeline Suggérée

| Semaine | Objectif | Tâches |
|---------|----------|--------|
| **1** | Setup & Auth | Setup projet, fonts, navigation, LoginScreen, RegisterScreen |
| **2** | Composants de base | Button, Input, Badges, Cards basiques |
| **3** | HomeScreen | CardMatch, filtres, liste matchs, pull-to-refresh |
| **4** | MatchDetail | Hero, CardPronostic, tabs stats, bottom sheet |
| **5** | Bets | NewBetScreen (ticket), MyBetsScreen (historique) |
| **6** | Leaderboard & Profile | LeaderboardScreen, ProfileScreen, SettingsScreen |
| **7** | Animations & Polish | Reanimated, haptic, sparkline, transitions |
| **8** | Testing & Fixes | Tests, bug fixes, optimisations |
| **9** | Beta Testing | TestFlight/Play Store Internal Testing |
| **10** | Release | Production deployment |

**Total : 10 semaines pour une v1 complète**

---

## 📚 Ressources Utiles

### Documentation

- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [Zustand](https://docs.pmnd.rs/zustand)
- [React Query](https://tanstack.com/query/latest)

### Outils

- [Expo Go](https://expo.dev/client) : Tester sur device
- [EAS Build](https://docs.expo.dev/build/introduction/) : Build cloud
- [Expo Snack](https://snack.expo.dev/) : Prototypage rapide

### Design

- [React Native Directory](https://reactnative.directory/) : Trouver des librairies
- [Lottie Files](https://lottiefiles.com/) : Animations
- [Unsplash](https://unsplash.com/) : Photos libres de droits

---

**Prêt à coder ? Let's build BetProno! 🚀⚽**
