import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export default function CodeBlock({ code, language='javascript' }) {
  const ref = useRef()
  useEffect(() => { if(ref.current) Prism.highlightElement(ref.current) }, [code])
  return (
    <pre className="code-pre"><code ref={ref} className={`language-${language}`}>{code}</code></pre>
  )
}
