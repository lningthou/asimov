import { useState } from 'react';
import { Play, Clock, Database } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import GlassCard from '@/components/ui/GlassCard';
import type { DataResult } from './mockData';

interface DataResultCardProps {
  result: DataResult;
}

export default function DataResultCard({ result }: DataResultCardProps) {
  const [previewOpen, setPreviewOpen] = useState(false);

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'Asimov':
        return 'bg-[var(--accent)]/20 text-[var(--accent)] border-[var(--accent)]';
      case 'Ego4D':
        return 'bg-[var(--accent-2)]/20 text-[var(--accent-2)] border-[var(--accent-2)]';
      case 'EgoDex':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500';
      default:
        return 'bg-[var(--panel)] text-[var(--text-secondary)]';
    }
  };

  return (
    <>
      <GlassCard hover={true} className="flex flex-col h-full">
        {/* Thumbnail placeholder */}
        <div className="w-full aspect-video bg-gradient-to-br from-[var(--panel)] to-[var(--panel-strong)] rounded-lg mb-4 flex items-center justify-center border border-[var(--border)]">
          <Play size={48} className="text-[var(--text-secondary)] opacity-50" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] line-clamp-2">
            {result.title}
          </h3>

          <p className="text-[var(--text-secondary)] text-sm line-clamp-2">
            {result.description}
          </p>

          {/* Modalities */}
          <div className="flex flex-wrap gap-2">
            {result.modalities.map((modality) => (
              <Badge
                key={modality}
                variant="outline"
                className="text-xs border-[var(--border)] bg-[var(--panel)]"
              >
                {modality}
              </Badge>
            ))}
          </div>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{result.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Database size={14} />
              <Badge variant="outline" className={`text-xs ${getSourceColor(result.source)}`}>
                {result.source}
              </Badge>
            </div>
          </div>
        </div>

        {/* Preview Button */}
        <Button
          onClick={() => setPreviewOpen(true)}
          variant="outline"
          className="w-full mt-4 border-[var(--border)] hover:bg-[var(--panel-strong)] hover:border-[var(--accent)]"
        >
          Preview
        </Button>
      </GlassCard>

      {/* Preview Dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="bg-[var(--bg)] border-[var(--border)] max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-[var(--text-primary)]">{result.title}</DialogTitle>
            <DialogDescription className="text-[var(--text-secondary)]">
              {result.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Video placeholder */}
            <div className="w-full aspect-video bg-gradient-to-br from-[var(--panel)] to-[var(--panel-strong)] rounded-lg flex items-center justify-center border border-[var(--border)]">
              <div className="text-center">
                <Play size={64} className="text-[var(--text-secondary)] opacity-50 mx-auto mb-2" />
                <p className="text-[var(--text-secondary)] text-sm">Video preview placeholder</p>
              </div>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-[var(--text-secondary)]">Duration:</span>
                <span className="text-[var(--text-primary)] ml-2">{result.duration}</span>
              </div>
              <div>
                <span className="text-[var(--text-secondary)]">Source:</span>
                <span className="text-[var(--text-primary)] ml-2">{result.source}</span>
              </div>
              <div>
                <span className="text-[var(--text-secondary)]">Task Type:</span>
                <span className="text-[var(--text-primary)] ml-2">{result.taskType}</span>
              </div>
              <div>
                <span className="text-[var(--text-secondary)]">Environment:</span>
                <span className="text-[var(--text-primary)] ml-2">{result.environment}</span>
              </div>
            </div>

            <div>
              <span className="text-[var(--text-secondary)]">Modalities:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {result.modalities.map((modality) => (
                  <Badge key={modality} variant="outline" className="border-[var(--border)]">
                    {modality}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
