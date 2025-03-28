declare const _brand: unique symbol

declare global {
  export type Nullable<T> = T | null
  export type Keys<T extends Record<string, unknown>> = keyof T
  export type Values<T extends Record<string, unknown>> = T[Keys<T>]
  export type Brand<K, T> = K & { [_brand]: T }
}

export {}
