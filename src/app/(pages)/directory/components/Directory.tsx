import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Directory() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="Your query..." className="w-96"/>
        <Button type="submit" variant="secondary" className="h-12 min-w-24">
          Search
        </Button>
      </div>
    </div>
  );
}
