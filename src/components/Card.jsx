function Card({ children, className = '', variant = 'default' }) {
  const variants = {
    default: 'bg-white border border-gray-200 rounded-xl p-6',
    project: 'bg-white rounded-xl overflow-hidden',
    repo: 'bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between h-full'
  }

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}

export default Card
