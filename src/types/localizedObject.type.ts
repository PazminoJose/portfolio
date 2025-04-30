export interface LocalizedObject<T> extends Record<string, T> {
  en: T;
  es: T;
}
