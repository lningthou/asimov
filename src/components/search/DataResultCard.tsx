import { useState } from 'react';
import { Play, Target, FileVideo } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import type { GroupedDataResult } from './mockData';

interface DataResultCardProps {
  result: GroupedDataResult;
}

export default function DataResultCard({ result }: DataResultCardProps) {
  const [previewOpen, setPreviewOpen] = useState(false);

  // Format task name for display (e.g., "throw_and_catch_ball" -> "Throw and Catch Ball")
  const formatTaskName = (task: string) => {
    return task
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Format score as percentage
  const formatScore = (score: number) => {
    return `${(score * 100).toFixed(1)}%`;
  };

  return (
    <>
      <div className="hairline bg-[var(--surface)] rounded-none p-6 flex flex-col h-full hover:border-[var(--border-strong)] transition-all">
        {/* Thumbnail placeholder */}
        <div className="w-full aspect-video bg-[var(--bg)] rounded-none mb-4 flex items-center justify-center hairline">
          <Play size={48} className="text-secondary opacity-50" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-primary line-clamp-1">
              {formatTaskName(result.task)}
            </h3>
            <Badge
              variant="outline"
              className="text-xs border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] flex-shrink-0"
            >
              {formatScore(result.avgScore)}
            </Badge>
          </div>

          <p className="text-secondary text-sm line-clamp-3">
            {result.caption}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between gap-2 text-sm text-secondary">
            <div className="flex items-center gap-2">
              <Target size={14} />
              <span className="font-mono text-xs">{result.task}</span>
            </div>
            {result.files.length > 1 && (
              <div className="flex items-center gap-1 text-xs">
                <FileVideo size={14} />
                <span>{result.files.length} files</span>
              </div>
            )}
          </div>
        </div>

        {/* Preview Button */}
        <Button
          onClick={() => setPreviewOpen(true)}
          variant="outline"
          className="w-full mt-4 border-[var(--border)] hover:border-[var(--accent)] rounded-none"
        >
          Preview {result.files.length > 1 ? `(${result.files.length})` : ''}
        </Button>
      </div>

      {/* Preview Dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="bg-[var(--bg)] border-[var(--border)] max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-primary">{formatTaskName(result.task)}</DialogTitle>
            <DialogDescription className="text-secondary">
              {result.caption}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Video placeholder */}
            <div className="w-full aspect-video bg-[var(--surface)] rounded-none flex items-center justify-center hairline">
              <div className="text-center">
                <Play size={64} className="text-secondary opacity-50 mx-auto mb-2" />
              </div>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-secondary">Task:</span>
                <span className="text-primary ml-2">{result.task}</span>
              </div>
              <div>
                <span className="text-secondary">Avg Score:</span>
                <span className="text-primary ml-2">{formatScore(result.avgScore)}</span>
              </div>
            </div>

            {/* Files List */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileVideo size={16} className="text-secondary" />
                <span className="text-secondary text-sm font-medium">
                  Available Files ({result.files.length})
                </span>
              </div>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {result.files.map((file, idx) => (
                  <div key={idx} className="bg-[var(--surface)] hairline p-3 rounded space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-secondary">File {idx + 1}</span>
                      <Badge variant="outline" className="text-xs">
                        {formatScore(file.score)}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-secondary text-xs">MP4:</span>
                      <p className="text-primary text-xs font-mono mt-1 break-all">
                        {file.mp4}
                      </p>
                    </div>
                    <div>
                      <span className="text-secondary text-xs">HDF5:</span>
                      <p className="text-primary text-xs font-mono mt-1 break-all">
                        {file.hdf5}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
