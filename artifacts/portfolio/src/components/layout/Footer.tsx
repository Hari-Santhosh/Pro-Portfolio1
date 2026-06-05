export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/50 bg-background py-8">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground font-mono text-sm">
          Designed & Built by Gali Hari Santhosh
        </div>
        
        <div className="text-muted-foreground/50 font-mono text-xs">
          &copy; {year} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
