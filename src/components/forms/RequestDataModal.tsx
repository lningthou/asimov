import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

interface RequestDataModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RequestDataModal({ open, onOpenChange }: RequestDataModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    dataNeeds: '',
    hardware: {
      umi: false,
      camera: false,
      smartphone: false,
      aloha: false,
      forceSensing: false,
    },
    otherHardware: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast.success("Thanks, we'll reach out to you as soon as we can.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      dataNeeds: '',
      hardware: {
        umi: false,
        camera: false,
        smartphone: false,
        aloha: false,
        forceSensing: false,
      },
      otherHardware: '',
    });
    
    // Close modal
    onOpenChange(false);
  };

  const handleHardwareChange = (key: keyof typeof formData.hardware) => {
    setFormData(prev => ({
      ...prev,
      hardware: {
        ...prev.hardware,
        [key]: !prev.hardware[key],
      },
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--bg)] border-[var(--border)]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">Request Data</DialogTitle>
          <DialogDescription className="text-secondary">
            Fill out the form below and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-8 mt-6">
          {/* Personal Info Section */}
          <div className="space-y-5">
            <div>
              <span className="tag mb-3 inline-block">PERSONAL INFO</span>
              <p className="text-sm text-secondary">Tell us a bit about yourself</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-wide text-secondary">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="hairline bg-[var(--surface)] h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wide text-secondary">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="hairline bg-[var(--surface)] h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-xs uppercase tracking-wide text-secondary">Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="hairline bg-[var(--surface)] h-11"
                  required
                />
              </div>
            </div>
          </div>

          {/* Data Needs Section */}
          <div className="space-y-5 pt-2">
            <div>
              <span className="tag mb-3 inline-block">DATA NEEDS</span>
              <p className="text-sm text-secondary">Tell us about the data you're looking for</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dataNeeds" className="text-xs uppercase tracking-wide text-secondary">Description *</Label>
              <Textarea
                id="dataNeeds"
                value={formData.dataNeeds}
                onChange={(e) => setFormData({ ...formData, dataNeeds: e.target.value })}
                placeholder="Describe the type of data you need..."
                className="hairline bg-[var(--surface)] min-h-[120px]"
                rows={5}
                required
              />
            </div>
          </div>

          {/* Hardware Requirements Section */}
          <div className="space-y-5 pt-2">
            <div>
              <span className="tag mb-3 inline-block">HARDWARE</span>
              <p className="text-sm text-secondary">What hardware is required for collection?</p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 bg-[var(--surface)] hairline">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="umi"
                  checked={formData.hardware.umi}
                  onCheckedChange={() => handleHardwareChange('umi')}
                  className="rounded-none border-[var(--border-strong)]"
                />
                <Label htmlFor="umi" className="cursor-pointer font-normal">UMI</Label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="camera"
                  checked={formData.hardware.camera}
                  onCheckedChange={() => handleHardwareChange('camera')}
                  className="rounded-none border-[var(--border-strong)]"
                />
                <Label htmlFor="camera" className="cursor-pointer font-normal">Camera</Label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="smartphone"
                  checked={formData.hardware.smartphone}
                  onCheckedChange={() => handleHardwareChange('smartphone')}
                  className="rounded-none border-[var(--border-strong)]"
                />
                <Label htmlFor="smartphone" className="cursor-pointer font-normal">Smartphone</Label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="aloha"
                  checked={formData.hardware.aloha}
                  onCheckedChange={() => handleHardwareChange('aloha')}
                  className="rounded-none border-[var(--border-strong)]"
                />
                <Label htmlFor="aloha" className="cursor-pointer font-normal">ALOHA</Label>
              </div>

              <div className="flex items-center space-x-3 col-span-2">
                <Checkbox
                  id="forceSensing"
                  checked={formData.hardware.forceSensing}
                  onCheckedChange={() => handleHardwareChange('forceSensing')}
                  className="rounded-none border-[var(--border-strong)]"
                />
                <Label htmlFor="forceSensing" className="cursor-pointer font-normal">Force sensing</Label>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <Label htmlFor="otherHardware" className="text-xs uppercase tracking-wide text-secondary">Other hardware</Label>
              <Input
                id="otherHardware"
                value={formData.otherHardware}
                onChange={(e) => setFormData({ ...formData, otherHardware: e.target.value })}
                placeholder="Specify any other hardware..."
                className="hairline bg-[var(--surface)] h-11"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-[var(--border)]">
            <button
              type="submit"
              className="w-full bg-[var(--accent)] text-[var(--bg)] font-semibold py-3.5 hover:opacity-90 transition-opacity uppercase tracking-wide text-sm"
            >
              Submit Request
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

