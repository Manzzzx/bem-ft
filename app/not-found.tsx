import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Home, BookOpen, Users, Phone, GraduationCap } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-background flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center w-full">
        
        {/* 404 Illustration */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-blue-600/10 dark:text-blue-400/10 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Code brackets for IT */}
              <div className="text-6xl md:text-7xl font-mono text-blue-600 dark:text-blue-400 animate-pulse">
                {'{ 404 }'}
              </div>
              {/* Blueprint lines for Civil Engineering */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-blue-400 dark:border-blue-500 border-dashed rounded opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-2 border-blue-400 dark:border-blue-500 border-dashed rounded opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Error Message */}
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

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-blue-200 dark:hover:border-blue-800">
            <Link href="/" className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Home className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground">Beranda</h3>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-blue-200 dark:hover:border-blue-800">
            <Link href="/pmb-teknik" className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground">PMB Teknik</h3>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-blue-200 dark:hover:border-blue-800">
            <Link href="/dosen" className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground">Dosen</h3>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-blue-200 dark:hover:border-blue-800">
            <Link href="/tentang" className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground">Tentang Kami</h3>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-blue-200 dark:hover:border-blue-800">
            <Link href="/kontak" className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground">Kontak</h3>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-blue-200 dark:hover:border-blue-800">
            <Link href="/pengurus" className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground">Pengurus</h3>
            </Link>
          </Card>
        </div>

        {/* Main Action Button */}
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