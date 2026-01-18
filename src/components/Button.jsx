function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  icon, 
  className = '',
  href
}) {
  const baseStyles = 'inline-flex items-center gap-2 font-medium transition-all duration-300'
  
  const variants = {
    primary: 'bg-black text-white rounded-full px-6 py-3 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'text-gray-900 underline decoration-2 underline-offset-4 font-semibold hover:text-gray-600',
    outline: 'bg-white text-gray-900 border border-gray-200 rounded-full px-6 py-3 hover:border-gray-900 active:scale-95'
  }

  const Component = href ? 'a' : 'button'

  return (
    <Component 
      onClick={onClick}
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </Component>
  )
}

export default Button
