'use client';

import { useEffect, useState } from 'react';
import "./globals.css";

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Esto asegura que el componente se renderice solo en el cliente
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body>
        {mounted ? children : null} {/* Renderiza children solo en el cliente */}
      </body>
    </html>
  );
}
