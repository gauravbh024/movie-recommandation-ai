"use client"

import { Badge } from "@/components/ui/badge"
import { Tv, ExternalLink } from "lucide-react"

interface StreamingPlatform {
  provider_id: number
  provider_name: string
  logo_path: string
  display_priority: number
}

interface StreamingPlatformsProps {
  platforms: StreamingPlatform[]
  movieTitle: string
}

export function StreamingPlatforms({ platforms, movieTitle }: StreamingPlatformsProps) {
  if (!platforms || platforms.length === 0) {
    return null
  }

  const popularPlatforms = platforms.sort((a, b) => a.display_priority - b.display_priority).slice(0, 4)

  return (
    <div className="flex items-center space-x-2 mb-3">
      <Tv className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">Watch on:</span>
      <div className="flex items-center space-x-2">
        {popularPlatforms.map((platform) => (
          <Badge
            key={platform.provider_id}
            variant="outline"
            className="cosmic-card bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 cursor-pointer transition-colors"
            onClick={() => {
              // In a real app, this would link to the platform
              window.open(
                `https://www.google.com/search?q=watch+${encodeURIComponent(movieTitle)}+on+${encodeURIComponent(platform.provider_name)}`,
                "_blank",
              )
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w92${platform.logo_path}`}
              alt={platform.provider_name}
              className="h-3 w-3 mr-1 rounded"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = "none"
              }}
            />
            {platform.provider_name}
            <ExternalLink className="h-3 w-3 ml-1" />
          </Badge>
        ))}
      </div>
    </div>
  )
}
