export function Badge({
  className = '',
  variant = 'default',
  size = 'md',
  rounded = 'full',
  children,
  ...props
}) {
  // Variant classes
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-800 text-gray-100',
    destructive: 'bg-red-100 text-red-800',
    success: 'bg-green-100 text-green-800',
    outline: 'border border-gray-300 bg-transparent'
  };

  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  };

  // Rounded classes
  const roundedClasses = {
    full: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md',
    none: 'rounded-none'
  };

  // Combine all classes
  const classes = [
    'inline-flex items-center font-medium',
    variantClasses[variant] || variantClasses.default,
    sizeClasses[size] || sizeClasses.md,
    roundedClasses[rounded] || roundedClasses.full,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
