import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props
  return (
    <div className={clsx('flex items-center gap-3', className)}>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19" cy="19" r="19" fill="#6BBF3E" />
        <path d="M12 10h3.5v7.5l6-7.5H26l-7 8.5 7.5 9H22l-6.5-8V28H12V10z" fill="white" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-white font-bold text-lg tracking-[0.15em] uppercase">Karmakoul</span>
        <span className="text-[#6BBF3E] text-[9px] tracking-[0.2em] uppercase font-medium">From fields to tables</span>
      </div>
    </div>
  )
}
