export function formatCurrency(
  value: string | number,
  options?: Intl.NumberFormatOptions
): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options,
  })
}
