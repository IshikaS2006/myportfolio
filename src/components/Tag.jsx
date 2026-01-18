function Tag({ children, className = '' }) {
  return (
    <span className={`inline-block bg-white border border-gray-200 text-gray-900 rounded-full px-4 py-1 text-sm font-medium ${className}`}>
      {children}
    </span>
  )
}

export default Tag
