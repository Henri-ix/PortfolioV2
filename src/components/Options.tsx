import { useState, useEffect } from 'react'
import React from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import type { Folder } from './Types'

export default function Options({ folder }: { folder: Folder }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setSelectedIndex((prev) => (prev + 1) % folder.options.length)
      } 
      else if (e.key === 'ArrowUp') {
        setSelectedIndex((prev) => (prev - 1 + folder.options.length) % folder.options.length)
      } 
      else if (e.key === 'Enter') {
        const selectedOption = folder.options[selectedIndex]
        if (selectedOption) {
          navigate({ to: selectedOption.url as any })
        }
      }
      else if (e.key === 'Escape' && folder.parent) {
        navigate({ to: folder.parent as any })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [folder, selectedIndex, navigate]) // Dependencies are crucial here

  return (
    <div className="md:border-r-2 border-dashed border-yellow-400  text-yellow-400 flex flex-row sm:flex-col  justify-center items-center gap-2 p-2 md:min-w-1/6">
      {folder.parent && (
        <Link to={folder.parent as any} className="opacity-50 hover:opacity-100 mb-4">
          [ESC] Back
        </Link>
      )}

      {folder.options.map((file, index) => {
        const isSelected = index === selectedIndex
        return (
          <Link 
            key={index} 
            to={file.url as any} 
            className={`w-full  py-1 transition-colors m ${
              'hover:text-yellow-400/10 text-xs lg:text-sm xl:text-base 2xl:text-xl'
            }`}
          >
            <h2>
              {isSelected ? `> ${file.title}` : file.title}
            </h2>
          </Link>
        )
      })}
    </div>
  )
}