# 🧩 BetProno - Exemples d'Implémentation des Composants

> Code React Native prêt à l'emploi pour les composants principaux

---

## 📖 Table des matières

1. [Button](#button)
2. [BadgeConfiance](#badgeconfiance)
3. [CardMatch](#cardmatch)
4. [IssueSelector](#issueselector)
5. [AmountInput](#amountinput)
6. [ProgressBar](#progressbar)
7. [Toast](#toast)
8. [SkeletonCard](#skeletoncard)

---

## Button

**Fichier** : `src/components/buttons/Button.tsx`

```typescript
import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, borderRadius, spacing } from '../../constants/design-tokens';
import { haptic } from '../../utils/haptic';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const handlePress = () => {
    if (!disabled && !loading) {
      haptic.medium();
      onPress();
    }
  };

  const containerStyle: ViewStyle = {
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.5 : 1,
  };

  const buttonHeight = size === 'small' ? 36 : size === 'medium' ? 48 : 56;
  const fontSize = size === 'small' ? 13 : size === 'medium' ? 15 : 16;

  // Primary variant avec gradient
  if (variant === 'primary' && !disabled) {
    return (
      <TouchableOpacity
        onPress={handlePress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={containerStyle}
      >
        <LinearGradient
          colors={['#18E08F', '#2F7BFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.button,
            {
              height: buttonHeight,
              borderRadius: borderRadius.md,
              paddingHorizontal: size === 'small' ? 16 : size === 'medium' ? 24 : 32,
            },
          ]}
        >
          {loading ? (
            <ActivityIndicator color={colors.text.primary} />
          ) : (
            <>
              {icon && iconPosition === 'left' && icon}
              <Text style={[styles.primaryText, { fontSize }]}>{label}</Text>
              {icon && iconPosition === 'right' && icon}
            </>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  // Autres variantes
  const variantStyles = {
    primary: styles.primaryButton,
    secondary: styles.secondaryButton,
    ghost: styles.ghostButton,
    danger: styles.dangerButton,
  };

  const textStyles = {
    primary: styles.primaryText,
    secondary: styles.secondaryText,
    ghost: styles.ghostText,
    danger: styles.dangerText,
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[
        containerStyle,
        styles.button,
        variantStyles[variant],
        {
          height: buttonHeight,
          paddingHorizontal: size === 'small' ? 16 : size === 'medium' ? 24 : 32,
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' || variant === 'danger' ? colors.text.primary : colors.accent.secondary}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          <Text style={[textStyles[variant], { fontSize }]}>{label}</Text>
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.md,
    gap: spacing.sm,
  },
  primaryButton: {
    backgroundColor: colors.accent.primary,
  },
  secondaryButton: {
    backgroundColor: colors.background.elevated,
    borderWidth: 1,
    borderColor: colors.accent.secondary,
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  dangerButton: {
    backgroundColor: colors.feedback.error,
  },
  primaryText: {
    ...typography.button,
    color: colors.text.primary,
  },
  secondaryText: {
    ...typography.button,
    color: colors.text.primary,
  },
  ghostText: {
    ...typography.button,
    color: colors.accent.secondary,
    textTransform: 'none',
  },
  dangerText: {
    ...typography.button,
    color: colors.text.primary,
  },
});
```

**Usage** :

```typescript
import Button from './components/buttons/Button';

<Button label="Valider" onPress={() => console.log('Pressed')} />
<Button label="Annuler" variant="secondary" onPress={() => {}} />
<Button label="Supprimer" variant="danger" size="small" />
<Button label="Charger..." loading />
```

---

## BadgeConfiance

**Fichier** : `src/components/badges/BadgeConfiance.tsx`

```typescript
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { colors, typography, borderRadius, spacing, getConfidenceStyle } from '../../constants/design-tokens';

interface BadgeConfianceProps {
  confidence: number; // 0-100
  size?: 'small' | 'medium' | 'large';
  showGlow?: boolean;
  showLabel?: boolean;
}

export default function BadgeConfiance({
  confidence,
  size = 'medium',
  showGlow = true,
  showLabel = false,
}: BadgeConfianceProps) {
  const style = getConfidenceStyle(confidence);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  // Animation pulse si confiance forte
  useEffect(() => {
    if (showGlow && style.glow) {
      scale.value = withRepeat(
        withTiming(1.05, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
      opacity.value = withRepeat(
        withTiming(0.7, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
    }
  }, [confidence, showGlow, style.glow]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const sizeStyles = {
    small: { width: 48, height: 24, fontSize: 11 },
    medium: { width: 56, height: 28, fontSize: 13 },
    large: { width: 72, height: 36, fontSize: 16 },
  };

  const currentSize = sizeStyles[size];

  return (
    <View style={{ position: 'relative' }}>
      {/* Glow effect */}
      {showGlow && style.glow && (
        <Animated.View
          style={[
            styles.glow,
            {
              width: currentSize.width + 8,
              height: currentSize.height + 8,
              borderRadius: borderRadius.sm,
              backgroundColor: style.backgroundColor,
            },
            animatedStyle,
          ]}
        />
      )}

      {/* Badge */}
      <View
        style={[
          styles.badge,
          {
            backgroundColor: style.backgroundColor,
            width: currentSize.width,
            height: currentSize.height,
            borderRadius: borderRadius.sm,
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color: style.color,
              fontSize: currentSize.fontSize,
              fontFamily: 'Poppins-SemiBold',
            },
          ]}
        >
          {Math.round(confidence)}%
        </Text>
      </View>

      {/* Label optionnel */}
      {showLabel && (
        <Text style={styles.label}>{style.label}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  glow: {
    position: 'absolute',
    top: -4,
    left: -4,
    opacity: 0.3,
  },
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
  },
  label: {
    ...typography.caption,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});
```

**Usage** :

```typescript
<BadgeConfiance confidence={73} />
<BadgeConfiance confidence={45} size="small" />
<BadgeConfiance confidence={82} showLabel />
```

---

## CardMatch

**Fichier** : `src/components/cards/CardMatch.tsx`

```typescript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors, typography, borderRadius, spacing, cardPadding, elevation } from '../../constants/design-tokens';
import BadgeConfiance from '../badges/BadgeConfiance';
import ProgressBar from '../data/ProgressBar';
import { haptic } from '../../utils/haptic';

interface CardMatchProps {
  match: {
    id: string;
    homeTeam: {
      name: string;
      shortName: string;
      logo: string;
    };
    awayTeam: {
      name: string;
      shortName: string;
      logo: string;
    };
    competition: string;
    date: Date;
    prediction?: {
      issue: '1' | 'N' | '2';
      confidence: number;
    };
  };
  onPress?: () => void;
  variant?: 'default' | 'compact';
}

export default function CardMatch({ match, onPress, variant = 'default' }: CardMatchProps) {
  const { homeTeam, awayTeam, competition, date, prediction } = match;

  const handlePress = () => {
    if (onPress) {
      haptic.light();
      onPress();
    }
  };

  const isHighConfidence = prediction && prediction.confidence > 80;
  const logoSize = variant === 'compact' ? 36 : 48;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const getIssueLabelFr = (issue: '1' | 'N' | '2') => {
    const labels = { '1': 'Victoire dom.', N: 'Nul', '2': 'Victoire ext.' };
    return labels[issue];
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={[
        styles.card,
        isHighConfidence && styles.cardHighConfidence,
        elevation.low,
      ]}
    >
      {/* Barre de confiance */}
      {prediction && prediction.confidence > 60 && (
        <View style={styles.confidenceBar}>
          <ProgressBar
            value={prediction.confidence}
            height={3}
            gradient
            showLabel={false}
          />
        </View>
      )}

      <View style={styles.content}>
        {/* Teams Section */}
        <View style={styles.teamsSection}>
          {/* Home Team */}
          <View style={styles.teamRow}>
            <Image source={{ uri: homeTeam.logo }} style={{ width: logoSize, height: logoSize }} />
            <Text style={styles.teamName} numberOfLines={1}>
              {variant === 'compact' ? homeTeam.shortName : homeTeam.name}
            </Text>
          </View>

          {/* VS */}
          <Text style={styles.vs}>vs</Text>

          {/* Away Team */}
          <View style={styles.teamRow}>
            <Image source={{ uri: awayTeam.logo }} style={{ width: logoSize, height: logoSize }} />
            <Text style={styles.teamName} numberOfLines={1}>
              {variant === 'compact' ? awayTeam.shortName : awayTeam.name}
            </Text>
          </View>
        </View>

        {/* Meta Section */}
        <View style={styles.metaSection}>
          <Text style={styles.competition}>{competition}</Text>
          <Text style={styles.time}>{formatTime(date)}</Text>
          {prediction && (
            <Text style={styles.prediction}>
              Prono: {prediction.issue} {variant !== 'compact' && `• ${getIssueLabelFr(prediction.issue)}`}
            </Text>
          )}
        </View>

        {/* Confidence Badge */}
        {prediction && (
          <View style={styles.badgeSection}>
            <BadgeConfiance
              confidence={prediction.confidence}
              size={variant === 'compact' ? 'small' : 'medium'}
              showGlow={prediction.confidence > 80}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.surface,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border.subtle,
  },
  cardHighConfidence: {
    borderLeftWidth: 3,
    borderLeftColor: colors.accent.primary,
  },
  confidenceBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    padding: cardPadding.horizontal,
    flexDirection: 'row',
    gap: spacing.md,
  },
  teamsSection: {
    flex: 1,
    gap: spacing.sm,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  teamName: {
    ...typography.bodyLarge,
    color: colors.text.primary,
    fontWeight: '600',
    flex: 1,
  },
  vs: {
    ...typography.caption,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  metaSection: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  },
  competition: {
    ...typography.bodySmall,
    color: colors.text.secondary,
  },
  time: {
    ...typography.bodySmall,
    color: colors.text.secondary,
  },
  prediction: {
    ...typography.caption,
    color: colors.accent.primary,
  },
  badgeSection: {
    justifyContent: 'center',
  },
});
```

**Usage** :

```typescript
<CardMatch
  match={{
    id: '1',
    homeTeam: {
      name: 'Paris Saint-Germain',
      shortName: 'PSG',
      logo: 'https://...',
    },
    awayTeam: {
      name: 'Olympique Lyonnais',
      shortName: 'Lyon',
      logo: 'https://...',
    },
    competition: 'Ligue 1',
    date: new Date('2024-11-20T21:00:00'),
    prediction: {
      issue: '1',
      confidence: 73,
    },
  }}
  onPress={() => navigation.navigate('MatchDetail', { matchId: '1' })}
/>
```

---

## IssueSelector

**Fichier** : `src/components/buttons/IssueSelector.tsx`

```typescript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, borderRadius, spacing } from '../../constants/design-tokens';
import { haptic } from '../../utils/haptic';

interface IssueSelectorProps {
  value?: '1' | 'N' | '2';
  onChange: (value: '1' | 'N' | '2') => void;
  teams?: {
    home: string;
    away: string;
  };
  disabled?: boolean;
}

export default function IssueSelector({ value, onChange, teams, disabled = false }: IssueSelectorProps) {
  const handleSelect = (issue: '1' | 'N' | '2') => {
    if (!disabled) {
      haptic.light();
      onChange(issue);
    }
  };

  const renderButton = (issue: '1' | 'N' | '2', label: string) => {
    const isSelected = value === issue;

    if (isSelected) {
      return (
        <TouchableOpacity
          key={issue}
          style={styles.buttonContainer}
          onPress={() => handleSelect(issue)}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#18E08F', '#2F7BFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.selectedButton}
          >
            <Text style={styles.selectedIssue}>{issue}</Text>
            <Text style={styles.selectedLabel}>{label}</Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        key={issue}
        style={[styles.buttonContainer, styles.unselectedButton]}
        onPress={() => handleSelect(issue)}
        activeOpacity={0.7}
      >
        <Text style={styles.unselectedIssue}>{issue}</Text>
        <Text style={styles.unselectedLabel}>{label}</Text>
      </TouchableOpacity>
    );
  };

  const labels = {
    '1': teams?.home || 'Domicile',
    N: 'Nul',
    '2': teams?.away || 'Extérieur',
  };

  return (
    <View style={styles.container}>
      {renderButton('1', labels['1'])}
      {renderButton('N', labels.N)}
      {renderButton('2', labels['2'])}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  buttonContainer: {
    flex: 1,
  },
  selectedButton: {
    height: 80,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xs,
  },
  unselectedButton: {
    height: 80,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background.elevated,
    borderWidth: 1,
    borderColor: colors.border.medium,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xs,
  },
  selectedIssue: {
    ...typography.h2,
    color: colors.text.primary,
    fontFamily: 'Poppins-Bold',
  },
  selectedLabel: {
    ...typography.bodySmall,
    color: colors.text.primary,
  },
  unselectedIssue: {
    ...typography.h2,
    color: colors.text.secondary,
    fontFamily: 'Poppins-SemiBold',
  },
  unselectedLabel: {
    ...typography.bodySmall,
    color: colors.text.secondary,
  },
});
```

**Usage** :

```typescript
const [selectedIssue, setSelectedIssue] = useState<'1' | 'N' | '2' | undefined>();

<IssueSelector
  value={selectedIssue}
  onChange={setSelectedIssue}
  teams={{ home: 'PSG', away: 'Lyon' }}
/>
```

---

## AmountInput

**Fichier** : `src/components/inputs/AmountInput.tsx`

```typescript
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, borderRadius, spacing } from '../../constants/design-tokens';
import { formatCurrency } from '../../constants/design-tokens';
import { haptic } from '../../utils/haptic';

interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  balance?: number;
  currency?: string;
}

export default function AmountInput({
  value,
  onChange,
  min = 1,
  max,
  step = 10,
  balance,
  currency = '€',
}: AmountInputProps) {
  const handleIncrement = () => {
    const newValue = value + step;
    if (!max || newValue <= max) {
      haptic.light();
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = value - step;
    if (newValue >= min) {
      haptic.light();
      onChange(newValue);
    }
  };

  const handleChangeText = (text: string) => {
    const numValue = parseInt(text.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(numValue)) {
      if (!max || numValue <= max) {
        onChange(Math.max(min, numValue));
      }
    } else {
      onChange(min);
    }
  };

  const isMaxReached = max ? value >= max : false;
  const isMinReached = value <= min;

  return (
    <View>
      <View style={styles.container}>
        {/* Minus Button */}
        <TouchableOpacity
          style={[styles.button, isMinReached && styles.buttonDisabled]}
          onPress={handleDecrement}
          disabled={isMinReached}
        >
          <Ionicons name="remove" size={24} color={isMinReached ? colors.text.tertiary : colors.text.primary} />
        </TouchableOpacity>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            value={`${value}`}
            onChangeText={handleChangeText}
            keyboardType="number-pad"
            style={styles.input}
            textAlign="center"
            selectTextOnFocus
          />
          <Text style={styles.currency}>{currency}</Text>
        </View>

        {/* Plus Button */}
        <TouchableOpacity
          style={[styles.button, isMaxReached && styles.buttonDisabled]}
          onPress={handleIncrement}
          disabled={isMaxReached}
        >
          <Ionicons name="add" size={24} color={isMaxReached ? colors.text.tertiary : colors.text.primary} />
        </TouchableOpacity>
      </View>

      {/* Balance Info */}
      {balance !== undefined && (
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Solde actuel :</Text>
          <Text style={styles.balanceValue}>{formatCurrency(balance)}</Text>
        </View>
      )}

      {balance !== undefined && (
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Solde après pari :</Text>
          <Text style={[styles.balanceValue, { color: balance - value < 0 ? colors.feedback.error : colors.text.primary }]}>
            {formatCurrency(balance - value)}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background.elevated,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.medium,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    backgroundColor: colors.background.elevated,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border.medium,
    paddingHorizontal: spacing.md,
    gap: spacing.xs,
  },
  input: {
    ...typography.numbersMedium,
    color: colors.text.primary,
    flex: 1,
  },
  currency: {
    ...typography.h3,
    color: colors.text.secondary,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  balanceLabel: {
    ...typography.body,
    color: colors.text.secondary,
  },
  balanceValue: {
    ...typography.body,
    color: colors.text.primary,
    fontWeight: '600',
  },
});
```

**Usage** :

```typescript
const [stake, setStake] = useState(50);
const balance = 1250;

<AmountInput
  value={stake}
  onChange={setStake}
  min={10}
  max={balance}
  step={10}
  balance={balance}
/>
```

---

## ProgressBar

**Fichier** : `src/components/data/ProgressBar.tsx`

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing } from '../../constants/design-tokens';

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  color?: string;
  backgroundColor?: string;
  height?: number;
  width?: number | string;
  orientation?: 'horizontal' | 'vertical';
  showLabel?: boolean;
  gradient?: boolean;
}

export default function ProgressBar({
  value,
  max = 100,
  color = colors.accent.primary,
  backgroundColor = colors.border.subtle,
  height = 8,
  width = '100%',
  orientation = 'horizontal',
  showLabel = false,
  gradient = false,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  if (orientation === 'vertical') {
    return (
      <View style={styles.verticalContainer}>
        <View style={[styles.verticalTrack, { width: height, height: width, backgroundColor }]}>
          {gradient ? (
            <LinearGradient
              colors={['#18E08F', '#2F7BFF']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={[styles.verticalFill, { height: `${percentage}%` }]}
            />
          ) : (
            <View style={[styles.verticalFill, { height: `${percentage}%`, backgroundColor: color }]} />
          )}
        </View>
        {showLabel && <Text style={styles.label}>{Math.round(percentage)}%</Text>}
      </View>
    );
  }

  return (
    <View style={styles.horizontalContainer}>
      <View style={[styles.horizontalTrack, { height, width, backgroundColor }]}>
        {gradient ? (
          <LinearGradient
            colors={['#18E08F', '#2F7BFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.horizontalFill, { width: `${percentage}%` }]}
          />
        ) : (
          <View style={[styles.horizontalFill, { width: `${percentage}%`, backgroundColor: color }]} />
        )}
      </View>
      {showLabel && <Text style={styles.label}>{Math.round(percentage)}%</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  horizontalTrack: {
    borderRadius: 999,
    overflow: 'hidden',
  },
  horizontalFill: {
    height: '100%',
    borderRadius: 999,
  },
  verticalContainer: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  verticalTrack: {
    borderRadius: 999,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  verticalFill: {
    width: '100%',
    borderRadius: 999,
  },
  label: {
    fontSize: 12,
    color: colors.text.secondary,
    fontFamily: 'Poppins-SemiBold',
  },
});
```

**Usage** :

```typescript
<ProgressBar value={73} gradient showLabel />
<ProgressBar value={45} color={colors.feedback.warning} />
<ProgressBar value={90} orientation="vertical" height={80} width={8} />
```

---

## Toast

**Fichier** : `src/components/feedback/Toast.tsx`

```typescript
import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, borderRadius, spacing, elevation } from '../../constants/design-tokens';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
  onHide?: () => void;
}

export default function Toast({ message, type, duration = 3000, onHide }: ToastProps) {
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);

  useEffect(() => {
    // Show
    translateY.value = withSpring(0);
    opacity.value = withTiming(1);

    // Hide after duration
    const timer = setTimeout(() => {
      translateY.value = withSpring(100);
      opacity.value = withTiming(0, {}, () => {
        if (onHide) {
          runOnJS(onHide)();
        }
      });
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const typeStyles = {
    success: {
      backgroundColor: colors.feedback.success,
      icon: 'checkmark-circle' as const,
    },
    error: {
      backgroundColor: colors.feedback.error,
      icon: 'close-circle' as const,
    },
    info: {
      backgroundColor: colors.accent.secondary,
      icon: 'information-circle' as const,
    },
  };

  const currentType = typeStyles[type];

  return (
    <Animated.View style={[styles.container, { backgroundColor: currentType.backgroundColor }, animatedStyle, elevation.high]}>
      <Ionicons name={currentType.icon} size={20} color={colors.text.primary} />
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    left: spacing.lg,
    right: spacing.lg,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    zIndex: 1000,
  },
  message: {
    ...typography.body,
    color: colors.text.primary,
    flex: 1,
  },
});
```

**Usage avec Provider** :

```typescript
// ToastProvider.tsx
import { createContext, useContext, useState } from 'react';
import Toast from '../components/feedback/Toast';

const ToastContext = createContext<any>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<any>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast {...toast} onHide={() => setToast(null)} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

// Usage dans un composant
const { showToast } = useToast();
showToast('Pari ajouté au ticket !', 'success');
```

---

## SkeletonCard

**Fichier** : `src/components/feedback/SkeletonCard.tsx`

```typescript
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, borderRadius, spacing, cardPadding } from '../../constants/design-tokens';

interface SkeletonCardProps {
  type: 'match' | 'bet' | 'stat';
  count?: number;
}

export default function SkeletonCard({ type, count = 1 }: SkeletonCardProps) {
  const shimmerTranslate = useSharedValue(-1);

  useEffect(() => {
    shimmerTranslate.value = withRepeat(
      withTiming(1, { duration: 1500 }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shimmerTranslate.value * 400 }],
  }));

  const renderMatchSkeleton = () => (
    <View style={styles.card}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.03)', 'rgba(255, 255, 255, 0)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.shimmer, animatedStyle]}
      />
      <View style={styles.matchContent}>
        <View style={styles.matchTeams}>
          <View style={styles.teamRow}>
            <View style={[styles.skeleton, styles.logo]} />
            <View style={[styles.skeleton, { width: 120, height: 16 }]} />
          </View>
          <View style={[styles.skeleton, { width: 24, height: 12, alignSelf: 'center' }]} />
          <View style={styles.teamRow}>
            <View style={[styles.skeleton, styles.logo]} />
            <View style={[styles.skeleton, { width: 120, height: 16 }]} />
          </View>
        </View>
        <View style={styles.matchMeta}>
          <View style={[styles.skeleton, { width: 60, height: 12 }]} />
          <View style={[styles.skeleton, { width: 48, height: 24, marginTop: spacing.xs }]} />
        </View>
      </View>
    </View>
  );

  const skeletons = Array.from({ length: count }, (_, i) => (
    <View key={i}>{type === 'match' && renderMatchSkeleton()}</View>
  ));

  return <>{skeletons}</>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.surface,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    padding: cardPadding.horizontal,
    overflow: 'hidden',
    position: 'relative',
  },
  shimmer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  matchContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  matchTeams: {
    flex: 1,
    gap: spacing.sm,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  matchMeta: {
    alignItems: 'flex-end',
  },
  skeleton: {
    backgroundColor: colors.border.subtle,
    borderRadius: borderRadius.sm,
  },
});
```

**Usage** :

```typescript
{isLoading ? (
  <SkeletonCard type="match" count={5} />
) : (
  matches.map(match => <CardMatch key={match.id} match={match} />)
)}
```

---

## 🎯 Récapitulatif

Vous avez maintenant **8 composants complets** prêts à l'emploi :

1. ✅ **Button** - 4 variantes (primary, secondary, ghost, danger)
2. ✅ **BadgeConfiance** - Avec animation pulse
3. ✅ **CardMatch** - Card match complète avec barre de confiance
4. ✅ **IssueSelector** - Choix 1/N/2 avec gradient
5. ✅ **AmountInput** - Input de mise avec boutons +/-
6. ✅ **ProgressBar** - Horizontal/vertical avec gradient
7. ✅ **Toast** - Notifications animées
8. ✅ **SkeletonCard** - Placeholder avec shimmer effect

### Prochains Composants à Implémenter

- **CardPronostic** (avec BlurView pour glassmorphism)
- **CardBet**
- **LeaderboardRow**
- **FormIndicator**
- **EmptyState**
- **TabFilter**
- **DateSelector**

---

**Ces exemples sont production-ready et suivent toutes les best practices React Native ! 🚀**
