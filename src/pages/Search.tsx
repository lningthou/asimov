import { useState } from 'react';

import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import SearchBar from '@/components/search/SearchBar';
import FiltersPanel from '@/components/search/FiltersPanel';
import ResultsGrid from '@/components/search/ResultsGrid';
import { mockData } from '@/components/search/mockData';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('best-match');
  const [loading, setLoading] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [filters, setFilters] = useState({
    taskTypes: [] as string[],
    environments: [] as string[],
    modalities: [] as string[],
    durations: [] as string[],
  });

  const handleFilterChange = (category: string, value: string) => {
    setFilters((prev) => {
      const categoryFilters = prev[category as keyof typeof prev];
      const updated = categoryFilters.includes(value)
        ? categoryFilters.filter((item) => item !== value)
        : [...categoryFilters, value];

      return { ...prev, [category]: updated };
    });
  };

  const handleSearch = () => {
    // Simulate search loading
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setSearchQuery('');
    setFilters({
      taskTypes: [],
      environments: [],
      modalities: [],
      durations: [],
    });
    setSortBy('best-match');
  };

  // Filter results based on active filters
  const filteredResults = mockData.filter((result) => {
    if (filters.taskTypes.length > 0 && !filters.taskTypes.includes(result.taskType)) {
      return false;
    }
    if (filters.environments.length > 0 && !filters.environments.includes(result.environment)) {
      return false;
    }
    if (filters.modalities.length > 0) {
      const hasMatchingModality = filters.modalities.some((modality) =>
        result.modalities.includes(modality)
      );
      if (!hasMatchingModality) return false;
    }
    return true;
  });

  // Sort results
  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id.localeCompare(a.id); // Mock sorting by ID
      case 'diverse':
        return b.modalities.length - a.modalities.length;
      default:
        return 0; // 'best-match' - keep default order
    }
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Search Egocentric Data
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Discover high-quality demonstrations for your robotics and embodied AI projects.
          </p>
        </div>

        {/* Search Bar */}
        <div
          className="mb-8 max-w-4xl mx-auto"
        >
          <SearchBar value={searchQuery} onChange={setSearchQuery} onSearch={handleSearch} />
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          {/* Mobile Filters Button */}
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="lg:hidden border-[var(--border)] hover:bg-[var(--panel-strong)]"
              >
                <SlidersHorizontal size={20} className="mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-[var(--bg)] border-[var(--border)] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-[var(--text-primary)]">Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FiltersPanel filters={filters} onFilterChange={handleFilterChange} />
              </div>
            </SheetContent>
          </Sheet>

          {/* Sort Control */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-[var(--text-secondary)] text-sm whitespace-nowrap">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px] bg-[var(--input)] border-[var(--border)] text-[var(--text-primary)]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[var(--popover)] border-[var(--border)]">
                <SelectItem value="best-match">Best match</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="diverse">Most diverse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="text-[var(--text-secondary)] text-sm">
            {sortedResults.length} {sortedResults.length === 1 ? 'result' : 'results'}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FiltersPanel filters={filters} onFilterChange={handleFilterChange} />
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            <ResultsGrid results={sortedResults} loading={loading} onReset={handleReset} />
          </div>
        </div>
      </div>
    </div>
  );
}
