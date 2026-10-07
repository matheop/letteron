import type * as React from 'react';

/** Names of the built-in icons (2px round stroke, drawn in currentColor). */
export type IconName =
  | 'bookmark' | 'archive' | 'unarchive' | 'trash' | 'search' | 'plus' | 'x' | 'check'
  | 'chevron-down' | 'chevron-up' | 'arrow-left' | 'list' | 'grid' | 'folder' | 'hash'
  | 'mail' | 'alert' | 'clock' | 'refresh' | 'logout' | 'sun' | 'moon' | 'monitor'
  | 'download' | 'external' | 'keyboard' | 'menu' | 'video' | 'post' | 'article' | 'link';
/** An icon name, or your own node (an inline SVG in currentColor). */
export type IconProp = IconName | React.ReactNode;

export interface IconProps {
  name: IconName;
  /** px, default 18. */
  size?: number;
  /** Accessible name. Omit for decorative icons (aria-hidden). */
  label?: string;
  className?: string;
}
export declare function Icon(props: IconProps): React.ReactElement;

export interface LogoProps {
  /** lockup (default): symbol + "letteron". mark: the symbol alone. app-icon: the symbol on a rounded square (favicon, extension, store). */
  variant?: 'lockup' | 'mark' | 'app-icon';
  /** color (default): coral glass. mono: one colour, currentColor. reverse: white glass, for coral or photo grounds. dark: app-icon on the night tile. */
  tone?: 'color' | 'mono' | 'reverse' | 'dark';
  /** Side of the symbol in px (the lockup text follows at 60%). Default 40 for the lockup, 64 otherwise. At 32px and below it switches to the flat version. */
  size?: number;
  /** Accessible name of the mark and app-icon. Default "LetterOn". */
  label?: string;
  className?: string;
}
export declare function Logo(props: LogoProps): React.ReactElement;

/** The horizontal lockup at three text sizes: md 22px (headers, sidebar), lg 28px (sign-in), xl 36px. Same as Logo variant="lockup". */
export declare function Wordmark(props: { size?: 'md' | 'lg' | 'xl'; className?: string }): React.ReactElement;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: one per screen, the main action. secondary (default): everything else. ghost: low-emphasis, inline. danger: destructive, outlined. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'md' | 'sm';
  icon?: IconProp;
  /** Full width. */
  block?: boolean;
  /** Renders a link styled as a button. */
  href?: string;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconProp;
  /** Required: becomes aria-label and tooltip. */
  label: string;
  variant?: 'ghost' | 'secondary';
  /** md 44px (default), sm 36px. */
  size?: 'md' | 'sm';
  tone?: 'danger';
  href?: string;
}
export declare function IconButton(props: IconButtonProps): React.ReactElement;

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visible label, always required. */
  label: string;
  /** Help text under the field. */
  hint?: string;
  /** Error message; replaces the hint and marks the field invalid. */
  error?: string;
  /** A link on the label row, e.g. "Forgot password?". */
  actionLabel?: string;
  actionHref?: string;
  /** Renders a textarea. No MVP screen needs one. */
  multiline?: boolean;
}
export declare function TextField(props: TextFieldProps): React.ReactElement;

export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Accessible label (visually hidden). Default "Search". */
  label?: string;
}
export declare function SearchField(props: SearchFieldProps): React.ReactElement;

export interface BadgeProps {
  tone?: 'neutral' | 'coral' | 'sun' | 'mint';
  children?: React.ReactNode;
  className?: string;
}
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface AvatarProps {
  /** Full name: gives the initials, the accessible label and (without tone) a stable colour. */
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'coral' | 'sun' | 'mint';
  className?: string;
}
export declare function Avatar(props: AvatarProps): React.ReactElement;

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Toggle state (aria-pressed). */
  selected?: boolean;
  /** Number of matching bookmarks, shown after the label. */
  count?: number;
  icon?: IconProp;
  /** Makes it an applied-filter chip with a remove button instead of a toggle. */
  onRemove?: () => void;
}
export declare function Chip(props: ChipProps): React.ReactElement;

export interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** "Type", "Collection", "Tag", "Status". */
  label: string;
  /** Applied value(s), e.g. "Video". Shows "Type: Video" in the active style. */
  value?: string;
  /** Its Menu is open (chevron up, aria-expanded). */
  open?: boolean;
}
export declare function FilterButton(props: FilterButtonProps): React.ReactElement;

export interface MenuItem {
  value?: string;
  label: string;
  checked?: boolean;
  count?: number;
  icon?: IconProp;
}
export interface MenuProps {
  /** Accessible name, e.g. "Filter by type". */
  label: string;
  items: MenuItem[];
  /** Default true. Position it yourself under its FilterButton. */
  open?: boolean;
  className?: string;
}
export declare function Menu(props: MenuProps): React.ReactElement | null;

export interface SegmentedOption {
  value: string;
  label: string;
  icon?: IconProp;
}
export interface SegmentedControlProps {
  label: string;
  options: SegmentedOption[];
  value: string;
  /** Icons only; each label becomes aria-label and tooltip. */
  iconOnly?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}
export declare function SegmentedControl(props: SegmentedControlProps): React.ReactElement;

export interface NavItemProps {
  label: string;
  icon?: IconProp;
  /** A colour token name for a collection dot ("coral", "sun", "mint", "ink"), instead of an icon. */
  dot?: string;
  count?: number;
  /** sun: the "to read" counter. */
  countTone?: 'neutral' | 'sun';
  current?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}
export declare function NavItem(props: NavItemProps): React.ReactElement;

export type BookmarkType = 'video' | 'post' | 'article' | 'link';
/** Icon + label for a content type: Video, X post, Article, Link. */
export declare function TypeTag(props: { type: BookmarkType }): React.ReactElement;

export interface BookmarkCardProps {
  type: BookmarkType;
  title: string;
  /** Site name (article, link), channel (video) or author @handle (X post). */
  source?: string;
  /** Video only, already formatted: "18:42". */
  duration?: string;
  /** Article only, in minutes: 8 → "8 min read". */
  readingTime?: number;
  /** When the bookmark was saved (ISO string or Date). Shown as "3h ago", "2d ago", then "Sep 12". */
  addedAt?: string | Date;
  /** Reference time for addedAt, for mockups and tests. Defaults to now. */
  now?: string | Date;
  /** Article excerpt, or the start of the text for an X post. Ignored for video and link. */
  excerpt?: string;
  thumbnail?: string;
  /** Zero or one collection. */
  collection?: string;
  tags?: string[];
  archived?: boolean;
  layout?: 'grid' | 'list';
  /** Opens the bookmark: the title becomes a link or button stretched over the card. */
  href?: string;
  onOpen?: () => void;
  /** Hover/focus actions. onArchive shows Archive (or Unarchive when archived). */
  onArchive?: () => void;
  onDelete?: () => void;
  /** Shows the hover actions permanently (mockups, touch). */
  showActions?: boolean;
  className?: string;
}
export declare function BookmarkCard(props: BookmarkCardProps): React.ReactElement;
/** The date rule BookmarkCard uses: "Just now", "12m ago", "3h ago", "2d ago", "Sep 12", "Sep 12, 2025". */
export declare function formatAddedAt(value: string | Date, now?: string | Date): string;
/** 8 → "8 min read". */
export declare function formatReadingTime(minutes: number): string;

export interface AlertProps {
  tone?: 'error' | 'info' | 'success';
  title?: string;
  icon?: IconProp;
  children?: React.ReactNode;
  className?: string;
}
export declare function Alert(props: AlertProps): React.ReactElement;

export interface ToastProps {
  title: string;
  children?: React.ReactNode;
  icon?: IconProp;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}
export declare function Toast(props: ToastProps): React.ReactElement;

export interface DialogProps {
  title: string;
  description?: string;
  /** Extra content between the text and the buttons, e.g. a TextField. */
  children?: React.ReactNode;
  icon?: IconProp;
  tone?: 'danger';
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  /** Default true. The scrim fills its nearest positioned parent. */
  open?: boolean;
  className?: string;
}
export declare function Dialog(props: DialogProps): React.ReactElement | null;

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: IconProp;
  tone?: 'coral' | 'sun' | 'mint';
  /** lg for onboarding and big moments (display title), md elsewhere. */
  size?: 'md' | 'lg';
  /** Actions. */
  children?: React.ReactNode;
  className?: string;
}
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;

export declare function Skeleton(props: { width?: number | string; height?: number | string; radius?: 'full' | 'sm' | 'lg'; className?: string }): React.ReactElement;
export declare function SkeletonBookmark(props: { layout?: 'grid' | 'list'; titleWidth?: string }): React.ReactElement;

export declare function Kbd(props: { children: React.ReactNode; className?: string }): React.ReactElement;

declare global {
  interface Window {
    LetterOn: {
      Icon: typeof Icon; Logo: typeof Logo; Wordmark: typeof Wordmark; Button: typeof Button; IconButton: typeof IconButton;
      TextField: typeof TextField; SearchField: typeof SearchField; Badge: typeof Badge; Avatar: typeof Avatar;
      Chip: typeof Chip; FilterButton: typeof FilterButton; Menu: typeof Menu; SegmentedControl: typeof SegmentedControl;
      NavItem: typeof NavItem; TypeTag: typeof TypeTag; BookmarkCard: typeof BookmarkCard;
      Alert: typeof Alert; Toast: typeof Toast; Dialog: typeof Dialog; EmptyState: typeof EmptyState;
      Skeleton: typeof Skeleton; SkeletonBookmark: typeof SkeletonBookmark; Kbd: typeof Kbd;
      formatAddedAt: typeof formatAddedAt; formatReadingTime: typeof formatReadingTime; iconNames: string[];
    };
  }
}
