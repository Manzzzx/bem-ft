import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, BookOpen, Users, Phone, GraduationCap } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-60px)] w-full bg-background flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center w-full">
        
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-blue-600/10 dark:text-blue-400/10 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="text-6xl md:text-7xl font-mono text-blue-600 dark:text-blue-400 animate-pulse">
                {'{ 404 }'}
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-blue-400 dark:border-blue-500 border-dashed rounded opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-2 border-blue-400 dark:border-blue-500 border-dashed rounded opacity-60"></div>
            </div>
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Oops! Halaman Tidak Ditemukan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sepertinya ada bug di kode atau blueprint yang salah 😅 
            <br />
            Jangan khawatir, mari kita debug bersama!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 px-8 py-3 rounded-lg">
            <Link href="/kontak">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Link>
          </Button>
        </div>

      </div>
    </div>
  )
}